import React, { useEffect, useState, useRef } from "react";


const css = `
:root{
  --primary:#e93375;          
  --primary-dark:#bf1454;
  --accent:#f96aa5;           
  --ink:#111827;
  --muted:#6b7280;
  --bg1:#ffe6f1;              
  --bg2:#f96aa5;              
  --bg3:#e93375;              
  --card:#ffffff;
  --shadow:0 10px 30px rgba(0,0,0,.08);
  --chip:#0f1221;
  --chipText:#e5e7eb;
  --glow-strong: rgba(233,51,117,.55);
  --glow-soft:   rgba(233,51,117,.28);
}


:root[data-theme="dark"]{
  --ink:#e5e7eb; --muted:#9aa4b2; --card:#0f1424;
  --shadow:0 10px 30px rgba(0,0,0,.4);
}


*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
  color:var(--ink);
  background:linear-gradient(135deg, var(--bg1), var(--bg2), var(--bg3));
  background-attachment: fixed;
  min-height:100vh;
}
a{text-decoration:none;color:inherit}


.nav{
  position:fixed;top:0;left:0;right:0;z-index:50;
  background:rgba(255,255,255,.9);
  backdrop-filter:blur(6px);
  border-bottom:1px solid #ffd0e3;
}
:root[data-theme="dark"] .nav{background:rgba(15,20,36,.75);border-bottom-color:#151b2e}
.nav .wrap{
  max-width:1300px;
  margin:0 auto;
  display:flex;align-items:center;justify-content:space-between;
  padding:18px 28px;
}
.brand{font-weight:800;font-size:30px;letter-spacing:.3px}
.menu{display:flex;gap:24px;font-weight:600;font-size:18px}
.menu a{position:relative}
.menu a::after{
  content:"";position:absolute;left:0;right:0;bottom:-6px;height:2px;background:var(--primary);
  transform:scaleX(0);transform-origin:left;transition:.25s
}
.menu a:hover::after{transform:scaleX(1)}


.btn-ghost{
  padding:12px 18px;border:1px solid #ffc2d9;border-radius:14px;background:var(--card);font-size:16px;
  transition:box-shadow .25s ease, transform .15s ease, border-color .25s ease;
}
.btn-ghost:hover{
  box-shadow:0 0 14px var(--glow-soft), 0 0 30px var(--glow-strong);
  border-color: var(--primary);
  transform: translateY(-1px);
}
.btn{
  display:inline-block;border:1px solid var(--primary);color:var(--primary);
  padding:10px 14px;border-radius:12px;font-weight:600;
  transition:box-shadow .25s ease, transform .15s ease, background .25s ease, color .25s ease;
}
.btn:hover{
  background:var(--primary);color:#fff;
  box-shadow:0 0 14px var(--glow-soft), 0 0 30px var(--glow-strong);
  transform: translateY(-1px);
}
.tog{border:1px solid #ffc2d9;background:var(--card);border-radius:12px;padding:8px 10px;cursor:pointer;font-size:18px}


main{
  max-width:1300px;
  margin:0 auto;
  padding:140px 30px 80px;
}
[data-reveal]{opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease}
[data-reveal].is-visible{opacity:1;transform:none}


.hero{display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:40px}
.kicker{display:inline-block;background:#7a113a;color:#fff;padding:8px 12px;border-radius:12px;font-size:14px;margin-bottom:14px}
.hero h1{font-size:68px;line-height:1.05;margin:0}
.hero h1 .alt{
  background:linear-gradient(90deg,#7a113a 0%, var(--primary) 50%, #7a113a 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent;
  background-size:200% 100%;animation:shine 8s linear infinite
}
@keyframes shine{0%{background-position:0% 0}100%{background-position:200% 0}}
.hero p{color:var(--muted);max-width:720px;font-size:18px}
.hero .cta-row{display:flex;gap:16px;margin-top:22px}


.avatar-wrap{
  position:relative;justify-self:end;width:420px;height:420px;
  display:grid;place-items:center;isolation:isolate;
}
.avatar{
  width:100%;height:100%;border-radius:50%;object-fit:cover;object-position:center;
  position:relative;z-index:2;background:#fff;border:10px solid transparent;
  box-shadow:
    0 0 0 10px #ffe4f1,
    0 0 45px 18px rgba(249,106,165,.42),
    inset 0 2px 0 rgba(255,255,255,.9);
}


.section{margin-top:56px}
.s-title{
  font-size:40px;text-align:center;margin:0 0 24px;color:var(--ink);
  position: relative; transition: text-shadow .25s ease, transform .2s ease;
}
.s-title:hover{
  text-shadow:0 0 10px var(--glow-strong), 0 0 22px var(--glow-soft);
  transform: translateY(-1px);
}
.about{display:grid;grid-template-columns:1.05fr .95fr;gap:24px;align-items:start}
.bio{background:var(--card);border-radius:18px;box-shadow:var(--shadow);padding:24px;line-height:1.7;font-size:18px}
.explorer{background:var(--card);border-radius:18px;box-shadow:var(--shadow);padding:20px}


.about-img {
  display:block;
  width:100%;
  max-width:380px;
  margin:20px auto 10px;
  border-radius:20px;
  box-shadow:
    0 8px 24px rgba(233,51,117,.2),
    0 0 20px rgba(233,51,117,.15);
}



.tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px}
.tab{padding:8px 12px;border-radius:10px;border:1px solid #ffc2d9;background:var(--card);cursor:pointer;font-size:15px}
.tab[aria-selected="true"]{background:var(--primary);color:#fff;border-color:var(--primary)}
.skills{display:flex;flex-wrap:wrap;gap:10px;margin:10px 0 6px}
.skill{
  background:var(--chip);color:var(--chipText);padding:8px 12px;border-radius:12px;
  font-size:14px;display:inline-flex;align-items:center;gap:6px;cursor:pointer;
  transform:translateY(0);transition:.2s;box-shadow:0 4px 10px rgba(15,18,33,.18)
}
.skill:hover{transform:translateY(-3px)}
.skill[aria-pressed="true"]{outline:2px solid var(--primary)}
.detail{margin-top:8px}
.detail h4{margin:4px 0 6px}
.progress{height:8px;background:#ffe1ed;border-radius:999px;overflow:hidden;margin:8px 0 14px}
.progress > span{display:block;height:100%;background:linear-gradient(90deg,#ffa1c6,var(--primary));width:0}
.progress.show > span{width:var(--w);transition:width .7s ease}
.code{position:relative;background:#0f1221;color:#e5e7eb;border-radius:12px;padding:14px;overflow:auto;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}
.copy{position:absolute;top:8px;right:8px;border-radius:10px;border:1px solid #334155;background:#111827;color:#e5e7eb;padding:6px 10px;cursor:pointer}


.table-card{background:var(--card);border-radius:20px;box-shadow:var(--shadow);padding:18px}
.table-card h2{
  text-align:center;margin:16px 0 22px;color:var(--primary);
  display:inline-block;padding:10px 16px;border-radius:14px;
  background:radial-gradient(circle at 30% 20%, #ffe4f1 0%, #ffd6ea 60%, #fecdd3 100%);
  box-shadow:0 8px 20px rgba(233,51,117,.22);
  position:relative; transition:text-shadow .25s ease;
}
.table-card h2:hover{ text-shadow:0 0 10px var(--glow-strong), 0 0 22px var(--glow-soft); }
table{width:100%;border-collapse:collapse;font-size:18px}
thead th{
  background:#fff;color:var(--primary);text-align:left;padding:14px;
  border-bottom:2px solid #ffc2d9;box-shadow:0 4px 10px rgba(233,51,117,.14)
}
tbody td{padding:14px;border-top:1px solid #fde2e4}
tbody tr:nth-child(even) td{background:#ffe6f1}
tbody tr:hover td{background:#ffd8ea}


.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.card{background:var(--card);border-radius:16px;box-shadow:var(--shadow);padding:22px;transition:.3s}
.card:hover{transform:translateY(-6px);box-shadow:0 6px 16px rgba(0,0,0,.15)}
.card h3{margin:6px 0 10px;font-size:20px}


.contacto{
  display:grid;
  place-items:center;
  margin-top:80px;
}
.contact-card{
  position:relative;
  background:var(--card);
  border-radius:24px;
  padding:35px 36px 45px;
  max-width:820px;
  width:100%;
  overflow:hidden;
  animation:glowPulse 8s ease-in-out infinite;
  box-shadow:
    0 0 22px rgba(233,51,117,.12),
    0 6px 30px rgba(233,51,117,.10);
}
@keyframes glowPulse {
  0%, 100% {
    box-shadow:
      0 0 24px rgba(233,51,117,.18),
      0 0 60px rgba(233,51,117,.10);
  }
  50% {
    box-shadow:
      0 0 36px rgba(233,51,117,.28),
      0 0 90px rgba(233,51,117,.16);
  }
}
.contact-content{
  position:relative;
  z-index:2;
  text-align:center;
}
.contact-title{
  font-size:34px;
  color:var(--primary);
  margin-bottom:12px;
  text-align:center;
}
.contact-row{
  display:flex;
  justify-content:center;
  gap:20px;
  flex-wrap:wrap;
  margin-top:18px;
}
.icon-cloud{
  display:inline-grid;
  place-items:center;
  width:44px;
  height:44px;
  border-radius:16px;
  background:radial-gradient(100% 100% at 30% 20%, #ffe4f1 0%, #ffd6ea 50%, #fecdd3 100%);
  box-shadow:0 8px 24px rgba(233,51,117,.22), inset 0 1px 0 rgba(255,255,255,.9);
  font-size:22px;
  margin-right:8px;
}
.contact-item{
  background:#fff5f7;
  padding:12px 16px;
  border-radius:16px;
  border:1px solid #ffe4f1;
  display:flex;
  align-items:center;
  gap:10px;
  font-size:18px;
}
.contact-card svg, .dotted-border { display:none !important; }


footer{text-align:center;padding:34px 0;color:var(--muted);font-size:16px}

/* ===== RESPONSIVE ===== */
@media (max-width:980px){
  .hero{grid-template-columns:1fr}
  .avatar-wrap{justify-self:center;width:340px;height:340px}
  main{padding:120px 18px 60px}
  .grid{grid-template-columns:1fr}
}


:root[data-theme="dark"] {
  --bg1: #1a0121;
  --bg2: #2c0333;
  --bg3: #44064a;
  --card: #1e1a24;
  --ink: #ffffff;          /* 💡 texto blanco puro */
  --muted: #e6b8cf;        /* texto secundario más claro */
  --shadow: 0 8px 24px rgba(0, 0, 0, .6);
}


:root[data-theme="dark"] body {
  background: linear-gradient(135deg, var(--bg1), var(--bg2), var(--bg3));
  color: var(--ink);
}


:root[data-theme="dark"] p,
:root[data-theme="dark"] h1,
:root[data-theme="dark"] h2,
:root[data-theme="dark"] h3,
:root[data-theme="dark"] h4,
:root[data-theme="dark"] a,
:root[data-theme="dark"] strong,
:root[data-theme="dark"] td,
:root[data-theme="dark"] th {
  color: var(--ink) !important;
}


:root[data-theme="dark"] body {
  background: linear-gradient(135deg, var(--bg1), var(--bg2), var(--bg3));
  color: var(--ink);
}


:root[data-theme="dark"] .bio,
:root[data-theme="dark"] .explorer,
:root[data-theme="dark"] .table-card,
:root[data-theme="dark"] .card,
:root[data-theme="dark"] .contact-card {
  background: #241829;
  box-shadow: 0 0 20px rgba(233,51,117,.25);
}

:root[data-theme="dark"] .tab {
  border-color: #3a2941;
  background: #2b2030;
  color: var(--ink);
}
:root[data-theme="dark"] .tab[aria-selected="true"] {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

:root[data-theme="dark"] .btn,
:root[data-theme="dark"] .btn-ghost {
  background: #2a1b2e;
  border-color: #5e3051;
  color: #ffb8d4;
}
:root[data-theme="dark"] .btn:hover,
:root[data-theme="dark"] .btn-ghost:hover {
  background: var(--primary);
  color: #fff;
}

:root[data-theme="dark"] .s-title:hover,
:root[data-theme="dark"] .table-card h2:hover {
  text-shadow: 0 0 10px #ff66a1, 0 0 25px #e93375;
}

/* Brillo adaptado en modo oscuro */
:root[data-theme="dark"] .contact-card {
  animation: glowPulseDark 8s ease-in-out infinite;
}
@keyframes glowPulseDark {
  0%,100% { box-shadow: 0 0 20px rgba(233,51,117,.35); }
  50% { box-shadow: 0 0 45px rgba(233,51,117,.55); }
}


.fancy-tabs {
  padding: 20px;
  background: radial-gradient(circle at 30% 20%, #ffe4f1 0%, #ffd6ea 60%, #fecdd3 100%);
  border-radius: 22px;
  box-shadow: 0 8px 20px rgba(233,51,117,.18);
}

.tab-header {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.fancy-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: var(--primary);
  border: 2px solid #ffc2d9;
  border-radius: 14px;
  padding: 10px 18px;
  cursor: pointer;
  font-weight: 600;
  transition: all .25s ease;
  box-shadow: 0 3px 8px rgba(233,51,117,.12);
}
.fancy-tab:hover {
  background: var(--primary);
  color: #fff;
  transform: translateY(-2px);
}
.fancy-tab.active {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 0 15px rgba(233,51,117,.3);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 22px;
}

.skill-card {
  background: #fff;
  border: 2px solid #ffe0eb;
  border-radius: 16px;
  padding: 16px 18px;
  box-shadow: 0 4px 12px rgba(233,51,117,.1);
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease;
}
.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(233,51,117,.2);
}
.skill-card.selected {
  border-color: var(--primary);
  box-shadow: 0 0 16px rgba(233,51,117,.25);
}
.skill-card h4 {
  margin: 4px 0 6px;
  color: var(--primary-dark);
}
.skill-card p {
  color: #555;
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 1.5;
}
.bar {
  height: 8px;
  background: #ffe1ed;
  border-radius: 999px;
  overflow: hidden;
}
.bar span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #ffa1c6, var(--primary));
  transition: width .6s ease;
}


.code-box {
  background: #0f1221;
  color: #e5e7eb;
  border-radius: 12px;
  padding: 14px 16px;
  font-family: monospace;
  box-shadow: inset 0 0 10px rgba(0,0,0,.4);
}
.code-box pre {
  overflow-x: auto;
  margin-top: 8px;
  white-space: pre-wrap;
  word-break: break-word;
}
.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.copy-btn {
  background: #111827;
  color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 13px;
  transition: background .25s;
}
.copy-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
}


body,
.nav,
.bio,
.explorer,
.table-card,
.card,
.contact-card,
.contact-item,
.tab,
.skill,
.btn,
.btn-ghost,
.s-title,
.table-card h2 {
  transition: background-color .35s ease, color .35s ease, box-shadow .35s ease, border-color .35s ease;
}


@media (prefers-reduced-motion: reduce) {
  body,
  .nav,
  .bio,
  .explorer,
  .table-card,
  .card,
  .contact-card,
  .contact-item,
  .tab,
  .skill,
  .btn,
  .btn-ghost,
  .s-title,
  .table-card h2 {
    transition: none !important;
  }
}


:root[data-theme="dark"] .table-card thead th,
:root[data-theme="dark"] .table-card tbody td {
  color: #111827 !important;         
}


:root[data-theme="dark"] .table-card h2 {
  color: var(--primary) !important;
}


:root[data-theme="dark"] .contact-item,
:root[data-theme="dark"] .contact-item strong {
  color: #111827 !important;         
}


:root[data-theme="dark"] #contacto .muted {
  color: #334155 !important;        
}


:root[data-theme="dark"] .on-light,
:root[data-theme="dark"] .bg-white,
:root[data-theme="dark"] .contact-item,
:root[data-theme="dark"] .table-card,
:root[data-theme="dark"] .table-card thead th,
:root[data-theme="dark"] .table-card tbody td,
:root[data-theme="dark"] .card.bg-white {
  color: #111827 !important;
}


:root[data-theme="dark"] .skill-card,
:root[data-theme="dark"] .skill-card h4,
:root[data-theme="dark"] .skill-card p {
  color: #111827 !important;              
  background: #ffffff !important;          
  border-color: #ffd6ea !important;
  box-shadow: 0 4px 12px rgba(233,51,117,.12) !important;
}


:root[data-theme="dark"] .bar {
  background: #ffe1ed !important;
}
:root[data-theme="dark"] .bar span {
  background: linear-gradient(90deg, #ffa1c6, var(--primary)) !important;
}


:root[data-theme="dark"] .fancy-tabs,
:root[data-theme="dark"] .fancy-tab,
:root[data-theme="dark"] .fancy-tab.active,
:root[data-theme="dark"] #about .s-title,
:root[data-theme="dark"] .code-box,
:root[data-theme="dark"] .copy-btn,
:root[data-theme="dark"] .code-header strong {
  color: inherit !important;
  background: inherit !important;
  border-color: inherit !important;
  box-shadow: inherit !important;
}


:root[data-theme="dark"] .fancy-tabs {
  background: radial-gradient(circle at 30% 20%, #2c0333 0%, #44064a 60%, #59184f 100%) !important;
  box-shadow: 0 8px 20px rgba(233,51,117,.22) !important;
}

:root[data-theme="dark"] .fancy-tab {
  transition: all 0.25s ease;
  position: relative;
  z-index: 1;
}


:root[data-theme="dark"] .fancy-tab:hover {
  color: #fff !important;
  background: radial-gradient(circle at 30% 20%, #e93375 0%, #bf1454 90%) !important;
  box-shadow:
    0 0 25px rgba(233,51,117,0.8),
    0 0 45px rgba(233,51,117,0.6),
    inset 0 0 10px rgba(255,192,203,0.3);
  transform: translateY(-3px) scale(1.07);
  text-shadow:
    0 0 8px rgba(255,200,230,0.9),
    0 0 18px rgba(233,51,117,0.9);
}


:root[data-theme="dark"] .fancy-tab.active {
  background: var(--primary) !important;
  color: #fff !important;
  box-shadow:
    0 0 18px rgba(233,51,117,0.5),
    inset 0 0 6px rgba(255,192,203,0.25);
  transform: scale(1.04);
}


:root[data-theme="dark"] .fancy-tab.active:hover {
  box-shadow:
    0 0 28px rgba(233,51,117,0.8),
    0 0 50px rgba(233,51,117,0.6);
  transform: translateY(-2px) scale(1.08);
}

`;


