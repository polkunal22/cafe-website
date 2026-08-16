const PHONE = "916230711180";
const item = (name, category, price, priceLabel = `₹${price}`, signature = false) => ({ name, category, price, priceLabel, signature });
const dishes = [
  item("Veg Grilled Sandwich", "Sandwich", 69, "₹69", true), item("Veg Grilled Koslo Sandwich", "Sandwich", 79), item("Veg Club Sandwich", "Sandwich", 99), item("Cheese Corn Sandwich", "Sandwich", 109), item("Paneer Sandwich", "Sandwich", 119),
  item("Red Sauce Pasta", "Pasta", 140), item("White Sauce Pasta", "Pasta", 160, "₹160", true), item("Mix Sauce Pasta", "Pasta", 170),
  item("Green Salad", "Salad & Raita", 60), item("Onion Salad", "Salad & Raita", 40), item("Plain Raita", "Salad & Raita", 30), item("Mix Raita", "Salad & Raita", 60), item("Pineapple Raita", "Salad & Raita", 90),
  item("Black Tea", "Beverage", 19), item("Milk Tea", "Beverage", 29), item("Masala Tea", "Beverage", 39), item("Black Coffee", "Beverage", 39), item("Espresso Coffee", "Beverage", 49), item("Lassi Sweet/Salty", "Beverage", 59), item("Fresh Lime Water Sweet/Salt", "Beverage", 25), item("Fresh Lime Soda Sweet/Salt", "Beverage", 35), item("Cold Drink", "Beverage", null, "MRP"), item("Packaged Drinking Water", "Beverage", null, "MRP"),
  item("Milk Shake", "Shake", 69), item("Vanilla Shake", "Shake", 79), item("Banana Shake", "Shake", 79), item("Mango Shake", "Shake", 79), item("Chocolate Shake", "Shake", 89), item("Strawberry Shake", "Shake", 110), item("Oreo Shake", "Shake", 110), item("Kit Kat Shake", "Shake", 110), item("Add-on Ice Cream", "Shake", 25),
  item("Onion Pakora", "Starter", 69), item("Mix Veg Pakora", "Starter", 79), item("Paneer Pakora", "Starter", 115), item("French Fry", "Starter", 69), item("Chole Bhature", "Starter", 89, "₹89", true), item("Pav Bhaji", "Starter", 89),
  item("Veg Roll", "Roll", 55), item("Paneer Roll", "Roll", 79), item("Veg Kathi Roll", "Roll", 79), item("Paneer Kathi Roll", "Roll", 89), item("Veg Spring Roll", "Roll", 89), item("Paneer Spring Roll", "Roll", 99), item("Egg Roll", "Roll", 65), item("Chicken Roll", "Roll", 90), item("Egg with Chicken Roll", "Roll", 110), item("Chicken Kathi Roll", "Roll", 110), item("Chicken Kathi Roll with Egg", "Roll", 139),
  item("Veg Momo Steam", "Momo", 60), item("Veg Momo Fry", "Momo", 40), item("Paneer Momo Steam", "Momo", null, "Ask price"), item("Paneer Momo Fry", "Momo", null, "Ask price"), item("Veg Kurkure Momo", "Momo", null, "Ask price"), item("Paneer Kurkure Momo", "Momo", null, "Ask price"), item("Chicken Momo Steam", "Momo", 60, "₹60", true), item("Chicken Momo Fry", "Momo", 40), item("Chicken Kurkure Momo", "Momo", null, "Ask price"), item("Chicken Kurkure Momo (Special)", "Momo", null, "Ask price"),
  item("Steam Rice", "Rice", 79), item("Jeera Rice", "Rice", 99), item("Veg Fried Rice", "Rice", 109), item("Chilli Garlic Fried Rice", "Rice", 119), item("Schezwan Fried Rice", "Rice", 119), item("Paneer Fried Rice", "Rice", 149), item("Paneer Schezwan Fried Rice", "Rice", 150), item("Paneer Chilli Garlic Fried Rice", "Rice", 159), item("Triple Fried Rice", "Rice", 169), item("Matar Pulao", "Rice", 99), item("Veg Biryani with Gravy", "Rice", 140), item("Paneer Biryani with Gravy", "Rice", 159), item("Egg Fried Rice", "Rice", 109), item("Chicken Fried Rice", "Rice", 149), item("Chicken Triple Rice", "Rice", 169), item("Egg Biryani", "Rice", 149), item("Chicken Biryani", "Rice", 169, "₹169", true),
  item("Paneer Do Pyaja", "Main Course Veg", 160, "Half ₹160 • Full ₹280"), item("Paneer Butter Masala", "Main Course Veg", 180, "Half ₹180 • Full ₹290", true), item("Kadhai Paneer", "Main Course Veg", 170, "Half ₹170 • Full ₹260"), item("Matar Paneer", "Main Course Veg", 140, "Half ₹140 • Full ₹240"), item("Shahi Paneer", "Main Course Veg", 150, "Half ₹150 • Full ₹260"), item("Handi Paneer", "Main Course Veg", 150, "Half ₹150 • Full ₹240"), item("Paneer Adraki", "Main Course Veg", 150, "Half ₹150 • Full ₹260"), item("Paneer Lababdar", "Main Course Veg", 160, "Half ₹160 • Full ₹290"), item("Paneer Bhuna Masala", "Main Course Veg", 160, "Half ₹160 • Full ₹290"), item("Paneer Makmali", "Main Course Veg", 160, "Half ₹160 • Full ₹290"), item("Paneer Khurchan Masala", "Main Course Veg", 160, "Half ₹160 • Full ₹290"), item("Palak Paneer", "Main Course Veg", 160, "Half ₹160 • Full ₹280"), item("Paneer Kolhapuri", "Main Course Veg", 150, "Half ₹150 • Full ₹260"), item("Veg Kolhapuri", "Main Course Veg", 140, "Half ₹140 • Full ₹220"), item("Corn Palak", "Main Course Veg", 160, "Half ₹160 • Full ₹280"), item("Mix Veg", "Main Course Veg", 140, "Half ₹140 • Full ₹240"), item("Aloo Matar Tamatar", "Main Course Veg", 105, "Half ₹105 • Full ₹180"), item("Aloo Gobhi Matar", "Main Course Veg", 105, "Half ₹105 • Full ₹180"), item("Aloo Dum Banarsi", "Main Course Veg", 140, "Half ₹140 • Full ₹240"), item("Mushroom Do Pyaja", "Main Course Veg", 160, "Half ₹160 • Full ₹280"), item("Mushroom Masala", "Main Course Veg", 160, "Half ₹160 • Full ₹280"), item("Mushroom Matar", "Main Course Veg", 150, "Half ₹150 • Full ₹260"), item("Mushroom Keema Masala", "Main Course Veg", 160, "Half ₹160 • Full ₹280"),
  item("Veg Thali", "Thali", 160, "₹160", true), item("Special Veg Thali", "Thali", 220), item("Chicken Thali", "Thali", 310), item("Fry Papad", "Papad", 20), item("Roasted Papad", "Papad", 20), item("Masala Papad", "Papad", 50)
];

