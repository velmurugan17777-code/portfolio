import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Projects", "Resume", "Contact"];

const SKILLS = [
  { name: "JavaScript", icon: "🟨" },
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "Django", icon: "🎯" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Bootstrap", icon: "🅱" },
  { name: "MySQL", icon: "🗄️" },
];

const TOOLS = [
  { name: "VS Code", icon: "💻" },
  { name: "GitHub", icon: "🐙" },
  { name: "Python", icon: "🐍" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Antigravity", icon: "🚀" },
];

const PROJECTS = [
  {
    title: "Deepak",
    desc: "A design-focused project built with HTML, CSS, and Bootstrap — showcasing clean UI layout and responsive design.",
    github: "https://github.com/velmurugan17777-code/vel",
    live: "https://vel177.neocities.org/project/project",
    tag: "HTML · CSS · Bootstrap",
    color: "#e6962e",
  },
  {
    title: "Dribbble Portfolio Website",
    desc: "A Dribbble-style portfolio site built purely with HTML, CSS, and Bootstrap, with polished visual presentation.",
    github: "https://neocities.org/dashboard?dir=project2",
    live: "https://vel177.neocities.org/project2/project2",
    tag: "HTML · CSS · Bootstrap",
    color: "#c0392b",
  },
  {
    title: "Student Management System",
    desc: "Full-featured CRUD web app to manage student records, attendance, and grades using Django ORM and Bootstrap UI.",
    github: "https://github.com/velmurugan17777-code/vadivelmurugan",
    live: "#",
    tag: "Django · SQLite · Bootstrap",
    color: "#27ae60",
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/velmurugan17777-code/vadivelmurugan", icon: "🐙" },
  { label: "Twitter / X", href: "https://x.com/home", icon: "𝕏" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vel-murugan-4aa432344/", icon: "in" },
  { label: "Instagram", href: "https://www.instagram.com/v_e_l_u_7777/", icon: "📸" },
];

function Section({ id, children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </section>
  );
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    // close bootstrap collapse
    const toggler = document.querySelector(".navbar-collapse");
    if (toggler && toggler.classList.contains("show")) {
      toggler.classList.remove("show");
    }
  };
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : ""}`}
      style={{
        background: scrolled ? "rgba(10,8,5,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(230,150,46,0.2)" : "none",
        transition: "all 0.4s",
        padding: "0 1rem",
        height: 64,
      }}
    >
      <div className="container-xl">
        <a
          className="navbar-brand fw-bold"
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("Home"); }}
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#e6962e", fontSize: "1.3rem", letterSpacing: "0.04em" }}
        >
          ▀▄VM▄▀
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          style={{ color: "#e6962e", fontSize: "1.4rem" }}
        >
          <span style={{ color: "#e6962e" }}>☰</span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav gap-lg-2 py-3 py-lg-0">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link}>
                <a
                  className="nav-link px-3 py-2"
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link); }}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: active === link ? "#e6962e" : "#d4cfc7",
                    borderBottom: active === link ? "2px solid #e6962e" : "2px solid transparent",
                    transition: "color 0.2s",
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <Section id="home">
      <div
        className="min-vh-100 d-flex align-items-center position-relative overflow-hidden"
        style={{ paddingTop: 80 }}
      >
        {/* Ambient glow */}
        <div
          className="position-absolute d-none d-md-block"
          style={{
            right: "5%", top: "15%", width: 420, height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(230,150,46,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container-xl py-5">
          <div className="row align-items-center g-5">
            {/* Text */}
            <div className="col-12 col-lg-7 order-2 order-lg-1">
              <p className="mb-3" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e6962e" }}>
                Hello there <img src="hand.gif" alt="" style={{ width: "1.6rem", verticalAlign: "middle" }} />
              </p>
              <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.4rem, 6vw, 4.8rem)", fontWeight: 900, lineHeight: 1.05, color: "#f0ebe3" }}>
                I'm{" "}
                <span style={{ color: "#e6962e", fontStyle: "italic", position: "relative", display: "inline-block" }}>
                  Vadivel Murugan
                  <svg style={{ position: "absolute", bottom: -6, left: 0, width: "100%" }} viewBox="0 0 200 8" fill="none">
                    <path d="M2 6 Q100 2 198 6" stroke="#e6962e" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <h2 className="mt-3 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)", color: "#9a8f80", fontWeight: 400, fontStyle: "italic" }}>
                Python Full Stack Developer
              </h2>
              <p className="mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#c2b9ad", lineHeight: 1.75, maxWidth: 520 }}>
                I love transforming ideas into reliable, scalable products. Skilled across both backend and frontend stacks — building high-performance systems with intuitive user experiences.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn btn-vm-primary px-4 py-2"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn btn-vm-outline px-4 py-2"
                >
                  View Projects
                </button>
              </div>

              <div className="d-flex gap-2 flex-wrap">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} className="social-icon">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="col-12 col-lg-5 order-1 order-lg-2 text-center">
              <div className="photo-frame d-inline-block position-relative">
                <img
                  src="image.png"
                  alt="Vadivel Murugan"
                  className="rounded-circle"
                  style={{ width: "min(240px, 60vw)", height: "min(240px, 60vw)", objectFit: "cover", objectPosition: "top", border: "3px solid rgba(230,150,46,0.4)", boxShadow: "0 0 40px rgba(230,150,46,0.2)" }}
                />
                <div
                  className="position-absolute"
                  style={{
                    bottom: 12, right: -10,
                    background: "linear-gradient(135deg,#e6962e,#c0392b)",
                    color: "#050505",
                    borderRadius: 20,
                    padding: "0.35rem 0.9rem",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 14px rgba(230,150,46,0.35)",
                  }}
                >
                  ⚡ Software Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="container-xl py-section">
        <p className="section-label">Know Who</p>
        <h2 className="section-heading">About <span style={{ color: "#e6962e", fontStyle: "italic" }}>Me</span></h2>

        <div className="row g-4 mt-2">
          <div className="col-12 col-md-6">
            <div className="card-vm h-100">
              <p style={{ color: "#c2b9ad", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                Hi everyone! I'm <strong style={{ color: "#e6962e" }}>Vadivel Murugan</strong>, from Virudhunagar, Tamilnadu.
              </p>
              <p className="mt-3" style={{ color: "#c2b9ad", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                I graduated with a <strong style={{ color: "#e6962e" }}>Bachelor of Commerce in Computer Applications (B.Com CA)</strong>, 2019 batch, from SBK College, Aruppukottai, under MKM University, Madurai, Tamilnadu.
              </p>
              <p className="mt-3" style={{ color: "#c2b9ad", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                I'm passionate about building high-performance, scalable systems — from clean back-end APIs to polished front-end interfaces. I also bring 6 years of professional experience in data management, operations, and logistics from Fabtech International.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card-vm h-100">
              <h5 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#f0ebe3" }}>Core <span style={{ color: "#e6962e" }}>Strengths</span></h5>
              {["Quick learner, adapts rapidly to new technologies", "Strong analytical and problem-solving mindset", "Effective communicator and team collaborator", "Detail-oriented with a quality-first approach", "Strong time management and organizational skills"].map((s) => (
                <div key={s} className="d-flex gap-2 mb-2 align-items-start">
                  <span style={{ color: "#e6962e", marginTop: 2 }}>▸</span>
                  <span style={{ color: "#c2b9ad", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#f0ebe3" }}>Professional <span style={{ color: "#e6962e" }}>Skillset</span></h4>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {SKILLS.map((s) => <SkillChip key={s.name} {...s} />)}
          </div>
          <h4 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#f0ebe3" }}>Tools <span style={{ color: "#e6962e" }}>I Use</span></h4>
          <div className="d-flex flex-wrap gap-2">
            {TOOLS.map((t) => <SkillChip key={t.name} {...t} />)}
          </div>
        </div>
      </div>
    </Section>
  );
}

function SkillChip({ name, icon }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.45rem",
        padding: "0.45rem 1rem", borderRadius: 30,
        border: `1.5px solid ${hov ? "#e6962e" : "rgba(230,150,46,0.35)"}`,
        background: hov ? "rgba(230,150,46,0.12)" : "transparent",
        color: hov ? "#f0ebe3" : "#c2b9ad",
        fontFamily: "'DM Mono', monospace", fontSize: "0.8rem",
        letterSpacing: "0.06em", cursor: "default",
        transition: "all 0.2s", transform: hov ? "scale(1.05)" : "scale(1)",
      }}
    >
      <span>{icon}</span> {name}
    </div>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <div className="container-xl py-section">
        <p className="section-label">My Recent</p>
        <h2 className="section-heading">Recent <span style={{ color: "#e6962e", fontStyle: "italic" }}>Projects</span></h2>
        <p className="mb-4" style={{ color: "#9a8f80", fontFamily: "'DM Sans', sans-serif" }}>Here are a few projects I've worked on recently.</p>

        <div className="row g-4">
          {PROJECTS.map((p) => (
            <div key={p.title} className="col-12 col-sm-6 col-lg-4">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="h-100 position-relative overflow-hidden"
      style={{
        background: hov ? "rgba(230,150,46,0.06)" : "rgba(255,255,255,0.03)",
        border: `1.5px solid ${hov ? "rgba(230,150,46,0.6)" : "rgba(255,255,255,0.1)"}`,
        borderRadius: 16, padding: "1.75rem",
        transition: "all 0.3s",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov ? "0 20px 40px rgba(0,0,0,0.3)" : "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
      <span className="badge mb-3" style={{ background: "rgba(230,150,46,0.12)", color: "#e6962e", fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", borderRadius: 20, padding: "0.3rem 0.7rem", border: "1px solid rgba(230,150,46,0.25)" }}>
        {project.tag}
      </span>
      <h5 style={{ fontFamily: "'Playfair Display', serif", color: "#f0ebe3", marginBottom: "0.5rem" }}>{project.title}</h5>
      <p className="mb-3" style={{ color: "#9a8f80", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}>{project.desc}</p>
      <div className="d-flex gap-2 flex-wrap mt-auto">
        <a href={project.github} target="_blank" rel="noreferrer" className="btn-vm-sm">GitHub</a>
        <a href={project.live} target="_blank" rel="noreferrer" className="btn-vm-sm filled">Live →</a>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <Section id="resume">
      <div className="container-xl py-section">
        <p className="section-label">My</p>
        <h2 className="section-heading"><span style={{ color: "#e6962e", fontStyle: "italic" }}>Resume</span></h2>
        <p className="mb-5" style={{ color: "#9a8f80", fontFamily: "'DM Sans', sans-serif" }}>
          Interested in my background? Download my CV for a detailed overview.
        </p>

        <div className="row g-4 mb-5">
          {/* Experience */}
          <div className="col-12 col-lg-6">
            <h5 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#f0ebe3" }}>💼 Work <span style={{ color: "#e6962e" }}>Experience</span></h5>
            <TimelineItem
              year="6 Yrs"
              title="Multi-Role Operations Staff"
              subtitle="Fabtech International · Tirupur, Tamil Nadu · 2019–2025"
              desc="Managed large-scale data entry, invoice processing, logistics, and production supervision."
              accent
            />
          </div>
          {/* Education */}
          <div className="col-12 col-lg-6">
            <h5 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#f0ebe3" }}>🎓 <span style={{ color: "#e6962e" }}>Education</span></h5>
            <TimelineItem year="2026" title="Python Full Stack Developer" subtitle="Login 360, Velachery, Chennai" desc="Certification course covering Django, React.js, REST APIs, and full stack development." accent />
            <TimelineItem year="2019" title="B.Com (Computer Applications)" subtitle="SBK College, Aruppukottai · MKM University · 69%" desc="Bachelor of Commerce with Computer Applications." />
            
          </div>
        </div>

        <div className="text-center">
          <a
            href="resume_it.pdf"
            download
            className="btn btn-vm-primary px-5 py-3"
            style={{ fontSize: "0.9rem" }}
          >
            ⬇ Download CV
          </a>
        </div>
      </div>
    </Section>
  );
}

function TimelineItem({ year, title, subtitle, desc, accent }) {
  return (
    <div className="d-flex gap-3 mb-4">
      <div className="d-flex flex-column align-items-center" style={{ minWidth: 52 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: accent ? "linear-gradient(135deg,#e6962e,#c0392b)" : "rgba(230,150,46,0.12)",
          border: "1.5px solid rgba(230,150,46,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'DM Mono', monospace", fontSize: "0.6rem",
          color: accent ? "#fff" : "#e6962e", fontWeight: 700, textAlign: "center", lineHeight: 1.2,
        }}>
          {year}
        </div>
        <div style={{ flex: 1, width: 1.5, background: "rgba(230,150,46,0.2)", marginTop: 6 }} />
      </div>
      <div style={{ paddingTop: 8 }}>
        <h6 style={{ fontFamily: "'Playfair Display', serif", color: "#f0ebe3", marginBottom: "0.15rem" }}>{title}</h6>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#e6962e", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>{subtitle}</p>
        {desc && <p style={{ color: "#9a8f80", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem" }}>{desc}</p>}
      </div>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "01035398-a96a-4ae2-a6f9-2da8cf35af3f", ...form }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch { setStatus("error"); }
  };

  return (
    <Section id="contact">
      <div className="container-xl py-section">
        <p className="section-label">Get In</p>
        <h2 className="section-heading">Let's <span style={{ color: "#e6962e", fontStyle: "italic" }}>Connect</span></h2>

        <div className="row g-4 mt-2">
          <div className="col-12 col-lg-5">
            <div className="card-vm h-100">
              <p className="mb-4" style={{ color: "#c2b9ad", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.75 }}>
                Have a project in mind or just want to say hello? Fill in the form and I'll get back to you.
              </p>
              <div className="d-flex flex-column gap-3">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="d-flex align-items-center gap-3 text-decoration-none"
                    style={{ color: "#c2b9ad", fontFamily: "'DM Mono', monospace", fontSize: "0.82rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#e6962e"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#c2b9ad"}
                  >
                    <span style={{ fontSize: "1.2rem", width: 28, textAlign: "center" }}>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-3" style={{ borderTop: "1px solid rgba(230,150,46,0.15)" }}>
                <p style={{ color: "#9a8f80", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                  📍 Chennai, Tamil Nadu<br />
                  📞 +91 8270474354<br />
                  ✉ velmurugan17777@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="card-vm">
              <div className="mb-3">
                <label className="form-label vm-label">Your Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  className="form-control vm-input" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label vm-label">Your Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  className="form-control vm-input" placeholder="you@example.com" />
              </div>
              <div className="mb-4">
                <label className="form-label vm-label">Your Message</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  rows={5} className="form-control vm-input" placeholder="Tell me about your project..." style={{ borderRadius: 12, resize: "vertical" }} />
              </div>
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="btn w-100 py-3 fw-bold"
                style={{
                  borderRadius: 50,
                  background: status === "sent" ? "linear-gradient(135deg,#27ae60,#1a8a4a)" : "linear-gradient(135deg,#e6962e,#c0392b)",
                  border: "none", color: "#fff",
                  fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.1em",
                  boxShadow: "0 4px 20px rgba(230,150,46,0.3)",
                }}
              >
                {status === "sending" ? "Sending…" : status === "sent" ? "✓ Message Sent!" : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-center mt-2" style={{ color: "#e74c3c", fontFamily: "'DM Mono', monospace", fontSize: "0.8rem" }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(230,150,46,0.15)", position: "relative", zIndex: 1 }}>
      <div className="container-xl py-4">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-4 text-center text-md-start">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#6b6358", letterSpacing: "0.08em" }}>
              Python Full Stack Developer · Vadivel Murugan
            </span>
          </div>
          <div className="col-12 col-md-4 text-center">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#6b6358", letterSpacing: "0.08em" }}>
              Copyright © 2026 VM
            </span>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-3">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                style={{ color: "#9a8f80", fontSize: "1rem", fontFamily: "'DM Mono', monospace", fontWeight: 700, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#e6962e"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#9a8f80"}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    // Load Bootstrap JS for navbar collapse
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.toLowerCase());
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id.charAt(0).toUpperCase() + id.slice(1)); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background-color: #0d0b08 !important;
          color: #f0ebe3 !important;
          min-height: 100vh;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0d0b08; }
        ::-webkit-scrollbar-thumb { background: #e6962e; border-radius: 10px; }

        /* Layout helpers */
        .py-section { padding-top: 5rem; padding-bottom: 5rem; }
        @media (max-width: 576px) { .py-section { padding-top: 3.5rem; padding-bottom: 3.5rem; } }

        /* Section typography */
        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #e6962e;
          margin-bottom: 0.4rem;
        }
        .section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 900;
          color: #f0ebe3;
          line-height: 1.15;
        }

        /* Cards */
        .card-vm {
          background: rgba(255,255,255,0.03);
          border: 1.5px solid rgba(230,150,46,0.18);
          border-radius: 16px;
          padding: 1.75rem;
          transition: border-color 0.3s;
        }
        .card-vm:hover { border-color: rgba(230,150,46,0.45); }

        /* Buttons */
        .btn-vm-primary {
          border-radius: 50px !important;
          background: linear-gradient(135deg, #e6962e, #c0392b) !important;
          border: none !important;
          color: #fff !important;
          font-family: 'DM Mono', monospace !important;
          font-size: 0.82rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.1em !important;
          box-shadow: 0 4px 20px rgba(230,150,46,0.35) !important;
          transition: transform 0.2s !important;
        }
        .btn-vm-primary:hover { transform: scale(1.04); color: #fff !important; }

        .btn-vm-outline {
          border-radius: 50px !important;
          background: transparent !important;
          border: 1.5px solid rgba(230,150,46,0.5) !important;
          color: #e6962e !important;
          font-family: 'DM Mono', monospace !important;
          font-size: 0.82rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.1em !important;
          transition: all 0.2s !important;
        }
        .btn-vm-outline:hover { border-color: #e6962e !important; transform: scale(1.04); color: #e6962e !important; }

        .btn-vm-sm {
          display: inline-flex; align-items: center;
          padding: 0.45rem 1.1rem;
          border-radius: 30px;
          font-size: 0.78rem;
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.08em;
          text-decoration: none;
          border: 1.5px solid rgba(230,150,46,0.45);
          background: transparent;
          color: #c2b9ad;
          transition: all 0.2s;
        }
        .btn-vm-sm:hover { border-color: #e6962e; color: #e6962e; transform: scale(1.03); }
        .btn-vm-sm.filled { background: rgba(230,150,46,0.15); }
        .btn-vm-sm.filled:hover { background: #e6962e; color: #1a1410; }

        /* Social icons */
        .social-icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(230,150,46,0.35);
          display: inline-flex; align-items: center; justify-content: center;
          color: #e6962e;
          font-size: 0.95rem;
          font-family: 'DM Mono', monospace;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
        }
        .social-icon:hover {
          background: rgba(230,150,46,0.15);
          transform: translateY(-3px);
          color: #e6962e;
        }

        /* Form inputs */
        .vm-label {
          font-family: 'DM Mono', monospace !important;
          font-size: 0.7rem !important;
          letter-spacing: 0.12em !important;
          text-transform: uppercase;
          color: #9a8f80 !important;
        }
        .vm-input {
          background: rgba(255,255,255,0.05) !important;
          border: 1.5px solid rgba(230,150,46,0.25) !important;
          color: #f0ebe3 !important;
          font-family: 'DM Sans', sans-serif !important;
          border-radius: 50px !important;
          padding: 0.7rem 1.1rem !important;
          transition: border-color 0.2s !important;
        }
        .vm-input:focus {
          border-color: #e6962e !important;
          background: rgba(255,255,255,0.07) !important;
          box-shadow: 0 0 0 3px rgba(230,150,46,0.1) !important;
          color: #f0ebe3 !important;
        }
        .vm-input::placeholder { color: #6b6358 !important; }

        /* Navbar collapse mobile bg */
        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(10,8,5,0.97);
            border-radius: 12px;
            padding: 1rem 1.5rem !important;
            margin-top: 0.5rem;
            border: 1px solid rgba(230,150,46,0.15);
          }
        }

        /* Ambient blobs */
        .ambient-blob-1 {
          position: fixed; top: 10%; left: 60%;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(192,57,43,0.07) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: float 8s ease-in-out infinite;
        }
        .ambient-blob-2 {
          position: fixed; top: 55%; left: 10%;
          width: 350px; height: 350px; border-radius: 50%;
          background: radial-gradient(circle, rgba(230,150,46,0.06) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: float 11s ease-in-out infinite reverse;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @media (max-width: 768px) {
          .ambient-blob-1, .ambient-blob-2 { display: none; }
        }
      `}</style>

      <div className="ambient-blob-1" />
      <div className="ambient-blob-2" />

      <Navbar active={active} setActive={setActive} />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}