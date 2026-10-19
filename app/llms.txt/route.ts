import { BUSINESS, SITE_NAME, SITE_URL } from "../site";
import { BagTypes } from "../bagTypes";
import { blogData } from "@/constants";

// /llms.txt: a plain-text summary of the business for AI assistants (llmstxt.org).
// No major assistant documents using it yet; it is cheap, accurate insurance.
export const dynamic = "force-static";

export function GET() {
  const a = BUSINESS.address;
  const body = `# ${SITE_NAME}

> ${SITE_NAME} is a non-woven bag manufacturer in ${a.addressLocality}, ${a.addressRegion}, India, founded in ${BUSINESS.foundingYear}. We make custom printed non-woven D-cut, U-cut, loop handle, box and BOPP laminated bags for shops, brands, events and corporate gifting, and deliver across India.

- Address: ${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}, India
- Phone / WhatsApp: ${BUSINESS.telephone}, ${BUSINESS.altTelephone}
- Email: ${BUSINESS.email}
- Also known as: ${BUSINESS.alternateNames.join(", ")}

## Bag types
${BagTypes.map((t) => `- [Non-woven ${t.name}](${SITE_URL}/non-woven-bags/${t.slug}): ${t.description}`).join("\n")}

## Pages
- [Product catalogue](${SITE_URL}/products): every bag we've made for clients, with sizes
- [About us](${SITE_URL}/about): our story and factory in Raipur

## Articles
${blogData.map((b) => `- [${b.title}](${SITE_URL}/blogs/${b.slug})`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
