const analytics = document.createElement("script");
analytics.src = "assets/js/analytics.js";
document.head.appendChild(analytics);

const creative = document.createElement("link");
creative.rel = "stylesheet";
creative.href = "assets/css/creative.css";
document.head.appendChild(creative);

const seniorStyles = document.createElement("link");
seniorStyles.rel = "stylesheet";
seniorStyles.href = "assets/css/senior.css";
document.head.appendChild(seniorStyles);

const portrait = document.querySelector(".portrait");
if (portrait) {
  portrait.insertAdjacentHTML("afterbegin", '<div class="orbit orbit-one"><span>API</span><span>DATA</span></div><div class="orbit orbit-two"><span>AI</span><span>UX</span></div>');
  portrait.insertAdjacentHTML("beforeend", '<div class="available"><i></i> Disponible pour de nouveaux projets</div>');
}

const hero = document.querySelector(".hero");
if (hero) {
  const skills = "JAVA &middot; SPRING BOOT &middot; ANGULAR &middot; PYTHON &middot; DATA &middot; LLM &middot; ELASTICSEARCH &middot; KIBANA &middot; ALFRESCO &middot; UX/UI &middot; ";
  hero.insertAdjacentHTML("afterend", `<div class="marquee" aria-label="Expertises"><div>${skills}&nbsp;${skills}</div></div>`);

  const trust = document.querySelector(".trust");
  trust?.insertAdjacentHTML("afterend", `
    <section class="senior-strip">
      <div class="shell">
        <div class="section-head reveal">
          <div><div class="eyebrow">Méthode d’ingénierie</div><h2>Du besoin métier<br>à un produit exploitable.</h2></div>
          <p>Une démarche structurée qui relie architecture, qualité, sécurité, mesure et amélioration continue.</p>
        </div>
        <div class="method-grid reveal">
          <article class="method-step"><span>01</span><h3>Comprendre</h3><p>Cadrage, usages, contraintes et critères de réussite.</p></article>
          <article class="method-step"><span>02</span><h3>Concevoir</h3><p>Architecture, données, APIs et parcours utilisateur.</p></article>
          <article class="method-step"><span>03</span><h3>Construire</h3><p>Développement maintenable, documentation et tests.</p></article>
          <article class="method-step"><span>04</span><h3>Sécuriser</h3><p>Qualité, OWASP, observabilité et maîtrise des risques.</p></article>
          <article class="method-step"><span>05</span><h3>Améliorer</h3><p>Mesure de l’usage, retours et évolutions produit.</p></article>
        </div>
      </div>
    </section>
    <div class="shell proof-bar reveal">
      <strong>Voir les preuves, pas seulement les technologies.</strong>
      <div class="proof-links">
        <a class="text-link" href="portfolio.html">Études de cas ↗</a>
        <a class="text-link" href="assets/Nissrine-Sghir-CV.pdf" download data-track="cv_download">Télécharger le CV ↓</a>
        <a class="text-link" href="https://github.com/nissrine-sg" target="_blank" rel="noopener noreferrer" data-track="github_click">GitHub ↗</a>
      </div>
    </div>`);
}

const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");
menu?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => links.classList.remove("open")));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add("on");
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll("[data-track]").forEach((link) => link.addEventListener("click", () => {
  if (typeof window.gtag === "function") {
    window.gtag("event", link.dataset.track, {
      link_url: link.href,
      page_location: window.location.href
    });
  }
}));

document.querySelectorAll('a[href="booking.html"], a[href*="calendar.app.google"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.gtag === "function") window.gtag("event", "booking_click", { link_url: link.href });
  });
});

document.querySelectorAll("form:not([data-live-form])").forEach((form) => form.addEventListener("submit", (event) => {
  event.preventDefault();
}));
