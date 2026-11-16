import { rich } from '../_components/Brand';
import PageHead from '../_components/PageHead';
import StoreButtons from '../_components/StoreButtons';
import JsonLd from '../_components/JsonLd';
import { HOURS, PRICES, SITE_URL, hoursLabel, inr, savingFor } from '../_lib/content';
import { Refunds } from '../_lib/legal';

export const metadata = {
  title: 'Prices · From ₹399 an hour | prsnn',
  description: 'One fair price list for every companion: 1 hour ₹399 to 12 hours ₹3,599. No booking fee. Full refund if nobody accepts.',
  alternates: { canonical: '/pricing' },
};

const ld = {
  '@context': 'https://schema.org', '@type': 'OfferCatalog', name: 'prsnn booking lengths', url: `${SITE_URL}/pricing`,
  itemListElement: HOURS.map((h) => ({ '@type': 'Offer', name: hoursLabel(h), price: String(PRICES[h]), priceCurrency: 'INR' })),
};

export default function Pricing() {
  return (
    <>
      <JsonLd data={ld} />
      <PageHead title="One fair price list" intro="The same price for every companion. Longer bookings cost less per hour. No booking fee, and a full refund if nobody accepts." crumb="Prices" path="/pricing"><StoreButtons /></PageHead>
      <section className="s-sec">
        <div className="s-wrap" style={{ maxWidth: 900 }}>
          <div className="s-card" style={{ padding: '12px 28px' }}>
            <table className="s-table">
              <caption className="s-sr">Prices for 1 to 12 hours</caption>
              <thead><tr><th scope="col">LENGTH</th><th scope="col">PER HOUR</th><th scope="col">YOU SAVE</th><th scope="col">PRICE</th></tr></thead>
              <tbody>
                {HOURS.map((h) => (
                  <tr key={h}>
                    <th scope="row" style={{ fontWeight: 500 }}>{rich(hoursLabel(h))}{rich(h === 4 ? <span className="s-tag" style={{ marginLeft: 8, background: 'var(--midnight)', color: 'var(--porcelain)' }}>Suggested</span> : null)}{rich(h === 12 ? <span className="s-tag" style={{ marginLeft: 8 }}>Best value</span> : null)}</th>
                    <td style={{ color: 'var(--muted)' }}>{rich(inr(Math.round(PRICES[h] / h)))}</td>
                    <td style={{ color: 'var(--champagne-text)', fontWeight: 600 }}>{rich(savingFor(h) ? inr(savingFor(h)) : '—')}</td>
                    <td className="s-num" style={{ fontSize: 19 }}>{rich(inr(PRICES[h]))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="s-small">The price is the companion’s time. Tickets, food and travel on the day are agreed between you.</p>
          <div className="s-prose" style={{ marginTop: 40 }}><Refunds /></div>
        </div>
      </section>
    </>
  );
}