const useTypingEffect = (text, speed = 100) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return displayed;
};

const useRevealOnScroll = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("is-visible"),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
};


const SKILLS = {
  Frontend: [
    {
      key: "html",
      name: "HTML5",
      level: 92,
      desc: "Estructura semántica clara para sitios accesibles y bien organizados.",
      example: `<section class="hero">
  <h1>Bienvenida a mi portafolio</h1>
  <p>Diseños modernos y código limpio ✨</p>
</section>`
    },
    {
      key: "css",
      name: "CSS",
      level: 90,
      desc: "Diseños responsive, gradientes, transiciones y layout con flexbox o grid.",
      example: `.card {
  display: grid;
  gap: 1rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #ffe4f1, #e93375);
  color: #fff;
  transition: transform .3s;
}
.card:hover { transform: scale(1.05); }`
    },
    {
      key: "js",
      name: "JavaScript",
      level: 87,
      desc: "Interactividad dinámica, animaciones suaves y manejo del DOM.",
      example: `const boton = document.querySelector('.btn');
boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  alert('¡Hola, Zarella!');
});`
    },
    {
      key: "react",
      name: "React.js",
      level: 85,
      desc: "Componentes reutilizables, hooks y animaciones interactivas en UI.",
      example: `function Saludo({ nombre }) {
  return <h2>Hola {nombre} 👋</h2>;
}

// Uso:
<Saludo nombre="Zarella" />`
    },
    {
      key: "figma",
      name: "Figma",
      level: 80,
      desc: "Diseño de interfaces limpias y handoff eficiente para desarrollo.",
      example: `🎨 Creación de wireframes y prototipos UI con paleta fucsia moderna.`
    },
  ],

  Backend: [
    {
      key: "node",
      name: "Node.js",
      level: 82,
      desc: "Servidor rápido y modular para manejar APIs REST o aplicaciones en tiempo real.",
      example: `import express from 'express';
const app = express();
app.get('/api/saludo', (req, res) => res.json({ msg: 'Hola Zarella 💖' }));
app.listen(3000);`
    },
    {
      key: "php",
      name: "PHP 8",
      level: 75,
      desc: "Aplicaciones con backend estable y plantillas dinámicas.",
      example: `<?php
echo "<h3>Bienvenida, Zarella 💕</h3>";
?>`
    },
    {
      key: "laravel",
      name: "Laravel",
      level: 78,
      desc: "Framework moderno con rutas, controladores y migraciones eficientes.",
      example: `Route::get('/perfil', function () {
  return view('zarella.perfil');
});`
    },
    {
      key: "jwt",
      name: "JWT",
      level: 70,
      desc: "Autenticación segura mediante tokens y sesiones sin estado.",
      example: `const token = jwt.sign({ user: "zarella" }, SECRET, { expiresIn: "2h" });`
    },
    {
      key: "docker",
      name: "Docker",
      level: 68,
      desc: "Entornos de desarrollo reproducibles y aislados.",
      example: `FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`
    },
  ],

  Database: [
    {
      key: "mysql",
      name: "MySQL",
      level: 85,
      desc: "Diseño de bases relacionales, consultas JOIN y optimización de índices.",
      example: `SELECT nombre, curso
FROM estudiantes
JOIN cursos ON cursos.id = estudiantes.curso_id
WHERE promedio > 15;`
    },
    {
      key: "mongo",
      name: "MongoDB",
      level: 80,
      desc: "Base NoSQL flexible ideal para apps modernas y datos en JSON.",
      example: `db.estudiantes.insertOne({
  nombre: "Zarella",
  edad: 22,
  carrera: "Desarrollo Web"
});`
    },
    {
      key: "pg",
      name: "PostgreSQL",
      level: 78,
      desc: "Consultas avanzadas, JSONB y procedimientos almacenados.",
      example: `CREATE FUNCTION promedio_notas() RETURNS numeric AS $$
  SELECT AVG(nota) FROM calificaciones;
$$ LANGUAGE SQL;`
    },
  ],
};



