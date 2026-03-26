import { ExternalLink, CheckCircle } from 'lucide-react'

const certs = [
  {
    title: 'Privacy and Security',
    issuer: 'NPTEL',
    date: 'Nov 2025',
    link: null,
    color: '#7c6dfa',
    icon: '🔒',
  },
  {
    title: 'The Content Writing',
    issuer: 'Udemy',
    date: 'Oct 2023',
    link: null,
    color: '#38bdf8',
    icon: '✍️',
  },
  {
    title: 'Presentation Skills & Public Speaking',
    issuer: 'Udemy',
    date: 'Oct 2023',
    link: null,
    color: '#b47ffe',
    icon: '🗣️',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Oct 2023',
    link: null,
    color: '#f87171',
    icon: '🌐',
  },
]

const training = [
  {
    title: 'C++ Programming, OOPs & Data Structures',
    issuer: 'Certified Summer Training',
    date: 'April 2025 - June 2025',
    link: null,
    color: '#b47ffe',
    icon: '💻',
    description:
      'Completed certified summer training in C++ Programming and Data Structures, gaining hands-on experience in core C++ development.',
    bullets: [
      'Gained experience in Object-Oriented Programming (OOP) principles',
      'Covered essential DSA concepts including arrays, linked lists, trees, graphs, and algorithms',
      'Learned memory management techniques and the Standard Template Library (STL)',
    ],
    stack: ['C++', 'Data Structures', 'OOP', 'STL', 'Algorithms'],
  },
]

export default function Certifications() {
  return (
    <section className="section">
      <div style={{ maxWidth: 840 }}>
        <div className="section-header">
          <div className="section-label">Credentials</div>
          <h1 className="section-title">
            Certs &amp; <span className="highlight">Training</span>
          </h1>
          <p className="section-subtitle">
            Verified credentials and professional training programs I've completed.
          </p>
        </div>

        {/* Training */}
        <div style={{ marginBottom: 44 }}>
          <div style={{
            fontSize: '0.68rem',
            color: 'var(--text-subtle)',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            marginBottom: 16,
            fontWeight: 700,
          }}>
            Training &amp; Programmes
          </div>

          {training.map((t, i) => (
            <div
              key={t.title}
              className="card"
              style={{
                animation: `fadeUp 0.6s ${i * 0.1}s ease both`,
                borderLeft: `3px solid ${t.color}`,
              }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: `${t.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem',
                }}>
                  {t.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    marginBottom: 3,
                  }}>
                    {t.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: t.color, marginBottom: 10, fontWeight: 500 }}>
                    {t.issuer} &nbsp;·&nbsp; {t.date}
                  </div>
                  <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', marginBottom: 12, lineHeight: 1.65 }}>
                    {t.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: 14, display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {t.bullets.map(b => (
                      <li key={b} style={{ fontSize: '0.84rem', color: 'var(--text-muted)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: t.color, fontWeight: 700, marginTop: 1 }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {t.stack.map(s => (
                      <span key={s} className="tag" style={{ fontSize: '0.67rem' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates grid */}
        <div>
          <div style={{
            fontSize: '0.68rem',
            color: 'var(--text-subtle)',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            marginBottom: 16,
            fontWeight: 700,
          }}>
            Certificates
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {certs.map((c, i) => (
              <a
                key={c.title}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="cert-card"
                style={{
                  '--cert-color': c.color,
                  animation: `fadeUp 0.6s ${0.1 + i * 0.08}s ease both`,
                  borderTop: `2px solid ${c.color}40`,
                }}
              >
                <div style={{ fontSize: '1.7rem', marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  marginBottom: 5,
                  lineHeight: 1.3,
                }}>
                  {c.title}
                </h3>
                <div style={{ fontSize: '0.78rem', color: c.color, marginBottom: 4, fontWeight: 600 }}>
                  {c.issuer}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 14 }}>
                  {c.date}
                </div>

                {/* Spacer */}
                <div style={{ flex: 1 }} />

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.75rem',
                  color: c.color,
                  fontWeight: 600,
                }}>
                  <CheckCircle size={12} />
                  View Certificate
                  {c.link && (
                    <ExternalLink size={10} style={{ marginLeft: 'auto' }} />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
