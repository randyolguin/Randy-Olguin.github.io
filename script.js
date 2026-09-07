const portfolio = {
  roles: [
    "quality engineer",
    "mechanical engineer",
    "spaceflight hardware inspector",
    "manufacturing problem solver",
  ],
  contact: {
    email: "RandyOlguin1@gmail.com",
    linkedin: "https://www.linkedin.com/in/randy-olguin/",
  },
};

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function fallbackArt(project, index) {
  const number = String(index + 1).padStart(2, "0");
  if (project.visual === "thermal") {
    return `<div class="project-art thermal-art" aria-hidden="true"><div class="art-number">${number}</div><div class="thermal-core">GPU</div><span class="heat h1"></span><span class="heat h2"></span><span class="heat h3"></span><span class="airflow a1">→</span><span class="airflow a2">→</span></div>`;
  }
  if (project.visual === "systems") {
    return `<div class="project-art systems-art" aria-hidden="true"><div class="art-number">${number}</div><div class="node n1">INPUT</div><div class="node n2">MODEL</div><div class="node n3">OUTPUT</div><span class="line l1"></span><span class="line l2"></span></div>`;
  }
  return `<div class="project-art clamp-art" aria-hidden="true"><div class="art-number">${number}</div><svg viewBox="0 0 500 300"><path d="M125 235c25-105 95-159 203-151l57 54-30 99-179 16z"/><circle cx="287" cy="170" r="57"/><circle cx="287" cy="170" r="32"/><path d="m125 235-47-33m307-64 45-23M173 84l-20-38"/></svg></div>`;
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid || !Array.isArray(window.portfolioProjects)) return;

  grid.innerHTML = window.portfolioProjects.map((project, index) => {
    const image = project.image
      ? `<div class="project-art project-photo"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt || project.title)}" loading="lazy" /></div>`
      : fallbackArt(project, index);
    const points = (project.details || []).map((point) => `<li>${escapeHtml(point)}</li>`).join("");
    const result = project.result ? `<p class="project-result"><strong>Result:</strong> ${escapeHtml(project.result)}</p>` : "";
    const credit = project.image && project.imageCredit
      ? `<small class="image-credit">Image: ${project.imageCreditUrl ? `<a href="${escapeHtml(project.imageCreditUrl)}" target="_blank" rel="noreferrer">${escapeHtml(project.imageCredit)}</a>` : escapeHtml(project.imageCredit)}</small>`
      : "";
    const externalLink = project.link
      ? `<a class="project-link" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">View project <span>↗</span></a>`
      : "";

    return `<article class="project-card ${project.featured ? "project-featured" : ""} reveal">${image}<div class="project-copy"><p class="tag">${escapeHtml(project.tags.join(" · "))}</p><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.summary)}</p><details class="project-details"><summary>Project details</summary><ul>${points}</ul>${result}</details>${externalLink}${credit}</div></article>`;
  }).join("");
}

renderProjects();
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-contact]").forEach((link) => {
  const type = link.dataset.contact;
  const value = portfolio.contact[type];
  link.href = type === "email" ? `mailto:${value}` : value;
  link.querySelector("b").textContent = type === "email" ? value : value.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  if (type !== "email") { link.target = "_blank"; link.rel = "noreferrer"; }
});

const roleElement = document.getElementById("typed-role");
let roleIndex = 0;
let charIndex = portfolio.roles[0].length;
let deleting = true;
function typeRole() {
  const current = portfolio.roles[roleIndex];
  roleElement.textContent = current.slice(0, charIndex);
  if (!deleting && charIndex === current.length) { deleting = true; window.setTimeout(typeRole, 1800); return; }
  if (deleting && charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % portfolio.roles.length; window.setTimeout(typeRole, 300); return; }
  charIndex += deleting ? -1 : 1;
  window.setTimeout(typeRole, deleting ? 36 : 65);
}
window.setTimeout(typeRole, 1300);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("site-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !open);
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}));
