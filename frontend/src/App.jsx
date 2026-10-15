import { useEffect, useRef, useState } from 'react'
import { site, works, services, steps, plans, faqs } from './data'
import './App.css'

const domain = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

// 區塊捲進畫面時淡入
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    ['#works', '作品'],
    ['#services', '服務'],
    ['#pricing', '方案'],
    ['#faq', '常見問題'],
  ]

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-name">Elmo</span>
          <span className="brand-sub">Web Studio</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label="開啟選單"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-small" onClick={() => setOpen(false)}>
            免費諮詢
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <p className="eyebrow">Web Design for Local Shops</p>
        <h1>
          幫在地小店，
          <br />
          做一個<span className="nowrap"><em>會幫你接生意</em>的網站。</span>
        </h1>
        <p className="hero-lead">
          咖啡廳、甜點店、皮拉提斯、健身工作室——從形象網站到線上預約系統，<br />
          把店的樣子好好放到網路上，讓客人找得到、看得懂、約得到。
        </p>
        <div className="hero-actions">
          <a href="#works" className="btn">看看作品</a>
          <a href="#contact" className="btn btn-ghost">免費聊聊你的需求</a>
        </div>
      </div>
      <HeroPhones />
    </section>
  )
}

// 首屏作品手機。手機版是可左右滑的輪播，越靠近中間的那支越大
function HeroPhones() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = ref.current
    let frame = 0
    const update = () => {
      frame = 0
      const center = el.scrollLeft + el.clientWidth / 2
      let nearest = 0
      let best = Infinity
      Array.from(el.children).forEach((phone, i) => {
        const d = Math.abs(phone.offsetLeft + phone.offsetWidth / 2 - center)
        phone.style.setProperty('--t', Math.min(d / phone.offsetWidth, 1).toFixed(3))
        if (d < best) {
          best = d
          nearest = i
        }
      })
      setActive(nearest)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    schedule()
    el.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      el.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [])

  const isCarousel = () => ref.current.scrollWidth > ref.current.clientWidth + 1

  const scrollToPhone = (i) => {
    const el = ref.current
    const phone = el.children[i]
    el.scrollTo({ left: phone.offsetLeft + phone.offsetWidth / 2 - el.clientWidth / 2, behavior: 'smooth' })
  }

  // 輪播中點旁邊的手機先滑到中間，點中間那支才跳到作品介紹
  const onPhoneClick = (i) => (e) => {
    if (isCarousel() && i !== active) {
      e.preventDefault()
      scrollToPhone(i)
    }
  }

  return (
    <>
      <div className="hero-phones" ref={ref} aria-label="作品手機版畫面">
        {works.map((w, i) => (
          <a
            key={w.url}
            href={`#work-${w.shot}`}
            className={i === active ? 'phone active' : 'phone'}
            title={w.name}
            onClick={onPhoneClick(i)}
          >
            <img src={`/works/${w.shot}-mobile.jpg`} alt={`${w.name} 手機版畫面`} width="480" height="1039" />
          </a>
        ))}
      </div>
      <div className="hero-dots">
        {works.map((w, i) => (
          <button
            key={w.url}
            type="button"
            className={i === active ? 'active' : undefined}
            aria-label={`看 ${w.name}`}
            onClick={() => scrollToPhone(i)}
          />
        ))}
      </div>
    </>
  )
}