const copy = async (text, setCopied) => {
  try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(()=>setCopied(false), 1200); }
  catch {}
};


const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme==="dark"?"dark":"light");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button className="tog" onClick={()=>setTheme(t=>t==="dark"?"light":"dark")} aria-label="Cambiar tema">
      {theme==="dark" ? "☀️" : "🌙"}
    </button>
  );
};

const Nav = () => (
  <nav className="nav" role="navigation" aria-label="principal">
    <div className="wrap">
      <div className="brand">Zarella Andrea</div>
      <div className="menu">
        <a href="#inicio">Inicio</a>
        <a href="#about">Acerca de mí</a>
        <a href="#plan">Plan</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contáctame</a>
      </div>
      <div style={{display:"flex", gap:10}}>
        <ThemeToggle />
        <a className="btn-ghost" href="/cv-zarella.pdf" target="_blank" rel="noreferrer">CV</a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const animatedText = useTypingEffect("Desarrolladora Front-End", 120);
  const reveal = useRevealOnScroll();
  const [src, setSrc] = useState("/yo.jpeg");
  const [loaded, setLoaded] = useState(false);
  const onError = () => setSrc("https://i.ibb.co/Y4rFXwBy/Whats-App-Image-2025-10-09-at-4-28-57-AM.jpg");

  return (
    <section id="inicio" className="hero" data-reveal ref={reveal}>
      <div>
        <span className="kicker">Hola, yo soy</span>
        <h1>
          <span className="alt">Zarella Andrea Aranda Gomez</span><br />
          {animatedText}
        </h1>
        <p>Portafolio académico con mis actividades semanales del curso de Desarrollo de Aplicaciones Web.</p>
        <div className="cta-row">
          <a className="btn-ghost" href="#proyectos">Ver proyectos</a>
          <a className="btn-ghost" href="#contacto">Contáctame</a>
        </div>
      </div>
      <div className="avatar-wrap">
        <img
          className={`avatar ${loaded ? "loaded" : ""}`}
          src={src}
          alt="Foto de Zarella"
          onError={onError}
          onLoad={()=>setLoaded(true)}
          loading="eager"
        />
      </div>
    </section>
  );
};


