const skillCategories = [
  {
    label: 'Programming Languages',
    icon: '{ }',
    color: '#7c6dfa',
    skills: ['C++', 'Java', 'C', 'Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Tools & Platforms',
    icon: '⚙',
    color: '#38bdf8',
    skills: ['MySQL', 'Power BI', 'MS Excel', 'Git', 'GitHub'],
  },
  {
    label: 'Web & Frameworks',
    icon: '🌐',
    color: '#b47ffe',
    skills: ['Flask', 'APIs', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    label: 'Machine Learning',
    icon: '🧠',
    color: '#f87171',
    skills: ['Linear Regression', 'Logistic Regression', 'Feature Engineering', 'Data Preprocessing'],
  },
  {
    label: 'Soft Skills',
    icon: '🤝',
    color: '#fb923c',
    skills: ['Problem-Solving', 'Teamwork', 'Decision-Making', 'Adaptability'],
  },
]

export default function Skills() {
  return (
    <section className="section">
      <div style={{ maxWidth: 840 }}>
        <div className="section-header">
          <div className="section-label">What I know</div>
          <h1 className="section-title">
            Skills &amp; <span className="highlight">Technologies</span>
          </h1>
          <p className="section-subtitle">
            A curated overview of the tools, languages and frameworks I work with.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 20 }}>
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              className="card"
              style={{ animation: `fadeUp 0.6s ${i * 0.08}s ease both` }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: `${cat.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', color: cat.color,
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                }}>
                  {cat.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: 'var(--text)',
                }}>
                  {cat.label}
                </h3>
              </div>

              {/* Skill pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{
                      background: `${cat.color}10`,
                      color: cat.color,
                      borderColor: `${cat.color}28`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
