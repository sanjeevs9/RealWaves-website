'use client'
import Image from 'next/image';

const logos = [
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 1.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 2.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 3.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 4.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 7.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 8.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 9.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 38.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 39.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 40.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 42.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 43.png',
  '/brandLogos/d6bce6f3e43a6308eac9ee4f8add96ac 44.png',
];

export default function BrandingCarousel() {
  return (
    <div style={{ background: '#fff', padding: '32px 0' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 500, fontSize: 24, marginBottom: 32 }}>
        Partnered with industry leaders. <span style={{ color: '#2563eb' }}>You are in Good hands</span>
      </h2>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[...logos, ...logos].map((src, idx) => (
            <div className="carousel-logo" key={idx}>
              <Image src={src} alt="Brand Logo" width={100} height={60} style={{ objectFit: 'contain' }} className='w-[80px] h-[40px] md:w-[100px] md:h-[60px]' />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .carousel-wrapper {
          overflow: hidden;
          width: 100%;
        }
        .carousel-track {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        .carousel-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 140px;
          padding: 0 32px;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 600px) {
          .carousel-logo { min-width: 90px; padding: 0 12px; }
          h2 { font-size: 18px; }
        }
      `}</style>
    </div>
  );
}