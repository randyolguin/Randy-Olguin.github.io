const portfolio = {
  roles: [
    "mechanical engineer",
    "manufacturing problem solver",
    "CAD + FEA designer",
    "hands-on builder",
  ],
  contact: {
    // Replace these three values before publishing.
    email: "your.email@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
  },
};

document.getElementById("year").textContent = new Date().getFullYear();

const contactLinks = document.querySelectorAll("[data-contact]");
contactLinks.forEach((link) => {
  const type = link.dataset.contact;
  const value = portfolio.contact[type];
  link.href = type === "email" ? `mailto:${value}` : value;
  link.querySelector("b").textContent = type === "email" ? value : value.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  if (type !== "email") {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
});

const roleElement = document.getElementById("typed-role");
let roleIndex = 0;
let charIndex = portfolio.roles[0].length;
let deleting = true;

function typeRole() {
  const current = portfolio.roles[roleIndex];
  roleElement.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex === current.length) {
    deleting = true;
    window.setTimeout(typeRole, 1800);
    return;
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % portfolio.roles.length;
    window.setTimeout(typeRole, 300);
    return;
  }

  charIndex += deleting ? -1 : 1;
  window.setTimeout(typeRole, deleting ? 36 : 65);
}

window.setTimeout(typeRole, 1300);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("site-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !open);
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});