const SkillExplorer = () => {
  const reveal = useRevealOnScroll();
  const cats = Object.keys(SKILLS);

  const [cat, setCat] = useState(cats[0]);
  const [sel, setSel] = useState(SKILLS[cats[0]]?.[0]?.key ?? "");

  const list = SKILLS[cat] ?? [];
  const active = list.find((s) => s.key === sel) || list[0];
  const [copied, setCopied] = useState(false);

  const handleSwitchTab = (c) => {
    setCat(c);
    const first = SKILLS[c]?.[0]?.key ?? "";
    setSel(first);
  };

  return (
    <section id="about" className="section" data-reveal ref={reveal}>
      <h2 className="s-title">Acerca de mí</h2>

      <div className="about">
        <article className="bio">
          <p>
            Soy estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú (UNCP). Me apasiona el desarrollo web y la creación de interfaces funcionales, claras y atractivas. En este espacio puedes explorar mis principales áreas de conocimiento, donde destaco las tecnologías que más utilizo y disfruto aplicar en mis proyectos.
          </p>
        </article>

        <aside className="explorer fancy-tabs" aria-live="polite">
          <div className="tab-header" role="tablist">
            {cats.map((c) => (
              <button
                key={c}
                className={`fancy-tab ${cat === c ? "active" : ""}`}
                onClick={() => handleSwitchTab(c)}
              >
                {c === "Frontend" && "🎨"}
                {c === "Backend" && "⚙️"}
                {c === "Database" && "🗄️"}
                <span>{c}</span>
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {list.map((s) => (
              <div
                key={s.key}
                className={`skill-card ${sel === s.key ? "selected" : ""}`}
                onClick={() => setSel(s.key)}
              >
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
                <div className="bar">
                  <span style={{ width: `${s.level}%` }}></span>
                </div>
              </div>
            ))}
          </div>

          <div className="code-box">
            <div className="code-header">
              <strong>Ejemplo:</strong>
              <button
                className="copy-btn"
                onClick={() => copy(active.example, setCopied)}
              >
                {copied ? "✅ Copiado" : "Copiar"}
              </button>
            </div>
            <pre><code>{active.example}</code></pre>
          </div>
        </aside>
      </div>
    </section>
  );
};



const Plan = () => {
  const reveal = useRevealOnScroll();
  return (
    <section id="plan" className="section" data-reveal ref={reveal}>
      <div className="table-card">
        <h2>Plan de Actividades Semanales</h2>
        <table>
          <thead>
            <tr><th>Semana</th><th>Tema</th><th>Objetivo</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Introducción y VS Code</td><td>Entorno, atajos y flujo de trabajo.</td></tr>
            <tr><td>2</td><td>HTML y CSS</td><td>Estructura semántica y estilos responsive.</td></tr>
            <tr><td>3</td><td>Ejercicios HTML/CSS</td><td>Prácticas de maquetación y componentes.</td></tr>
            <tr><td>4</td><td>Tailwind + JavaScript</td><td>Estilos avanzados e interactividad con JS.</td></tr>
            <tr><td>5</td><td>Integración + Intro React</td><td>Unir tecnologías y primera app en React.</td></tr>
            <tr><td>6</td><td>React con Vite/Next</td><td>Entornos modernos y despliegue.</td></tr>
            <tr><td>7</td><td>React + Vite (TypeScript)</td><td>React y Vite usando TypeScript.</td></tr>
            <tr><td>9</td><td>Teoría Backend Java/JSP/Tomcat/Maven</td><td>Fundamentos de backend con Java, JSP, Tomcat y Maven..</td></tr>
            <tr><td>10</td><td>CRUD Estudiante (Spring Boot + MySQL + Postman)</td><td>CRUD de estudiantes con Spring Boot, MySQL y pruebas en Postman.</td></tr>
            <tr><td>11</td><td>CRUD Docente (Swagger + Postman + endpoints extra)</td><td>CRUD de docentes con Swagger, Postman y endpoints adicionales.</td></tr>
            <tr><td>12</td><td>Teoría Backend PHP (Apache + PHP + Composer)</td><td>Backend en PHP usando Apache y Composer.</td></tr>
            <tr><td>13</td><td>CRUD Laravel (MySQL + Blade/Tailwind)</td><td>CRUD en Laravel con MySQL, Blade y Tailwind.</td></tr>
            <tr><td>14</td><td>Python + Flask (CRUD) + app inteligente (LLM tipo Llama)</td><td>CRUD con Flask y aplicación inteligente usando LLM tipo LLaMA.</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};


const Proyectos = () => {
  const reveal = useRevealOnScroll();
  const semanas = [
    { titulo: "Semana 01 | VS Code", url: "https://github.com/zarella42/PORTAFOLIO-ACAD-MICO/tree/5fe8aa16e56b1609f84e7bed0e4055b90aee4dda/Semana1" },
    { titulo: "Semana 02 | HTML y CSS", url: "https://github.com/zarella42/PORTAFOLIO-ACAD-MICO/tree/5fe8aa16e56b1609f84e7bed0e4055b90aee4dda/Semana2" },
    { titulo: "Semana 03 | HTML/CSS Práctico", url: "https://github.com/zarella42/PORTAFOLIO-ACAD-MICO/tree/5fe8aa16e56b1609f84e7bed0e4055b90aee4dda/Semana3" },
    { titulo: "Semana 04 | Tailwind + JS", url: "https://github.com/zarella42/PORTAFOLIO-ACAD-MICO/tree/5fe8aa16e56b1609f84e7bed0e4055b90aee4dda/Semana4" },
    { titulo: "Semana 05 | Integración + React", url: "https://github.com/zarella42/PORTAFOLIO-ACAD-MICO/tree/5fe8aa16e56b1609f84e7bed0e4055b90aee4dda/Semana5" },
    { titulo: "Semana 06 | React con Vite", url: "https://github.com/zarella42/PORTAFOLIO-ACAD-MICO/tree/5fe8aa16e56b1609f84e7bed0e4055b90aee4dda/Semana6" },
    { titulo: "Semana 07 | React + Vite (TypeScript)", url: "https://github.com/zarella42/PORTAFOLIO-ACAD-MICO/tree/5fe8aa16e56b1609f84e7bed0e4055b90aee4dda/Semana7" },
    { titulo: "Semana 09 | Teoría Backend Java/JSP/Tomcat/Maven", url: "https://github.com/.../Semana8" },
    { titulo: "Semana 10 | CRUD Estudiante (Spring Boot + MySQL + Postman)", url: "https://github.com/.../Semana9" },
    { titulo: "Semana 11 | CRUD Docente (Swagger + Postman + endpoints extra)", url: "https://github.com/.../Semana10" },
    { titulo: "Semana 12 | Teoría Backend PHP (Apache + PHP + Composer)", url: "https://github.com/.../Semana11" },
    { titulo: "Semana 13 | CRUD Laravel (MySQL + Blade/Tailwind)", url: "https://github.com/.../Semana12" },
    { titulo: "Semana 14 | Python + Flask (CRUD) + app inteligente (LLM tipo Llama)", url: "https://github.com/.../Semana13" },

  ];

  return (
    <section id="proyectos" className="section" data-reveal ref={reveal}>
      <h2 className="s-title">Repositorio de Proyectos Académicos</h2>

      <div className="grid">
        {semanas.map((s, i) => (
          <article className="card" key={i}>
            <h3>{s.titulo}</h3>
            <p className="muted">Revisión de las actividades de la semana.</p>
            <a className="btn" href={s.url} target="_blank" rel="noreferrer">Dirígete al repositorio</a>
          </article>
        ))}
      </div>
    </section>
  );
};


const Contacto = () => {
  const reveal = useRevealOnScroll();
  return (
    <section id="contacto" className="contacto section" data-reveal ref={reveal}>
      <div className="contact-card" aria-live="polite">
        <div className="contact-content">
          <h3 className="contact-title">Contáctame</h3>
          <p className="muted" style={{marginTop: -6, marginBottom: 14}}>
            ¿Tienes una idea o proyecto? Hablemos.
          </p>
          <div className="contact-row">
            <div className="contact-item">
              <span className="icon-cloud">📞</span>
              <strong>915 269 432</strong>
            </div>
            <div className="contact-item">
              <span className="icon-cloud">📧</span>
              <strong>zareedm30@gmail.com</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <>
      <style>{css}</style>
      <Nav />
      <main>
        <Hero />
        <SkillExplorer />
        <Plan />
        <Proyectos />
        <Contacto />
        <footer>© {new Date().getFullYear()} Zarella Andrea Aranda Gomez — Portafolio académico</footer>
      </main>
    </>
  );
}
