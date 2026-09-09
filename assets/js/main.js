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
    </section>`);
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
    window.gtag("event", link.dataset.track, { link_url: link.href, page_location: window.location.href });
  }
}));

document.querySelectorAll('a[href="booking.html"], a[href*="calendar.app.google"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.gtag === "function") window.gtag("event", "booking_click", { link_url: link.href });
  });
});

document.querySelectorAll("form:not([data-live-form])").forEach((form) => form.addEventListener("submit", (event) => event.preventDefault()));

const siteLoader = document.createElement("div");
siteLoader.setAttribute("role", "status");
siteLoader.setAttribute("aria-label", "Chargement du site");
siteLoader.innerHTML = '<div style="text-align:center"><strong style="font-size:1.15rem;letter-spacing:.04em">Nissrine<span style="color:#63e6ff">.</span></strong><div style="width:132px;height:2px;background:#29425f;margin:14px auto 0;overflow:hidden"><span style="display:block;width:48%;height:100%;background:#63e6ff"></span></div></div>';
Object.assign(siteLoader.style, { position: "fixed", inset: "0", zIndex: "9999", display: "grid", placeItems: "center", background: "#071425", color: "#fff", fontFamily: "inherit", transition: "opacity .2s ease" });
document.body.prepend(siteLoader);

const hideSiteLoader = () => {
  siteLoader.style.opacity = "0";
  window.setTimeout(() => siteLoader.remove(), 220);
};
window.addEventListener("load", () => window.setTimeout(hideSiteLoader, 160), { once: true });

for (const copyright of document.querySelectorAll(".footer .copyright")) {
  if (!copyright.querySelector("[data-legal-links]")) {
    copyright.insertAdjacentHTML("beforeend", '<span data-legal-links style="display:block;margin-top:10px"><a href="cgu.html">CGU</a> · <a href="privacy.html">Politique de confidentialité</a></span>');
  }
}
