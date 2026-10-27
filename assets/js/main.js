const analytics = document.createElement("script");
analytics.src = "assets/js/analytics.js";
document.head.appendChild(analytics);

const designSystem = document.createElement("link");
designSystem.rel = "stylesheet";
designSystem.href = "assets/css/design-system.css";
document.head.appendChild(designSystem);

const loader = document.createElement("div");
loader.className = "site-loader";
loader.setAttribute("role", "status");
loader.setAttribute("aria-label", "Chargement du site");
loader.innerHTML = '<div class="loader-inner"><div class="loader-brand"><span>Nissrine Tech</span><span>Chargement</span></div><div class="loader-track"><span></span></div></div>';
document.body.prepend(loader);
const hideLoader = () => {
  loader.classList.add("is-hidden");
  window.setTimeout(() => loader.remove(), 300);
};
if (document.readyState === "complete") window.setTimeout(hideLoader, 350);
else window.addEventListener("load", () => window.setTimeout(hideLoader, 350), { once: true });

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navigationItems = [
  ["index.html", "Accueil"],
  ["about.html", "À propos"],
  ["services.html", "Services"],
  ["portfolio.html", "Portfolio"],
  ["expertise.html", "Expertise"],
  ["contact.html", "Contact"]
];
document.querySelectorAll(".nav").forEach((nav) => {
  const brand = nav.querySelector(".brand");
  if (brand) {
    brand.className = "brand brand-tech";
    brand.innerHTML = '<img src="assets/img/nissrine-tech-logo.png" alt="Nissrine Tech"><span>Nissrine Tech</span>';
  }
  const navigation = nav.querySelector(".nav-links");
  if (navigation) {
    navigation.innerHTML = navigationItems.map(([href, label]) => `<a ${href === currentPage ? 'aria-current="page"' : ""} href="${href}">${label}</a>`).join("") + '<a class="nav-cta" href="booking.html">Réserver un appel</a>';
  }
});

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

const caseEnhancements = {
  "case-orange-france.html": {
    nodes: [
      ["Clients & équipes", "Questions et intégrations"],
      ["APIs IoT/M2M", "REST · SOAP"],
      ["Assistant IA", "Python · Node.js · LLM · MCP"],
      ["Observabilité", "Elasticsearch · Kibana"]
    ],
    decisions: [
      ["Documentation comme produit", "Rendre les contrats d’API cohérents pour diminuer la friction d’intégration."],
      ["IA ciblée", "Automatiser les demandes répétitives tout en conservant l’expertise humaine pour les cas complexes."],
      ["Mesure avant évolution", "Utiliser les données d’usage Kibana pour prioriser les améliorations produit."],
      ["Migration accompagnée", "Réduire les risques en traitant compatibilité, communication et support ensemble."]
    ]
  },
  "case-orange-maroc.html": {
    nodes: [
      ["Parcours magasin", "Besoin utilisateur"],
      ["Application Angular", "Expérience web"],
      ["API Spring Boot", "Logique métier"],
      ["Flutter & MySQL", "Mobile · données · QR codes"]
    ],
    decisions: [
      ["Web et mobile cohérents", "Aligner les deux interfaces autour d’un même parcours métier."],
      ["QR code comme passerelle", "Simplifier le transfert de la liste d’achat vers l’expérience en magasin."],
      ["Figma avant développement", "Valider les parcours et réduire les incompréhensions fonctionnelles."],
      ["Séparation des responsabilités", "Garder l’interface, la logique métier et les données clairement structurées."]
    ]
  },
  "case-aurelia.html": {
    nodes: [
      ["Documents métier", "Sources hétérogènes"],
      ["Alfresco ECM", "Centralisation · GED"],
      ["APIs & workflows", "Spring Boot · Angular"],
      ["IA appliquée", "Recherche · qualification"]
    ],
    decisions: [
      ["Structurer avant d’automatiser", "Clarifier les métadonnées et les workflows avant d’ajouter l’intelligence."],
      ["APIs comme contrat", "Découpler les modules et faciliter la circulation contrôlée de l’information."],
      ["IA avec finalité métier", "Cibler la recherche et la qualification plutôt qu’une IA générique."],
      ["Traçabilité", "Préserver la compréhension des traitements dans un contexte documentaire."]
    ]
  }
};

const currentCase = window.location.pathname.split("/").pop();
const enhancement = caseEnhancements[currentCase];
const resultBlock = document.querySelector(".case-story .result-block");
if (enhancement && resultBlock) {
  const nodes = enhancement.nodes.map((node, index) => `${index ? '<div class="arch-arrow">→</div>' : ''}<div class="arch-node"><strong>${node[0]}</strong><small>${node[1]}</small></div>`).join("");
  const decisions = enhancement.decisions.map((item) => `<article class="tradeoff"><strong>${item[0]}</strong><p>${item[1]}</p></article>`).join("");
  resultBlock.insertAdjacentHTML("beforebegin", `
    <section class="architecture"><span>ARCH</span><h2>Architecture fonctionnelle</h2><div class="architecture-flow">${nodes}</div></section>
    <section class="tradeoffs"><span>DEC</span><h2>Décisions et compromis</h2><div class="tradeoff-grid">${decisions}</div></section>`);
}

document.querySelectorAll('a[href="booking.html"], a[href*="calendar.app.google"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.gtag === "function") window.gtag("event", "booking_click", { link_url: link.href });
  });
});

document.querySelectorAll("form:not([data-live-form])").forEach((form) => form.addEventListener("submit", (event) => {
  event.preventDefault();
}));

const previousEmail = "nissrinesghir2@gmail.com";
const contactEmail = "nissrinetech@gmail.com";
document.querySelectorAll(`a[href="mailto:${previousEmail}"]`).forEach((link) => {
  link.href = `mailto:${contactEmail}`;
  link.textContent = link.textContent.replace(previousEmail, contactEmail);
});
document.querySelectorAll(`form[action*="${previousEmail}"]`).forEach((form) => {
  form.action = form.action.replace(previousEmail, contactEmail);
});
document.querySelectorAll("p, small, .notice").forEach((element) => {
  if (element.childElementCount === 0 && element.textContent.includes(previousEmail)) {
    element.textContent = element.textContent.replace(previousEmail, contactEmail);
  }
});

document.querySelectorAll(".footer").forEach((footer) => {
  footer.innerHTML = `<div class="shell"><div class="footer-grid"><div><h3>Nissrine Tech</h3><p>Solutions digitales sur mesure.<br>Full-Stack, Data & IA · Lyon.</p></div><div><h3>Explorer</h3><a href="about.html">À propos</a><a href="services.html">Services</a><a href="portfolio.html">Portfolio</a></div><div><h3>Contact</h3><a href="mailto:nissrinetech@gmail.com">nissrinetech@gmail.com</a><a href="booking.html">Prendre rendez-vous</a></div></div><div class="copyright">© 2026 Nissrine Sghir. Tous droits réservés.<span class="footer-legal"><a href="cgu.html">CGU</a><a href="privacy.html">Politique de confidentialité</a></span></div></div>`;
});
