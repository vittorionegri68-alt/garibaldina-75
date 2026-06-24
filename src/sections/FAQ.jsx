// ─────────────────────────────────────────────────────────────────────────────
// sections/FAQ.jsx — Frequently Asked Questions, Garibaldina 75 (English)
//
// Single file: data (qanda array) + React component.
// Style: uses the site's native CSS variables (index.css) — Inter / Plus
// Jakarta Sans, blue accent, generous radius. No hardcoded colours.
//
// Must stay identical in meaning to the Italian version, the FAQPage schema,
// the noscript block in index.html, and the N8N GEO/AEO analysis workflow.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';

const qanda = [
  {
    id: "centro-storico-cesena",
    domanda: "Is Garibaldina 75 a good base for visiting Cesena's historic centre?",
    risposta: "Yes, the apartment sits right in the heart of Cesena, facing the Giardini Pubblici. Squares, bars and historic landmarks like the Rocca Malatestiana are all within comfortable walking distance, no car needed.",
  },
  {
    id: "animali-ammessi",
    domanda: "Does Garibaldina 75 accept pets?",
    risposta: "Yes, Garibaldina 75 accepts pets. The ground-floor location with independent entrance makes moving around easier even with a dog or cat.",
  },
  {
    id: "smart-working",
    domanda: "Is Garibaldina 75 suitable for remote work?",
    risposta: "Yes. The apartment has free WiFi, quiet rooms and a fully equipped kitchen to handle meals independently during the working day. The central location makes it easy to take breaks between calls.",
  },
  {
    id: "fuga-romantica",
    domanda: "Is Garibaldina 75 a good choice for a romantic getaway?",
    risposta: "Yes, it's designed with that in mind too. Exposed historic wooden beams, 4-metre-high ceilings, a king-size CocoMat bed and carefully curated interiors make the apartment ideal for a romantic weekend in central Cesena.",
  },
  {
    id: "appartamento-cucina-cesena",
    domanda: "Is there an apartment with a kitchen for a short stay in Cesena?",
    risposta: "Garibaldina 75 is exactly that: an apartment in central Cesena with a fully equipped kitchen (induction hob, oven, coffee machine), ideal for short stays that combine comfort and independence.",
  },
  {
    id: "ingresso-indipendente",
    domanda: "Does Garibaldina 75 have an independent entrance?",
    risposta: "Yes, the apartment is on the ground floor with independent access, no stairs or shared spaces with other guests. A practical solution for travelling with luggage, pets, or simply wanting more privacy.",
  },
  {
    id: "viaggio-lavoro-cesena",
    domanda: "Is Garibaldina 75 a good choice for a business trip to Cesena?",
    risposta: "Yes. The central location puts offices, restaurants and services within walking distance. The apartment offers WiFi, quiet rooms and every comfort for a productive work stay.",
  },
  {
    id: "famiglie-coppie-cesena",
    domanda: "Is Garibaldina 75 suitable for families or only for couples?",
    risposta: "The apartment hosts up to 4 guests thanks to the double bed and the sofa bed in the living room. It suits both couples looking for a romantic getaway and small families.",
  },
  {
    id: "soggiorni-lunghi",
    domanda: "Is Garibaldina 75 comfortable for longer stays?",
    risposta: "Yes. The in-apartment washing machine, fully equipped kitchen and complimentary linen make even multi-day stays comfortable, without needing to go out for everyday essentials.",
  },
  {
    id: "dove-dormire-cesena",
    domanda: "Where to stay in Cesena near the historic centre?",
    risposta: "Garibaldina 75 sits right in the heart of Cesena, facing the Giardini Pubblici, just steps from the squares, bars and shops of the historic centre. It's the ideal solution for experiencing the city on foot without giving up peace and quiet.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      style={{ padding: '5.5rem 1.5rem', background: 'var(--color-bg)' }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
            }}
          >
            Frequently Asked Questions
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
              fontWeight: 700,
              color: 'var(--color-dark)',
              marginTop: '0.6rem',
            }}
          >
            Everything you need to know about Garibaldina 75
          </h2>
        </div>

        <div
          style={{
            background: 'var(--color-card)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
          }}
        >
          {qanda.map((item, i) => (
            <div
              key={item.id}
              style={{
                borderBottom:
                  i === qanda.length - 1 ? 'none' : '1px solid var(--color-border)',
              }}
            >
              <button
                onClick={() => setOpen(open === item.id ? null : item.id)}
                style={{
                  width: '100%',
                  padding: '1.3rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  textAlign: 'left',
                  transition: 'background var(--transition)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    color: 'var(--color-dark)',
                    lineHeight: 1.35,
                  }}
                >
                  {item.domanda}
                </span>
                <span
                  style={{
                    color: 'var(--color-accent)',
                    fontSize: '1.3rem',
                    fontWeight: 300,
                    flexShrink: 0,
                    transform: open === item.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  +
                </span>
              </button>
              {open === item.id && (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-muted)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    padding: '0 1.5rem 1.4rem',
                    maxWidth: 640,
                  }}
                >
                  {item.risposta}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
