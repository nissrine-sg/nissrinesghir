const creative = document.createElement("link");
creative.rel = "stylesheet";
creative.href = "assets/css/creative.css";
document.head.appendChild(creative);

const portrait = document.querySelector(".portrait");
if (portrait) {
  portrait.insertAdjacentHTML("afterbegin", '<div class="orbit orbit-one"><span>API</span><span>DATA</span></div><div class="orbit orbit-two"><span>AI</span><span>UX</span></div>');
  portrait.insertAdjacentHTML("beforeend", '<div class="available"><i></i> Disponible pour de nouveaux projets</div>');
}

const hero = document.querySelector(".hero");
if (hero) {
  const skills = "JAVA &middot; SPRING BOOT &middot; ANGULAR &middot; PYTHON &middot; DATA &middot; LLM &middot; ELASTICSEARCH &middot; KIBANA &middot; ALFRESCO &middot; UX/UI &middot; ";
  hero.insertAdjacentHTML("afterend", `<div class="marquee" aria-label="Expertises"><div>${skills}&nbsp;${skills}</div></div>`);
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

document.querySelectorAll("form:not([data-live-form])").forEach((form) => form.addEventListener("submit", (event) => {
  event.preventDefault();
}));
