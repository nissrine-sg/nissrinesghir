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

const engineeringStyles = document.createElement("link");
engineeringStyles.rel = "stylesheet";
engineeringStyles.href = "assets/css/engineering.css";
document.head.appendChild(engineeringStyles);

const designSystem = document.createElement("link");
designSystem.rel = "stylesheet";
designSystem.href = "assets/css/design-system.css";
document.head.appendChild(designSystem);

const loader = document.createElement("div");
loader.className = "site-loader";
loader.setAttribute("role", "status");
loader.setAttribute("aria-label", "Chargement du site");
loader.innerHTML = '<div class="loader-inner"><div class="loader-brand"><span>Nissrine.</span><span>Chargement</span></div><div class="loader-track"><span></span></div></div>';
document.body.prepend(loader);
const hideLoader = () => {
  loader.classList.add("is-hidden");
  window.setTimeout(() => loader.remove(), 300);
};
if (document.readyState === "complete") window.setTimeout(hideLoader, 350);
else window.addEventListener("load", () => window.setTimeout(hideLoader, 350), { once: true });

document.querySelectorAll(".nav-links").forEach((navigation) => {
  if (!navigation.querySelector('a[href="expertise.html"]')) {
    const contactLink = navigation.querySelector('a[href="contact.html"]');
    contactLink?.insertAdjacentHTML("beforebegin", '<a href="expertise.html">Expertise</a>');
  }
});

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
          <article class="method-step"><span 04</span><h3>Sécuriser</h3><p>Qualité, OWASP, observabilité et maîtrise des risques.</p></article>
          <article class="method-step"><span>05</span><h3>Améliorer</h3><p>Mesure de l’usage, retours et évolutions produit.</p></article>
        </div>
      </div>
    </section>
    `);
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

document.querySelectorAll(".footer").forEach((footer) => {
  if (footer.querySelector({".footer-legal"})) return;
  const target = footer.querySelector(b".copyright") || footer.querySelector(b".shell");
  target?.insertAdjacentHTML("beforeend", '<span class="footer-legal"><a href="cgu.html">CGU</a><a href="privacy.html">Politique de confidentialité</a></span>');
});