function Works() {
  return (
    <section className="section" id="works">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Selected Works</p>
          <h2>作品</h2>
          <p>每個網站都依店的個性量身設計，點進去就能直接逛，電腦和手機都好看。</p>
        </div>
        <div className="works">
          {works.map((w, i) => (
            <article className="work reveal" key={w.url} id={`work-${w.shot}`}>
              <a href={w.url} target="_blank" rel="noreferrer" className="work-media" aria-label={`前往 ${w.name}`}>
                <div className="browser">
                  <div className="browser-bar">
                    <i /><i /><i />
                    <span>{domain(w.url)}</span>
                  </div>
                  <img
                    src={`/works/${w.shot}-desktop.jpg`}
                    alt={`${w.name} 電腦版首頁`}
                    width="1280"
                    height="800"
                    loading="lazy"
                  />
                </div>
                <div className="work-phone">
                  <img
                    src={`/works/${w.shot}-mobile.jpg`}
                    alt=""
                    width="480"
                    height="1039"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="work-info">
                <div>
                  <span className="work-index">No. {String(i + 1).padStart(2, '0')}</span>
                  <h3>{w.name}</h3>
                  <p className="work-type">
                    {w.type}・{w.location}
                    {w.concept && <span className="work-concept">概念作品</span>}
                  </p>
                </div>
                <div>
                  <p className="work-summary">{w.summary}</p>
                  <ul className="tags">
                    {w.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <a href={w.url} target="_blank" rel="noreferrer" className="link">
                    前往網站 ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Services</p>
          <h2>我可以幫你做什麼</h2>
          <p>你專心顧店，網站的事交給我。</p>
        </div>
        <div className="services reveal">
          {services.map((s, i) => (
            <div className="service" key={s.title}>
              <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Process</p>
          <h2>合作流程</h2>
          <p>四個步驟，簡單透明。</p>
        </div>
        <ol className="steps reveal">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-num">Step {i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Pricing</p>
          <h2>方案參考</h2>
          <p>實際報價依頁數與功能調整，諮詢完會給你明確的金額。</p>
        </div>
        <div className="plans reveal">
          {plans.map((p) => (
            <div className={p.featured ? 'plan featured' : 'plan'} key={p.name}>
              {p.featured && <span className="plan-badge">最多人選擇</span>}
              <h3>{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>
              <p className="plan-price">{p.price}</p>
              <ul>
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className={p.featured ? 'btn btn-light' : 'btn btn-ghost'}>
                詢問這個方案
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container narrow">
        <div className="section-head reveal">
          <p className="eyebrow">FAQ</p>
          <h2>常見問題</h2>
        </div>
        <div className="faqs reveal">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', shop: '', contact: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // 透過 Web3Forms 直接寄到 site.email；沒設定 key 時改開啟使用者的信箱
  const submit = async (e) => {
    e.preventDefault()
    const subject = `網站諮詢：${form.shop || form.name}`
    const body = [
      `姓名：${form.name}`,
      `店名 / 公司：${form.shop}`,
      `聯絡方式：${form.contact}`,
      '',
      form.message,
    ].join('\n')

    if (!site.web3formsKey) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject,
          from_name: site.name,
          姓名: form.name,
          店名: form.shop,
          聯絡方式: form.contact,
          需求: form.message,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setStatus('sent')
      setForm({ name: '', shop: '', contact: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>聊聊你的店吧</h2>
          <p>不確定需要什麼也沒關係，告訴我你的店和目前遇到的狀況，我會在 24 小時內回覆，諮詢完全免費。</p>
          {site.lineUrl && (
            <div className="contact-links">
              <a href={site.lineUrl} target="_blank" rel="noreferrer" className="btn btn-light">
                用 LINE 聯絡我
              </a>
            </div>
          )}
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>
            你的稱呼
            <input required value={form.name} onChange={update('name')} placeholder="林先生" />
          </label>
          <label>
            店名 / 公司
            <input value={form.shop} onChange={update('shop')} placeholder="例如：巷口咖啡" />
          </label>
          <label>
            聯絡方式
            <input required value={form.contact} onChange={update('contact')} placeholder="電話、LINE ID 或 Email" />
          </label>
          <label>
            想做什麼樣的網站？
            <textarea rows="4" value={form.message} onChange={update('message')} placeholder="簡單描述你的店、想要的功能或參考網站" />
          </label>
          <button type="submit" className="btn btn-light" disabled={status === 'sending'}>
            {status === 'sending' ? '傳送中…' : '送出諮詢'}
          </button>
          {status === 'sent' && (
            <p className="form-status">已收到你的訊息，我會在 24 小時內回覆你！</p>
          )}
          {status === 'error' && (
            <p className="form-status error">傳送失敗，請稍後再試一次。</p>
          )}
        </form>
      </div>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {site.name}・為在地小店打造的網站設計
        </div>
      </footer>
    </section>
  )
}

function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Works />
        <Services />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
    </>
  )
}

export default App