const signatureImages = {
  "Veg Grilled Sandwich": "image/signature/veg-grilled-sandwich.png",
  "White Sauce Pasta": "image/signature/white-sauce-pasta.png",
  "Chole Bhature": "image/signature/chole-bhature.png",
  "Chicken Momo Steam": "image/signature/chicken-steamed-momo.png",
  "Chicken Biryani": "image/signature/chicken-biryani.png",
  "Paneer Butter Masala": "image/signature/paneer-butter-masala.png",
  "Veg Thali": "image/signature/veg-thali.png"
};

const $ = selector => document.querySelector(selector);
let activeCategory = "All";
let fullMenu = false;

function renderFilters() {
  const filters = $("#filters");
  filters.innerHTML = "";
  ["All", ...new Set(dishes.map(dish => dish.category))].forEach(category => {
    const button = document.createElement("button");
    button.className = `filter ${category === activeCategory ? "active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderMenu();
    });
    filters.append(button);
  });
}

function setMenuMode(showFull) {
  fullMenu = showFull;
  activeCategory = "All";
  $("#menuTitle").innerHTML = showFull ? "Our <em>menu.</em>" : "Signature <em>dishes.</em>";
  $("#menuDescription").textContent = showFull ? `${dishes.length} freshly prepared choices.` : "A small selection of customer favourites.";
  $("#menuTools").classList.toggle("signature-tools", !showFull);
  $("#menu").classList.toggle("signature-view", !showFull);
  $("#menuSearch").value = "";
  renderFilters();
  renderMenu();
}

function renderMenu() {
  const query = $("#menuSearch").value.trim().toLowerCase();
  const menuGrid = $("#menuGrid");
  const visible = dishes.filter(dish => {
    if (!fullMenu) return dish.signature;
    return (activeCategory === "All" || dish.category === activeCategory) && dish.name.toLowerCase().includes(query);
  });
  menuGrid.innerHTML = "";
  visible.forEach(dish => {
    const card = document.createElement("article");
    card.className = "dish";
    const image = !fullMenu && signatureImages[dish.name]
      ? `<div class="dish-image"><img src="${signatureImages[dish.name]}" alt="${dish.name}" loading="lazy"></div>`
      : "";
    card.innerHTML = `${image}<div class="dish-content"><div class="dish-top"><h3>${dish.name}</h3><span class="price">${dish.priceLabel}</span></div><p>${dish.category}</p>${dish.price === null ? '<span class="unavailable">Confirm price with our team</span>' : ""}</div>`;
    menuGrid.append(card);
  });
  if (!visible.length) menuGrid.innerHTML = "<p>No dishes found. Try another search.</p>";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll('a[href="#menu"]').forEach(link => link.addEventListener("click", () => setMenuMode(true)));
$("#menuSearch").oninput = renderMenu;
for (let number = 1; number <= 30; number++) $("#guests").add(new Option(`${number} ${number === 1 ? "guest" : "guests"}`, number));
$("#date").min = new Date().toISOString().split("T")[0];
$("#phone").oninput = event => event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10);
$("#bookingForm").onsubmit = event => {
  event.preventDefault();
  const phone = $("#phone").value;
  if (!/^\d{10}$/.test(phone)) return showToast("Enter a valid 10-digit number");
  const message = `Hello Cafe By Pass! I would like to request a table.\n\nName: ${$("#name").value}\nPhone: ${phone}\nDate: ${$("#date").value}\nTime: ${$("#time").value}\nGuests: ${$("#guests").value}\nOccasion: ${$("#occasion").value}\nSpecial request: ${$("#request").value || "None"}\n\nPlease confirm my reservation.`;
  open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank");
};

const navigation = $("nav");
$(".nav-toggle").onclick = () => navigation.classList.toggle("open");
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", () => navigation.classList.remove("open")));
onscroll = () => $("header").classList.toggle("scrolled", scrollY > 20);
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
$("#year").textContent = new Date().getFullYear();
setMenuMode(false);
