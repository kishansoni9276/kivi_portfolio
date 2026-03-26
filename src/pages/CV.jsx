import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'

export default function CV() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Kishan_Soni_CV.pdf'
    link.download = 'Kishan_Soni_CV.pdf'
    link.click()
  }

  return (
    <section className="section">
      <div style={{ maxWidth: 840 }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 40,
          flexWrap: 'wrap',
          gap: 20,
          animation: 'fadeUp 0.6s ease both',
        }}>
          <div>
            <div className="section-label">My résumé</div>
            <h1 className="section-title">
              Curriculum <span className="highlight">Vitae</span>
            </h1>
          </div>
          <button onClick={handleDownload} className="btn btn-primary" style={{ alignSelf: 'flex-end' }}>
            <Download size={15} />
            Download CV
          </button>
        </div>

        {/* CV Card */}
        <div style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: 20,
          padding: '48px 52px',
          animation: 'fadeUp 0.6s 0.1s ease both',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle top gradient accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: 3,
            background: 'linear-gradient(90deg, var(--accent) 0%, #b47ffe 60%, var(--accent2) 100%)',
          }} />

          {/* Name + Contact */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 36,
            paddingBottom: 32,
            borderBottom: '1px solid var(--border)',
          }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                marginBottom: 4,
              }}>
                Kishan Soni
              </h2>
              <p style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 60%, #b47ffe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}>
                B.Tech CSE Student · Developer
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <a href="mailto:kishanseth9276@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'inherit', transition: 'color 0.2s' }}>
                <Mail size={13} color="var(--accent)" />
                kishanseth9276@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Phone size={13} color="var(--accent)" />
                +91-9838541585
              </div>
              <a href="https://www.linkedin.com/in/kishan-soni" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'inherit' }}>
                <Linkedin size={13} color="var(--accent)" />
                linkedin.com/in/kishan-soni
              </a>
              <a href="https://www.github.com/KishanSoni" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'inherit' }}>
                <Github size={13} color="var(--accent)" />
                github.com/KritikGrewal
              </a>
            </div>
          </div>

          {/* Skills */}
          <CVSection title="Skills">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              <CVSkillRow label="Languages" value="C++, Java, C, Python, JavaScript, HTML, CSS" />
              <CVSkillRow label="Tools / Platforms" value="MySQL, Power BI, MS Excel, Git, GitHub" />
              <CVSkillRow label="Soft Skills" value="Problem-Solving, Teamwork, Decision-Making, Adaptability" />
            </div>
          </CVSection>

          {/* Projects */}
          <CVSection title="Projects">
            <CVProject
              title="Formula 1 – Predicting the Position and Generating Podium Probability"
              link="https://github.com/KritikGrewal"
              date="2025"
              bullets={[
                'Built an ML-based system that predicts F1 race finishing positions and podium probability.',
                'Deployed a web app generating real-time predictions with dynamic visualizations.',
              ]}
              stack="Python · ML Techniques · Flask · APIs"
            />
            <CVProject
              title="Donor Insights Interactive Excel Dashboard"
              link="https://github.com/KritikGrewal"
              date="2025"
              bullets={[
                'Analysed donor demographics, top states, yearly trends, and age-group distributions.',
                'Generated an interactive multi-page Excel dashboard with pivot tables, slicers, and dynamic charts.',
              ]}
              stack="Microsoft Excel · Data Analysis · Pivot Tables"
            />
            <CVProject
              title="Personalized Gift Recommendation System"
              link="https://github.com/KritikGrewal"
              date="2024"
              bullets={[
                'Collaborated on building a personalized gift recommendation website.',
                'Optimized model to suggest suitable gifts based on personality traits, interests, and inputs.',
              ]}
              stack="HTML · ML · Python · CSS · JavaScript"
            />
          </CVSection>

          {/* Training */}
          <CVSection title="Training">
            <CVProject
              title="C++ Programming, OOPs & Data Structures"
              link={null}
              date="April 2025 - June 2025"
              bullets={[
                'Gained experience in Object-Oriented Programming (OOP) principles and core C++ development.',
                'Covered essential DSA concepts including arrays, linked lists, trees, graphs, and algorithms.',
              ]}
              stack="C++ · Data Structures · OOP · STL · Algorithms"
            />
          </CVSection>

          {/* Certificates */}
          <CVSection title="Certificates">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              <CVCert title="Privacy and Security" issuer="NPTEL" date="November 2025" link={null} />
              <CVCert title="The Content Writing" issuer="Udemy" date="October 2023" link={null} />
              <CVCert title="Presentation Skills & Public Speaking" issuer="Udemy" date="October 2023" link={null} />
              <CVCert title="Responsive Web Design" issuer="freeCodeCamp" date="October 2023" link={null} />
            </div>
          </CVSection>

          {/* Achievement */}
          <CVSection title="Achievements">
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: '0.87rem' }}>
              <span style={{ color: 'var(--accent)' }}>★</span>
              <span>Attained <strong>5 Star in Python</strong> on HackerRank</span>
            </div>
          </CVSection>

          {/* Education */}
          <CVSection title="Education" last>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <CVEdu degree="Bachelor of Technology – Computer Science and Engineering" institution="Lovely Professional University" location="Punjab, India" period="Aug 2023 – Present" grade="CGPA: 6.4" />
              <CVEdu degree="Intermediate" institution="RAV Public School" location="Gomtinagar, UP" period="Apr 2022 – Mar 2023" grade="93%" />
              <CVEdu degree="Matriculation" institution="Takshiila Academy" location="Akbarpur, Ambedkar Nagar, UP" period="Apr 2020 – Mar 2021" grade="75%" />
            </div>
          </CVSection>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 32, animation: 'fadeUp 0.6s 0.3s ease both' }}>
          <button onClick={handleDownload} className="btn btn-primary" style={{ fontSize: '0.95rem', padding: '13px 30px' }}>
            <Download size={16} />
            Download CV as PDF
          </button>
          <p style={{ marginTop: 12, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Place your PDF in <code style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>public/</code> as <code style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>Kritik_Grewal_CV.pdf</code>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Sub-components ── */

function CVSection({ title, children, last }) {
  return (
    <div style={{
      marginBottom: last ? 0 : 28,
      paddingBottom: last ? 0 : 28,
      borderBottom: last ? 'none' : '1px solid var(--border)',
    }}>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '0.72rem',
        textTransform: 'uppercase',
        letterSpacing: '0.16em',
        background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: 14,
      }}>
        {title}
      </h3>
      {children}
    </div>
  )
}

