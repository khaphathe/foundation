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
if (year) year.textContent = new Date().getFullYear();

// Contact form
function sendContactMessage(event) {
  event.preventDefault();

  const name = document.getElementById("contactName")?.value || "";
  const email = document.getElementById("contactEmail")?.value || "";
  const subject = document.getElementById("contactSubject")?.value || "Website Enquiry";
  const message = document.getElementById("contactMessage")?.value || "";

  const mailSubject = encodeURIComponent(subject);
  const mailBody = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:admin@nnfoundation.co.za?subject=${mailSubject}&body=${mailBody}`;
}

// Gallery albums
const galleryAlbums = {
  awards: {
    title: "Awards",
    label: "Academic Excellence",
    folder: "images/gallery/awards/",
    images: [
      "WhatsApp Image 2025-08-11 at 19.17.19 (1) 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.17.19 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.17.21 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.17.31.jpeg",
      "WhatsApp Image 2025-08-11 at 19.17.33 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.50.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.51 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.52 (1) 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.52.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.53 (2) 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.53.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.54.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.55 (1) 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.55.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.56.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.57 (1) 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.57.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.58 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.59 (1).jpeg",
      "WhatsApp Image 2025-08-11 at 19.18.59 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.19.00.jpeg",
      "WhatsApp Image 2025-08-11 at 19.19.01.jpeg",
      "WhatsApp Image 2025-08-11 at 19.19.02 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.19.03.jpeg",
      "WhatsApp Image 2025-08-11 at 19.19.05 2.jpeg",
      "WhatsApp Image 2025-08-11 at 19.19.06.jpeg",
      "WhatsApp Image 2025-08-11 at 19.19.09 2.jpeg"
    ]
  },

  anti: {
    title: "Anti-Bullying Campaign",
    label: "Safe School Campaign",
    folder: "images/gallery/anti-bullying/",
    images: [
      "WhatsApp Image 2025-08-11 at 19.16.26.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.27.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.29 (1).jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.29.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.30.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.31.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.32.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.33.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.34 (1).jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.34.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.35.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.36.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.37.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.38.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.39.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.41 (1).jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.41.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.42.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.45 (1).jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.45.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.46 (1).jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.46.jpeg",
      "WhatsApp Image 2025-08-11 at 19.16.47.jpeg",
      "WhatsApp Image 2025-08-11 at 19.17.10.jpeg",
      "WhatsApp Image 2025-08-11 at 19.17.11.jpeg"
    ]
  },

  pageants: {
    title: "School Pageants",
    label: "Confidence & Public Speaking",
    folder: "images/gallery/pageants/",
    images: [
      "WhatsApp Image 2021-10-10 at 09.24.41.jpeg",
      "WhatsApp Image 2021-10-10 at 09.24.50 (1).jpeg",
      "WhatsApp Image 2021-10-10 at 09.24.50 (2).jpeg",
      "WhatsApp Image 2021-10-10 at 09.24.50.jpeg",
      "WhatsApp Image 2021-10-10 at 09.24.55 (1).jpeg",
      "WhatsApp Image 2021-10-10 at 09.24.55 (6).jpeg",
      "WhatsApp Image 2021-10-10 at 09.24.55 (7).jpeg",
      "WhatsApp Image 2021-10-10 at 09.24.55 (8).jpeg",
      "WhatsApp Image 2021-10-10 at 09.24.55.jpeg",
      "WhatsApp Image 2021-11-11 at 17.55.35.jpeg",
      "WhatsApp Image 2021-11-11 at 17.55.37.jpeg",
      "WhatsApp Image 2021-11-11 at 17.56.22.jpeg",
      "WhatsApp Image 2021-11-11 at 18.10.49.jpeg",
      "WhatsApp Image 2021-11-11 at 18.10.51.jpeg",
      "WhatsApp Image 2021-11-11 at 18.12.02.jpeg",
      "WhatsApp Image 2021-11-11 at 18.12.06.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.27 (1).jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.31.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.34.jpeg",
      "WhatsApp Image 2021-11-11 at 19.21.34.jpeg"
    ]
  },

  career: {
    title: "Career Day",
    label: "Career Guidance",
    folder: "images/gallery/career-day/",
    images: [
      "WhatsApp Image 2021-11-13 at 00.22.57 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.22.58.jpeg",
      "WhatsApp Image 2021-11-13 at 00.22.59 (2).jpeg",
      "WhatsApp Image 2021-11-13 at 00.22.59.jpeg",
      "WhatsApp Image 2021-11-13 at 00.23.00 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.23.00.jpeg",
      "WhatsApp Image 2021-11-13 at 00.23.01 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.23.01.jpeg",
      "WhatsApp Image 2021-11-13 at 00.23.02 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.23.02.jpeg",
      "WhatsApp Image 2021-11-13 at 00.23.03.jpeg",
      "WhatsApp Image 2021-11-13 at 00.24.13.jpeg",
      "WhatsApp Image 2021-11-13 at 00.24.16.jpeg",
      "WhatsApp Image 2021-11-13 at 00.24.18 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.24.18 (2).jpeg",
      "WhatsApp Image 2021-11-13 at 00.24.18.jpeg",
      "WhatsApp Image 2021-11-13 at 00.24.19.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.40 (1).jpeg"
    ]
  },

  magazine: {
    title: "Magazine Features",
    label: "Media & Magazine Features",
    folder: "images/gallery/magazine/",
    images: [
      "WhatsApp Image 2021-11-11 at 19.19.00.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.01.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.25.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.26.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.27 (1).jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.27.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.28.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.31.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.34.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.35 (1).jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.35.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.39.jpeg",
      "WhatsApp Image 2021-11-11 at 19.19.44.jpeg",
      "WhatsApp Image 2021-11-11 at 19.21.34.jpeg",
      "WhatsApp Image 2021-11-11 at 19.21.35.jpeg",
      "WhatsApp Image 2021-11-11 at 19.32.51.jpeg",
      "WhatsApp Image 2021-11-12 at 10.30.57.jpeg",
      "WhatsApp Image 2021-11-13 at 00.24.30.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.25.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.28.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.29.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.30 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.30.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.31 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.31.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.32 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.32.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.33 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.33.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.34 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.34.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.35 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.35.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.36.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.37 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.37 (2).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.37.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.38 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.38.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.39.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.40 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.40 (2).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.40.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.41 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.41.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.42 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.42.jpeg",
      "WhatsApp Image 2021-11-13 at 00.27.43.jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.46.jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.51.jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.52 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.52.jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.53 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.53.jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.54 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.54.jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.55 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.55.jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.56 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.56.jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.57 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.57.jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.58 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.58.jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.59 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.29.59.jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.00 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.00.jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.01 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.01.jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.02 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.02.jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.03 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.03.jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.04 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.04.jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.05 (1).jpeg",
      "WhatsApp Image 2021-11-13 at 00.30.05.jpeg"
    ]
  }
};

let currentAlbum = [];
let currentIndex = 0;

function openAlbum(albumKey) {
  const album = galleryAlbums[albumKey];
  const folders = document.getElementById("galleryFolders");
  const albumView = document.getElementById("albumView");
  const albumGrid = document.getElementById("albumGrid");
  const albumTitle = document.getElementById("albumTitle");
  const albumLabel = document.getElementById("albumLabel");

  if (!album || !folders || !albumView || !albumGrid) return;

  currentAlbum = album.images.map((img) => album.folder + img);

  folders.style.display = "none";
  albumView.style.display = "block";
  albumTitle.textContent = album.title;
  albumLabel.textContent = album.label;
  albumGrid.innerHTML = "";

  currentAlbum.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = album.title;
    img.loading = "lazy";
    img.onclick = () => openLightbox(index);
    albumGrid.appendChild(img);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToFolders() {
  document.getElementById("galleryFolders").style.display = "block";
  document.getElementById("albumView").style.display = "none";
}

function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById("galleryLightbox");
  const image = document.getElementById("lightboxImage");
  const download = document.getElementById("lightboxDownload");

  if (!lightbox || !image || !download) return;

  lightbox.classList.add("active");
  image.src = currentAlbum[currentIndex];
  download.href = currentAlbum[currentIndex];
  download.download = currentAlbum[currentIndex].split("/").pop();
}

function closeLightbox() {
  document.getElementById("galleryLightbox").classList.remove("active");
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentAlbum.length;
  openLightbox(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
  openLightbox(currentIndex);
}

document.querySelectorAll(".gallery-folder-card").forEach((card) => {
  card.addEventListener("click", () => {
    openAlbum(card.getAttribute("data-album"));
  });
});

document.getElementById("backGalleryBtn")?.addEventListener("click", backToFolders);
document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
document.getElementById("nextBtn")?.addEventListener("click", nextImage);
document.getElementById("prevBtn")?.addEventListener("click", prevImage);