import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Mail, Phone, Code2, BarChart2, Cpu } from 'lucide-react'

const infoItems = [
  { icon: MapPin, label: 'Location', value: 'Punjab, India' },
  { icon: Mail, label: 'Email', value: 'kishanseth9276@gmail.com' },
  { icon: Phone, label: 'Mobile', value: '+91-8053431349' },
]

const whatIDo = [
  {
    icon: Code2,
    color: '#7c6dfa',
    title: 'Software Development',
    titleColor: '#7c6dfa',
    desc: 'Developing robust applications using C++, Java, and Python with a strong focus on problem-solving.',
  },
  {
    icon: BarChart2,
    color: '#38bdf8',
    title: 'Data Analysis',
    desc: 'Building interactive dashboards with Excel and Power BI to transform Data into actionable insights.',
  },
  {
    icon: Cpu,
    color: '#b47ffe',
    title: 'Machine Learning',
    desc: 'Designing predictive models to solve real-world problems and creating web applications with Flask and JavaScript.',
  },
]

const techStack = [
  'C++', 'Java', 'Python', 'C', 'JavaScript',
  'MySQL', 'Power BI', 'MS Excel', 'Git', 'GitHub',
  'HTML/CSS', 'Machine Learning', 'Flask'
]

export default function Home() {
  return (
    <section className="section">
      <div style={{ maxWidth: 780 }}>

        {/* ── Hero ── */}
        <div style={{ marginBottom: 52, animation: 'fadeUp 0.65s ease both' }}>
          <div className="section-label">Hello, world —</div>

          <h1 className="hero-name" style={{ marginBottom: 20 }}>
            I'm Kishan<br />
            <span className="gradient-text">Soni</span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            maxWidth: 540,
          }}>
            A Computer Science &amp; Engineering student at Lovely Professional
            University, Punjab. Passionate about software development,
            machine learning, and creating interactive data-driven solutions
            and web applications.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn btn-primary">
              View Projects <ArrowRight size={15} />
            </Link>
            <Link to="/cv" className="btn btn-outline">
              Download CV
            </Link>
          </div>
        </div>

        {/* ── Info chips ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 12,
          marginBottom: 40,
          animation: 'fadeUp 0.65s 0.12s ease both',
        }}>
          {infoItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="info-chip">
              <div className="info-chip-icon">
                <Icon size={15} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div className="info-chip-label">{label}</div>
                <div className="info-chip-value" style={{ wordBreak: 'break-all', fontSize: '0.82rem' }}>{value}</div>
              </div>
            </div>
          ))}
        </div>



        {/* ── What I do ── */}
        <div style={{ animation: 'fadeUp 0.65s 0.3s ease both', marginBottom: 40 }}>
          <div className="section-label" style={{ marginBottom: 18 }}>What I do</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {whatIDo.map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="card" style={{ padding: 22 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14, color,
                }}>
                  <Icon size={18} />
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 6, fontFamily: 'var(--font-display)' }}>
                  {title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tech stack tags ── */}
        <div style={{ animation: 'fadeUp 0.65s 0.38s ease both', marginBottom: 32 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>Tech stack</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {techStack.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>

        {/* ── Achievement ── */}
        <div style={{ animation: 'fadeUp 0.65s 0.44s ease both' }}>
          <div className="card" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            borderColor: 'rgba(56,189,248,0.18)',
            background: 'rgba(56,189,248,0.04)',
            padding: '20px 24px',
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: 'rgba(56,189,248,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.3rem', flexShrink: 0,
            }}>⭐</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 2 }}>
                5 Star in Python — HackerRank
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                2025 – Present
              </div>
            </div>
            <span className="tag tag-cyan">Achievement</span>
          </div>
        </div>

      </div>
    </section>
  )
}
