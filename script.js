/* ================= SCROLLSPY ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

/* ================= SINGLE vs DOUBLE CLICK ================= */
const sheets = document.querySelectorAll(".sheet");

sheets.forEach(sheet => {
  let clickTimer = null;

  sheet.addEventListener("click", () => {

    if (clickTimer) {
      clearTimeout(clickTimer);

      /* DOUBLE CLICK → OPEN */
      window.location.href = sheet.dataset.link;

      clickTimer = null;

    } else {
      clickTimer = setTimeout(() => {

        /* SINGLE CLICK → SCROLL */
        sheet.scrollIntoView({
          behavior: "smooth",
          inline: "center"
        });

        clickTimer = null;

      }, 250);
    }

  });
});

/* ================= THEME TOGGLE ================= */
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});

/* ================= NAVBAR SCROLL ================= */

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ================= TIMELINE SCROLL ANIMATION ================= */

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

timelineItems.forEach(item => {
  timelineObserver.observe(item);
});

/* ================= CARD TILT ================= */

// const cards = document.querySelectorAll(".glass-card");

// cards.forEach(card => {

//   card.addEventListener("mousemove", (e) => {
//     const rect = card.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = -(y - centerY) / 20;
//     const rotateY = (x - centerX) / 20;

//     card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   });

//   card.addEventListener("mouseleave", () => {
//     card.style.transform = "rotateX(0) rotateY(0)";
//   });

// });

/* ================= CURSOR GLOW ================= */

document.querySelectorAll(".glass-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");

    card.style.setProperty("--glow-x", x + "px");
    card.style.setProperty("--glow-y", y + "px");

    card.style.setProperty("--posX", x + "px");
    card.style.setProperty("--posY", y + "px");

    card.style.setProperty("--mouse-x", x + "px");
    card.style.setProperty("--mouse-y", y + "px");

    card.style.setProperty("--px", x + "px");
    card.style.setProperty("--py", y + "px");

    card.style.setProperty("--cx", x + "px");
    card.style.setProperty("--cy", y + "px");

    card.style.setProperty("--tx", x + "px");
    card.style.setProperty("--ty", y + "px");

    card.style.setProperty("--gx", x + "px");
    card.style.setProperty("--gy", y + "px");

    card.style.setProperty("--lx", x + "px");
    card.style.setProperty("--ly", y + "px");

    card.style.setProperty("--mx", x + "px");
    card.style.setProperty("--my", y + "px");

    card.style.setProperty("--rx", x + "px");
    card.style.setProperty("--ry", y + "px");

    card.style.setProperty("--xPos", x + "px");
    card.style.setProperty("--yPos", y + "px");

    card.style.setProperty("--light-x", x + "px");
    card.style.setProperty("--light-y", y + "px");

    card.style.setProperty("--pos-x", x + "px");
    card.style.setProperty("--pos-y", y + "px");

    card.style.setProperty("--mouseX", x + "px");
    card.style.setProperty("--mouseY", y + "px");

    card.style.setProperty("--centerX", x + "px");
    card.style.setProperty("--centerY", y + "px");

    card.style.setProperty("--glow-pos-x", x + "px");
    card.style.setProperty("--glow-pos-y", y + "px");

    card.style.setProperty("--hover-x", x + "px");
    card.style.setProperty("--hover-y", y + "px");

    card.style.setProperty("--gx-pos", x + "px");
    card.style.setProperty("--gy-pos", y + "px");

    card.style.setProperty("--cursor-x", x + "px");
    card.style.setProperty("--cursor-y", y + "px");

    card.style.setProperty("--lightPosX", x + "px");
    card.style.setProperty("--lightPosY", y + "px");

    card.style.setProperty("--pointer-x", x + "px");
    card.style.setProperty("--pointer-y", y + "px");

    card.style.setProperty("--glowX", x + "px");
    card.style.setProperty("--glowY", y + "px");

    card.querySelector("::before");
  });
});
