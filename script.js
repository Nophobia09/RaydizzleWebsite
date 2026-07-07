// Edit this list to add, remove, or change sale items.
// To use real photos, place images in assets/images/ and set image to that file path.
const items = [
  {
    name: "Blue Wave Bracelet",
    category: "Bracelets",
    price: "$6",
    description: "A handmade bracelet with blue and white colors inspired by ocean waves.",
    status: "Available",
    image: "",
    emoji: "🌊"
  },
  {
    name: "Sunset Bead Bracelet",
    category: "Bracelets",
    price: "$7",
    description: "Warm sunset colors with a bold handmade pattern.",
    status: "Available",
    image: "",
    emoji: "🌅"
  },
  {
    name: "Mini Galaxy Painting",
    category: "Paintings",
    price: "$12",
    description: "A colorful small canvas painting with space-inspired colors and stars.",
    status: "Available",
    image: "",
    emoji: "🪐"
  },
  {
    name: "Mountain Scene Painting",
    category: "Paintings",
    price: "$15",
    description: "Original artwork featuring a mountain scene and bright sky colors.",
    status: "Available",
    image: "",
    emoji: "🏔️"
  },
  {
    name: "Custom Keychain",
    category: "Crafts",
    price: "$5",
    description: "A small handmade keychain. Colors can be customized when available.",
    status: "Available",
    image: "",
    emoji: "🔑"
  },
  {
    name: "Mystery Craft Pack",
    category: "Crafts",
    price: "$10",
    description: "A surprise pack with small handmade items and creative pieces.",
    status: "Limited",
    image: "",
    emoji: "🎁"
  }
];

const itemGrid = document.querySelector("#itemGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");

let currentFilter = "all";

year.textContent = new Date().getFullYear();

function itemMatchesSearch(item, term) {
  const haystack = `${item.name} ${item.category} ${item.description} ${item.status}`.toLowerCase();
  return haystack.includes(term.toLowerCase().trim());
}

function renderItems() {
  const term = searchInput.value;
  const filteredItems = items.filter((item) => {
    const categoryMatch = currentFilter === "all" || item.category === currentFilter;
    const searchMatch = itemMatchesSearch(item, term);
    return categoryMatch && searchMatch;
  });

  itemGrid.innerHTML = filteredItems.map((item) => {
    const imageMarkup = item.image
      ? `<img src="${item.image}" alt="${item.name}">`
      : `<span class="placeholder-art" aria-hidden="true">${item.emoji || "✨"}</span>`;

    return `
      <article class="item-card">
        <div class="item-image">
          ${imageMarkup}
          <span class="badge">${item.category}</span>
        </div>
        <div class="item-info">
          <div class="item-topline">
            <h3>${item.name}</h3>
            <span class="price">${item.price}</span>
          </div>
          <p>${item.description}</p>
          <div class="item-meta">
            <span class="status">${item.status}</span>
            <a href="#order">Order info</a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  emptyState.hidden = filteredItems.length !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderItems();
  });
});

searchInput.addEventListener("input", renderItems);

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

renderItems();
