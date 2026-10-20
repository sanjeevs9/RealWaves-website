import Link from 'next/link';
import type { ReactNode } from 'react';

type Crumb = { label: string; href?: string };

// Navy page header shared by the inner pages, in the same style as the home hero:
// breadcrumb, a bronze eyebrow, a big Archivo headline, an intro line and optional
// actions. `aside` sits beside the text on large screens (an image, stats, …).
export default function PageHeader({
    crumbs,
    eyebrow,
    title,
    intro,
    children,
    aside,
}: {
    crumbs: Crumb[];
    eyebrow?: string;
    title: ReactNode;
    intro?: ReactNode;
    children?: ReactNode;
    aside?: ReactNode;
}) {
    return (
        <section className="bg-forest text-ivory">
            <div className="mx-auto max-w-6xl px-4 pb-12 pt-7 sm:px-6 sm:pb-16 sm:pt-9">
                <nav aria-label="Breadcrumb">
                    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-mist sm:text-sm">
                        {crumbs.map((c, i) => {
                            const last = i === crumbs.length - 1;
                            return (
                                <li key={c.label} className="flex min-w-0 items-center gap-2">
                                    {c.href && !last ? (
                                        <Link href={c.href} className="py-1 transition-colors hover:text-ivory">{c.label}</Link>
                                    ) : (
                                        <span aria-current={last ? 'page' : undefined} className="truncate py-1 font-medium text-ivory">
                                            {c.label}
                                        </span>
                                    )}
                                    {!last && <span aria-hidden="true" className="text-mist/60">/</span>}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                <div className={`mt-8 grid gap-10 sm:mt-10 ${aside ? 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14' : ''}`}>
                    <div className="min-w-0">
                        {eyebrow && <p className="text-[15px] font-semibold text-bronze">{eyebrow}</p>}
                        <h1 className="mt-3 max-w-3xl text-balance font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[2.7rem] lg:text-[3.1rem]">
                            {title}
                        </h1>
                        {intro && (
                            <div className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-mist sm:mt-5 sm:text-[17px]">
                                {intro}
                            </div>
                        )}
                        {children && <div className="mt-7">{children}</div>}
                    </div>
                    {aside && <div className="min-w-0">{aside}</div>}
                </div>
            </div>
        </section>
    );
}
