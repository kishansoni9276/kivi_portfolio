const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: 'Aug 2023 – Present',
    gradeLabel: 'CGPA',
    gradeValue: '6.4',
    color: '#7c6dfa',
    current: true,
  },
  {
    degree: 'Intermediate',
    field: '',
    institution: 'RPS Public School',
    location: 'Narnaul, Haryana',
    period: 'Apr 2022 – Mar 2023',
    gradeLabel: 'Percentage',
    gradeValue: '93%',
    color: '#38bdf8',
    current: false,
  },
  {
    degree: 'Matriculation',
    field: '',
    institution: 'Y S Niketan School',
    location: 'Buhana, Rajasthan',
    period: 'Apr 2020 – Mar 2021',
    gradeLabel: 'Percentage',
    gradeValue: '75%',
    color: '#b47ffe',
    current: false,
  },
]

export default function Education() {
  return (
    <section className="section">
      <div style={{ maxWidth: 740 }}>
        <div className="section-header">
          <div className="section-label">Academic background</div>
          <h1 className="section-title">
            My <span className="highlight">Education</span>
          </h1>
          <p className="section-subtitle">
            My academic journey — from school to university.
          </p>
        </div>

        <div className="timeline">
          {education.map((edu, i) => (
            <div
              key={edu.institution + edu.degree}
              className="timeline-item"
              style={{ animation: `fadeUp 0.6s ${i * 0.13}s ease both` }}
            >
              {/* Glow dot */}
              <div
                className="timeline-dot"
                style={{
                  color: edu.color,
                  background: edu.color,
                  boxShadow: `0 0 14px ${edu.color}80`,
                }}
              />

              <div className="card" style={{ borderLeft: `3px solid ${edu.color}` }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 14,
                }}>
                  <div style={{ flex: 1 }}>
                    {/* Degree + current badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        letterSpacing: '-0.02em',
                      }}>
                        {edu.degree}
                      </h3>
                      {edu.current && (
                        <span style={{
                          padding: '2px 9px',
                          borderRadius: 100,
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          background: 'rgba(52,211,153,0.1)',
                          color: '#34d399',
                          border: '1px solid rgba(52,211,153,0.22)',
                          letterSpacing: '0.07em',
                          textTransform: 'uppercase',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 5,
                        }}>
                          <span style={{
                            width: 5, height: 5, borderRadius: '50%',
                            background: '#34d399', display: 'inline-block',
                            animation: 'pulse 2s infinite',
                          }} />
                          Current
                        </span>
                      )}
                    </div>

                    {edu.field && (
                      <div style={{ fontSize: '0.85rem', color: edu.color, marginBottom: 4, fontWeight: 500 }}>
                        {edu.field}
                      </div>
                    )}
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 3 }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {edu.location} &nbsp;·&nbsp; {edu.period}
                    </div>
                  </div>

                  {/* Grade block */}
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{
                      fontSize: '0.65rem',
                      color: 'var(--text-subtle)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
                      marginBottom: 4,
                    }}>
                      {edu.gradeLabel}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '1.7rem',
                      color: edu.color,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}>
                      {edu.gradeValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
