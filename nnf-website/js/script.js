// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}

// Footer year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Simple scroll animation
const cards = document.querySelectorAll(
  ".intro-card, .program-card, .image-box, .hero-text"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => {
  card.classList.add("hidden");
  observer.observe(card);
});
// Gallery filter
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryImages = document.querySelectorAll(".full-gallery-grid img");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    galleryImages.forEach((image) => {
      const category = image.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        image.classList.remove("hide");
      } else {
        image.classList.add("hide");
      }
    });
  });
});// Contact page mail sender
function sendContactMessage(event) {
  event.preventDefault();

  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const subject = document.getElementById("contactSubject").value;
  const message = document.getElementById("contactMessage").value;

  const mailSubject = encodeURIComponent(subject);
  const mailBody = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:CSI@NNF.ORG?subject=${mailSubject}&body=${mailBody}`;
}const galleryImgs = document.querySelectorAll(".full-gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");
const downloadBtn = document.getElementById("downloadBtn");

if (galleryImgs && lightbox && lightboxImg && closeLightbox && downloadBtn) {
  galleryImgs.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
      downloadBtn.href = img.src;
      downloadBtn.download = img.src.split("/").pop();
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
}