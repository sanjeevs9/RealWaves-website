import Image from 'next/image';
import heroImage from "@/public/heroSection/New Project (2).png";

export default function UnderConstruction() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#f5f7fa' }}>
      <Image src={heroImage.src} alt="Under Construction" width={600} height={500} style={{ borderRadius: 16, marginBottom: 32 }} />
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16 }}>Website Under Construction</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: 24 }}>We&apos;re working hard to bring you a better experience. Please check back soon!</p>
      <div style={{ fontSize: '1.1rem', background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
        <div style={{ marginBottom: 8 }}>
          <strong>Email:</strong> <a href="mailto:info@realwaves.com">info@realwaves.com</a>
        </div>
        <div>
          <strong>Phone:</strong> <a href="tel:+919009990000">+91 90099 90000</a>
        </div>
      </div>
    </div>
  );
} 