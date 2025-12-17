// ================= NAVBAR =================
const navbarkanan = document.querySelector(".navbarkanan");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarkanan.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarkanan.contains(e.target)) {
    navbarkanan.classList.remove("active");
  }
});

// ================= SLIDER + MENU =================

// Element penting
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const categories = document.querySelectorAll(".menu-category li");

// Data Menu
const menuData = [
  { category: "Coffee", name: "Americano", desc: "Espresso dengan air panas, rasa bold", price: "Rp 15.000,00",img:"../img/americano-nobacground.jpeg" },
  { category: "Coffee", name: "Espresso", desc: "Kopi hitam pekat satu shot", price: "Rp 12.000,00",img:"../img/espresso-coffee-no-background.webp" },
  { category: "Coffee", name: "Cafe Latte", desc: "Espresso dengan susu creamy", price: "Rp 20.000,00",img:"../img/coffe-latte-homemade.png" },
  { category: "Coffee", name: "Cappuccino", desc: "Latte dengan foam lebih banyak", price: "Rp 20.000.00",img:"../img/cappucino.jpeg" },
  { category: "Coffee", name: "Coffee Butter", desc: "Coffee dengan campuran butter", price: "Rp 15.000,00",img:"../img/butter-coffee.jpg" },
  { category: "manual-filter", name: "V60", desc: "V60 menawarkan kontrol penuh di proses penyeduhan, jadi kamu bisa berexperimen", price: "Rp 25.000,00",img:"../img/V60.png" },
  { category: "manual-filter", name: "V60 Japanese", desc: "V60 dan Japanese iced coffee menghasilkan profil rasa yang berbeda meskipun menggunakan biji kopi yang sama: ", price: "Rp 25.000,00",img:"../img/v60-japanii.jpg" },
  { category: "manual-filter", name: "Tubruk", desc: "Kopi tubruk adalah kopi yang dibuat dengan cara menumbuk kasar biji kopi dan menyeduhnya langsung dalam air panas. Kesederhanaan dan keaslian rasa menjadi ciri khas kopi tubruk, membuatnya digemari oleh banyak orang", price: "Rp 12.000,00",img:"../img/tubruk.jpeg" },
  { category: "manual-filter", name: "vietnam drip", desc: "Keistimewaan dari Vietnam Drip adalah rasa kopi yang kuat dan pekat. Selain itu, kopi ini juga memiliki aroma yang khas dan unik. Meskipun rasa kopi Vietnam Drip cukup kuat, namun kopi ini tidak terlalu pahit atau asam.", price: "Rp 18.000,00",img:"../img/vietnam-drip.jpeg" },
];

// Variabel kontrol
let index = 0;
let filteredData = [...menuData]; // default: semua menu ada

// ================= UPDATE SLIDER =================
function updateSlider(position) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[position].classList.add("active");
  dots[position].classList.add("active");

  // Update info teks
  document.querySelector(".menu-info h2").textContent = filteredData[position].category;
  document.querySelector(".menu-info h1").textContent = filteredData[position].name;
  document.querySelector(".menu-info p").textContent = filteredData[position].desc;
  document.querySelector(".menu-info h3").textContent = filteredData[position].price;
}
function updateSlider(position) {
  
  // Update gambar
  document.getElementById("menu-image").src = filteredData[position].img;

  // Update teks
  document.querySelector(".menu-info h2").textContent = filteredData[position].category;
  document.querySelector(".menu-info h1").textContent = filteredData[position].name;
  document.querySelector(".menu-info p").textContent = filteredData[position].desc;
  document.querySelector(".menu-info h3").textContent = filteredData[position].price;
}


// ================= FILTER MENU =================
function filterMenu(category) {
  filteredData = menuData.filter(item => item.category === category);

  index = 0; // reset slider tiap kategori berubah
  updateSlider(index);

  // Update tampilan kategori aktif
  categories.forEach(li => li.classList.remove("active"));
  document.querySelector(`[data-category="${category}"]`).classList.add("active");
}

// Klik kategori menu
categories.forEach(li => {
  li.addEventListener("click", () => {
    const selectedCategory = li.getAttribute("data-category");
    filterMenu(selectedCategory);
  });
});

// ================= BUTTON NEXT & PREV =================
nextBtn.addEventListener("click", () => {
  index = (index + 1) % filteredData.length;
  updateSlider(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + filteredData.length) % filteredData.length;
  updateSlider(index);
});

// ================= KLIK DOT =================
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlider(index);
  });
});

