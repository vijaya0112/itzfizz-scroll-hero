import React, { useLayoutEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './style.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '58%', text: 'Increase in pick-up point use' },
  { value: '23%', text: 'Fewer customer phone calls' },
  { value: '27%', text: 'More customers choosing convenience' },
  { value: '40%', text: 'Less friction in the delivery journey' },
]

function CarIllustration() {
  return (
    <img
      className="car-art"
      src={`${import.meta.env.BASE_URL}silver-sports-car.png`}
      alt="Sleek silver electric sports car"
      draggable="false"
    />
  )
}

function App() {
  const root = useRef(null)
  const hero = useRef(null)
  const car = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.eyebrow, .headline-line', {
        y: 28, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
        delay: 0.15
      })
      gsap.from('.stat-card', {
        y: 22, opacity: 0, duration: 0.7, stagger: 0.12,
        ease: 'power2.out', delay: 0.65
      })
      gsap.from('.car-art', {
        y: 35, scale: 0.92, opacity: 0, duration: 1.1,
        ease: 'power3.out', delay: 0.35
      })

      gsap.to(car.current, {
        x: 115,
        y: -45,
        rotate: -3,
        scale: 0.88,
        ease: 'none',
        scrollTrigger: {
          trigger: hero.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
          invalidateOnRefresh: true,
        }
      })
      gsap.to('.hero-copy', {
        y: -70,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: hero.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        }
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={root}>
      <section ref={hero} className="hero-section">
        <nav className="topbar">
          <a className="brand" href="#top" aria-label="ItzFizz home"><span className="brand-mark">i</span> itzfizz<span className="brand-dot">.</span></a>
          <span className="nav-note">DIGITAL EXPERIENCES, IN MOTION</span>
          <a className="contact-link" href="mailto:hello@itzfizz.com">LET'S TALK <span>↗</span></a>
        </nav>

        <div className="hero-copy" id="top">
          <p className="eyebrow"><span className="eyebrow-dot" /> BUILT FOR WHAT'S NEXT</p>
          <h1 aria-label="Welcome ItzFizz">
            <span className="headline-line">W E L C O M E</span>
            <span className="headline-line headline-second">I T Z F I Z Z<span className="orange-dot">.</span></span>
          </h1>
          <p className="hero-description">We turn ambitious ideas into digital experiences<br className="desktop-break" /> that move people — and business — forward.</p>
        </div>

        <div className="car-stage" ref={car}>
          <div className="speed-line speed-line-one" />
          <div className="speed-line speed-line-two" />
          <CarIllustration />
          <span className="car-caption">DESIGNED TO MOVE YOU <span>— 001</span></span>
        </div>

        <div className="stats-wrap">
          <div className="stats-heading"><span>THE IMPACT</span><span>SMALL CHANGES. BIG MOMENTUM.</span></div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <article className="stat-card" key={stat.value}>
                <div className="stat-number">{stat.value}<sup>↗</sup></div>
                <p>{stat.text}</p>
                <span className="stat-index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</div>
        <span className="hero-side-label">CREATIVE TECHNOLOGY / EST. 2024</span>
      </section>

      <section className="next-section">
        <p className="eyebrow"><span className="eyebrow-dot" /> KEEP THE MOMENTUM</p>
        <h2>Good ideas don't<br /><em>stand still.</em></h2>
        <p className="next-description">We build thoughtful digital products, purposeful brands, and seamless experiences that make the complicated feel simple.</p>
        <a href="mailto:hello@itzfizz.com" className="pill-link">MAKE SOMETHING MATTER <span>↗</span></a>
        <div className="next-orbit orbit-one" /><div className="next-orbit orbit-two" />
      </section>
      <footer><a className="brand" href="#top"><span className="brand-mark">i</span> itzfizz<span className="brand-dot">.</span></a><span>MADE TO MOVE FORWARD © 2026</span></footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
