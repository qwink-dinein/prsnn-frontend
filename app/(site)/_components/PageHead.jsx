import Link from 'next/link';
import Image from 'next/image';
import JsonLd from './JsonLd';
import { SITE_URL } from '../_lib/content';

/** Dark page header with breadcrumbs (and BreadcrumbList structured data). */
export default function PageHead({ title, intro, crumb, path, img, children }) {
  const crumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: crumb || title, item: `${SITE_URL}${path}` },
  ] };
  return (
    <section className="s-pagehead">
      <JsonLd data={crumbs} />
      <div className="s-wrap">
        <div>
          <nav className="s-crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">{crumb || title}</span></nav>
          <h1>{title}</h1>
          {intro ? <p>{intro}</p> : null}
          {children}
        </div>
        {img ? <Image src={img} alt="" width={900} height={600} sizes="(max-width: 860px) 100vw, 520px" priority /> : null}
      </div>
    </section>
  );
}