function CVSkillRow({ label, value }) {
  return (
    <div style={{ display: 'flex', gap: 8, fontSize: '0.85rem', lineHeight: 1.5 }}>
      <span style={{ color: 'var(--text-subtle)', minWidth: 140, flexShrink: 0, fontSize: '0.82rem' }}>• {label}:</span>
      <span style={{ color: 'var(--text-muted)' }}>{value}</span>
    </div>
  )
}

function CVProject({ title, link, date, bullets, stack }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>{title}</span>
          {link && (
            <a href={link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', display: 'flex' }}>
              <ExternalLink size={11} />
            </a>
          )}
        </div>
        <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', flexShrink: 0, fontFamily: 'var(--font-mono)' }}>{date}</span>
      </div>
      {bullets.map(b => (
        <div key={b} style={{ display: 'flex', gap: 8, fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: 4, lineHeight: 1.5 }}>
          <span style={{ color: 'var(--accent)', flexShrink: 0, fontWeight: 700 }}>›</span>
          {b}
        </div>
      ))}
      <div style={{ marginTop: 6, fontSize: '0.75rem', color: 'var(--accent)', opacity: 0.6, fontFamily: 'var(--font-mono)' }}>{stack}</div>
    </div>
  )
}

function CVCert({ title, issuer, date, link }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', gap: 12, flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <span style={{ color: 'var(--text-muted)' }}>• {title}</span>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
            <ExternalLink size={11} />
          </a>
        )}
      </div>
      <div style={{ color: 'var(--text-subtle)', fontSize: '0.78rem', flexShrink: 0, fontFamily: 'var(--font-mono)' }}>{issuer} · {date}</div>
    </div>
  )
}

function CVEdu({ degree, institution, location, period, grade }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontWeight: 700, fontSize: '0.88rem', marginBottom: 2 }}>{institution}</div>
        <div style={{ fontSize: '0.83rem', color: 'var(--text-muted)' }}>{degree}</div>
        <div style={{ fontSize: '0.79rem', color: 'var(--text-subtle)' }}>{location}</div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem' }}>{grade}</div>
        <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{period}</div>
      </div>
    </div>
  )
}
