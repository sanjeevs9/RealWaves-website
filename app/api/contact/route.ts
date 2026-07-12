import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || '';
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || '';

function str(v: unknown, max = 4000): string | null {
  return typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : null;
}

function clientIp(req: Request): string | null {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return req.headers.get('x-real-ip');
}

// In-memory per-key limiter. Resets on cold start (no DB in this project to
// back a durable cap), but still meaningfully throttles a script hammering
// this endpoint directly — the same abuse pattern that hit our Portfolio
// site's exposed client-side EmailJS key.
const hits = new Map<string, number[]>();
function isRateLimited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > max;
}

// Same string pasted into 2+ unrelated fields — the pattern behind the
// spam our sibling site got.
function looksLikeSpam(values: (string | null)[]): boolean {
  const filled = values.filter((v): v is string => !!v);
  return filled.length >= 2 && new Set(filled).size === 1;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const ip = clientIp(request);
  // Pretend success rather than 429ing so a scanner doesn't learn it's
  // being rate-limited.
  if (ip && isRateLimited(`contact:${ip}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ success: true });
  }
  if (ip && isRateLimited(`contact:day:${ip}`, 3, 24 * 60 * 60 * 1000)) {
    return NextResponse.json({ success: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const phone = str(body.phone, 40);
  const category = str(body.category, 60);
  const description = str(body.description, 4000);

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (looksLikeSpam([name, email, phone, description])) {
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        accessToken: PRIVATE_KEY,
        template_params: {
          name,
          email,
          phone,
          category: category || 'Not specified',
          description: description || '',
        },
      }),
    });
    if (!res.ok) {
      console.error('[contact] emailjs failed:', res.status, await res.text());
      return NextResponse.json({ error: 'Failed to send' }, { status: 502 });
    }
  } catch (err) {
    console.error('[contact] emailjs error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
