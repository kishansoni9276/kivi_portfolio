import { Github } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'Formula 1 – Predicting the Position and Generating Podium Probability',
    date: '2025',
    description:
      'Built an end-to-end F1 race prediction system using Python, ML models (Linear & Logistic Regression), and Flask.',
    bullets: [
      'Preprocessed multi-file datasets and engineered features',
      'Implemented Linear & Logistic Regression ML models',
      'Deployed a web app generating real-time predictions with dynamic visualizations',
    ],
    stack: ['Python', 'ML Techniques', 'Flask', 'APIs'],
    github: 'https://github.com/KishanSoni',
    color: '#7c6dfa',
  },
  {
    num: '02',
    title: 'Donor Insights Interactive Excel Dashboard',
    date: '2025',
    description:
      'Built an interactive Excel dashboard using pivot tables, slicers, and dynamic charts to analyze donor demographics and generate actionable insights.',
    bullets: [
      'Analyzed donor demographics, top states, yearly trends, and age-group distributions',
      'Built an interactive Excel dashboard using pivot tables, slicers, and dynamic charts',
      'Enabled quick and actionable insights',
    ],
    stack: ['Microsoft Excel', 'Data Analysis', 'Pivot Tables'],
    github: 'https://github.com/KishanSoni',
    color: '#38bdf8',
  },
  {
    num: '03',
    title: 'Personalized Gift Recommendation System',
    date: '2024',
    description:
      'Collaborated on building a personalized gift recommendation website using ML, HTML, CSS, and JavaScript.',
    bullets: [
      'Collected and structured user preference data to train the recommendation model',
      'Optimized model to suggest suitable gifts based on personality traits, interests, and inputs',
      'Built the frontend website using HTML, CSS, and JavaScript',
    ],
    stack: ['HTML', 'ML', 'Python', 'CSS', 'JavaScript'],
    github: 'https://github.com/KishanSoni',
    color: '#b47ffe',
  },
]

export default function Projects() {
  return (
    <section className="section">
      <div style={{ maxWidth: 840 }}>
        <div className="section-header">
          <div className="section-label">What I've built</div>
          <h1 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h1>
          <p className="section-subtitle">
            A selection of projects spanning data analytics, machine learning and interactive dashboards.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="card"
              style={{
                animation: `fadeUp 0.6s ${i * 0.1}s ease both`,
                borderLeft: `3px solid ${p.color}`,
                paddingLeft: 28,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="project-number">{p.num}</div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}>
                    {p.title}
                  </h3>

                  <span style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    borderRadius: 100,
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    background: `${p.color}14`,
                    color: p.color,
                    border: `1px solid ${p.color}30`,
                    marginBottom: 12,
                    letterSpacing: '0.04em',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {p.date}
                  </span>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 14 }}>
                    {p.description}
                  </p>

                  <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {p.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: p.color, marginTop: 1, flexShrink: 0, fontWeight: 700 }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.stack.map(t => (
                      <span key={t} className="tag" style={{ fontSize: '0.68rem' }}>{t}</span>
                    ))}
                  </div>
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: '0.8rem', padding: '9px 16px', flexShrink: 0 }}
                >
                  <Github size={13} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
