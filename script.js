// =========================
// CUSTOM CURSOR
// =========================
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", (e) => {
    cursorDot.style.top = `${e.clientY}px`;
    cursorDot.style.left = `${e.clientX}px`;
    cursorOutline.style.top = `${e.clientY}px`;
    cursorOutline.style.left = `${e.clientX}px`;
});

document.querySelectorAll(".hover-trigger").forEach(el => {
    el.addEventListener("mouseenter", () => {
        document.body.classList.add("hovering");
    });
    el.addEventListener("mouseleave", () => {
        document.body.classList.remove("hovering");
    });
});


// =========================
// NAVBAR SMART HIDE / SHOW
// =========================
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        navbar.style.transform = "translateY(-100%)";
    } else {
        navbar.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY;
});


// =========================
// MOBILE MENU
// =========================
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


// =========================
// SCROLL PROGRESS BAR
// =========================
const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / height) * 100;
    scrollProgress.style.width = `${progress}%`;
});


// =========================
// FILTER PROJECTS
// =========================
function filterProjects(category, btn) {
    const items = document.querySelectorAll(".project-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    items.forEach(item => {
        const itemCat = item.getAttribute("data-category");

        if (category === "all" || category === itemCat) {
            item.classList.remove("project-hidden");
        } else {
            item.classList.add("project-hidden");
        }
    });
}


// =========================
// MODAL SYSTEM FOR PROJECTS
// =========================
const modalOverlay = document.createElement("div");
modalOverlay.className = "modal-overlay";
document.body.appendChild(modalOverlay);

const modalContent = document.createElement("div");
modalContent.className = "modal-content";
modalOverlay.appendChild(modalContent);

// SAMPLE PROJECT CONTENT (bisa diganti per proyek)
const projectDetails = [
    { title: "Rumah Mr. Yanto", img: "https://placehold.co/1200x800" },
    { title: "Interior Modern", img: "https://placehold.co/1200x800" },
    { title: "Rumah Mr. H Mustofa", img: "https://placehold.co/1200x800" },
    { title: "Area Makan", img: "https://placehold.co/1200x800" },
    { title: "Rumah Mr. Muchromin", img: "https://placehold.co/1200x800" },
    { title: "Kamar Tidur Utama", img: "https://placehold.co/1200x800" }
];

function openModal(index) {
    modalOverlay.style.display = "flex";
    modalContent.innerHTML = `
        <div class="flex-1">
            <img src="${projectDetails[index].img}" class="w-full h-full object-cover">
        </div>
        <div class="flex-1 p-8 overflow-y-auto">
            <h2 class="text-3xl font-bold mb-4">${projectDetails[index].title}</h2>
            <p class="text-neutral-gray leading-relaxed mb-6">
                Deskripsi proyek dapat dimasukkan di sini. Kamu bisa menulis detail teknis,
                konsep desain, ukuran ruang, material, dan proses kreatif.
            </p>
            <button onclick="closeModal()" class="px-6 py-3 bg-black text-white uppercase tracking-widest">
                Tutup
            </button>
        </div>
    `;
}

function closeModal() {
    modalOverlay.style.display = "none";
}

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
});


// =========================
// PARALLAX EFFECT HERO IMAGE
// =========================
const parallax = document.querySelector(".parallax-bg");
window.addEventListener("scroll", () => {
    let offset = window.scrollY * 0.3;
    parallax.style.transform = `translateY(${offset}px)`;
});


// =========================
// BACK-TO-TOP BUTTON
// =========================
const backToTop = document.createElement("button");
backToTop.id = "back-to-top";
backToTop.className = "fixed bottom-10 right-10 bg-black text-white px-4 py-3 rounded-full text-sm tracking-wider";
backToTop.innerText = "TOP";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// =========================
// AOS INIT
// =========================
AOS.init({
    once: true,
    duration: 900,
    easing: "ease-out-cubic"
});
