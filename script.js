/* =========================================
   GAMEBOX PRO
   ========================================= */


/* ================= GAME DATA ================= */

const games = [

    {
        id: 1,
        title: "Shadow War",
        category: "action",
        categoryName: "اکشن",
        rating: 4.8,
        size: "850MB",
        version: "1.5",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
        description: "یک بازی اکشن هیجان‌انگیز با مراحل مختلف و مبارزات سریع.",
        download: "https://example.com/shadow-war.zip"
    },

    {
        id: 2,
        title: "Speed Racing",
        category: "racing",
        categoryName: "مسابقه‌ای",
        rating: 4.9,
        size: "620MB",
        version: "2.1",
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
        description: "مسابقه‌ای سریع با ماشین‌های مختلف و مسیرهای جذاب.",
        download: "https://example.com/speed-racing.zip"
    },

    {
        id: 3,
        title: "Super Football",
        category: "sports",
        categoryName: "ورزشی",
        rating: 4.7,
        size: "740MB",
        version: "3.0",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
        description: "یک بازی فوتبال سرگرم‌کننده برای طرفداران فوتبال.",
        download: "https://example.com/super-football.zip"
    },

    {
        id: 4,
        title: "Mystery Island",
        category: "adventure",
        categoryName: "ماجراجویی",
        rating: 4.6,
        size: "1.2GB",
        version: "1.2",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
        description: "در یک جزیره مرموز ماجراجویی کن و رازهای آن را پیدا کن.",
        download: "https://example.com/mystery-island.zip"
    },

    {
        id: 5,
        title: "Brain Master",
        category: "puzzle",
        categoryName: "فکری",
        rating: 4.5,
        size: "300MB",
        version: "1.0",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",
        description: "مجموعه‌ای از معماها و چالش‌های فکری سرگرم‌کننده.",
        download: "https://example.com/brain-master.zip"
    },

    {
        id: 6,
        title: "Battle Arena",
        category: "action",
        categoryName: "اکشن",
        rating: 4.8,
        size: "950MB",
        version: "4.2",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
        description: "وارد میدان نبرد شو و با حریفان مختلف مبارزه کن.",
        download: "https://example.com/battle-arena.zip"
    },

    {
        id: 7,
        title: "Street Driver",
        category: "racing",
        categoryName: "مسابقه‌ای",
        rating: 4.4,
        size: "560MB",
        version: "1.8",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
        description: "رانندگی در خیابان‌های شهر با ماشین‌های مختلف.",
        download: "https://example.com/street-driver.zip"
    },

    {
        id: 8,
        title: "Basketball 1v1",
        category: "sports",
        categoryName: "ورزشی",
        rating: 4.9,
        size: "410MB",
        version: "2.0",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
        description: "در مسابقات بسکتبال یک‌به‌یک شرکت کن و برنده شو.",
        download: "https://example.com/basketball.zip"
    }

];


/* ================= DOM ================= */

const gamesGrid = document.getElementById("gamesGrid");
const popularGrid = document.getElementById("popularGrid");
const gameCount = document.getElementById("gameCount");
const heroGameCount = document.getElementById("heroGameCount");
const empty = document.getElementById("empty");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const categoryButtons = document.querySelectorAll(".category");

const themeBtn = document.getElementById("themeBtn");

const favoriteBtn = document.getElementById("favoriteBtn");
const favoriteCount = document.getElementById("favoriteCount");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const modal = document.getElementById("gameModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalRating = document.getElementById("modalRating");
const modalSize = document.getElementById("modalSize");
const modalVersion = document.getElementById("modalVersion");
const modalDescription = document.getElementById("modalDescription");

const downloadBtn = document.getElementById("downloadBtn");
const favoriteModal = document.getElementById("favoriteModal");

const newsletterForm = document.getElementById("newsletterForm");


/* ================= STATE ================= */

let currentGame = null;
let currentList = games;

let favorites = JSON.parse(
    localStorage.getItem("gameboxFavorites") || "[]"
);


/* ================= RENDER GAMES ================= */

function renderGames(list) {

    currentList = list;

    gamesGrid.innerHTML = "";

    gameCount.textContent = list.length;

    if (list.length === 0) {

        empty.style.display = "block";

        return;
    }

    empty.style.display = "none";

    list.forEach(game => {

        const isFavorite = favorites.includes(game.id);

        const card = document.createElement("article");

        card.className = "game-card";

        card.innerHTML = `

            <div class="game-image">

                <img
                    src="${game.image}"
                    alt="${game.title}"
                    loading="lazy"
                >

                <span class="game-rating">
                    ⭐ ${game.rating}
                </span>

                <button
                    class="heart-btn ${isFavorite ? "active" : ""}"
                    data-heart="${game.id}"
                >
                    ${isFavorite ? "❤️" : "♡"}
                </button>

            </div>

            <div class="game-info">

                <span class="game-category">
                    ${game.categoryName}
                </span>

                <h3>${game.title}</h3>

                <div class="game-meta">

                    <span>💾 ${game.size}</span>

                    <span>📱 ${game.version}</span>

                </div>

                <div class="card-buttons">

                    <button
                        class="details-btn"
                        data-details="${game.id}"
                    >
                        جزئیات
                    </button>

                    <a
                        href="${game.download}"
                        target="_blank"
                        class="download-small"
                    >
                        دانلود
                    </a>

                </div>

            </div>

        `;

        gamesGrid.appendChild(card);

    });

    attachCardEvents();
}


/* ================= CARD EVENTS ================= */

function attachCardEvents() {

    document.querySelectorAll("[data-details]").forEach(button => {

        button.addEventListener("click", event => {

            event.stopPropagation();

            const id = Number(button.dataset.details);

            const game = games.find(item => item.id === id);

            openGame(game);

        });

    });


    document.querySelectorAll("[data-heart]").forEach(button => {

        button.addEventListener("click", event => {

            event.stopPropagation();

            const id = Number(button.dataset.heart);

            toggleFavorite(id);

        });

    });


    document.querySelectorAll(".game-card").forEach(card => {

        card.addEventListener("click", event => {

            if (
                event.target.closest("button") ||
                event.target.closest("a")
            ) {
                return;
            }

            const button = card.querySelector("[data-details]");

            const id = Number(button.dataset.details);

            const game = games.find(item => item.id === id);

            openGame(game);

        });

    });

}


/* ================= OPEN MODAL ================= */

function openGame(game) {

    if (!game) return;

    currentGame = game;

    modalImage.src = game.image;
    modalImage.alt = game.title;

    modalTitle.textContent = game.title;
    modalCategory.textContent = game.categoryName;

    modalRating.textContent = game.rating;
    modalSize.textContent = game.size;
    modalVersion.textContent = game.version;

    modalDescription.textContent = game.description;

    downloadBtn.href = game.download;

    updateModalFavorite();

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* ================= CLOSE MODAL ================= */

function closeGameModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

    currentGame = null;
}

closeModal.addEventListener("click", closeGameModal);

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeGameModal();
    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeGameModal();
    }

});


/* ================= FAVORITES ================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites = favorites.filter(
            favoriteId => favoriteId !== id
        );

    } else {

        favorites.push(id);

    }

    localStorage.setItem(
        "gameboxFavorites",
        JSON.stringify(favorites)
    );

    updateFavoriteCount();

    if (currentGame) {
        updateModalFavorite();
    }

    renderGames(currentList);

    renderPopular();
}


function updateFavoriteCount() {

    favoriteCount.textContent = favorites.length;
}


function updateModalFavorite() {

    if (!currentGame) return;

    if (favorites.includes(currentGame.id)) {

        favoriteModal.textContent = "💔 حذف از علاقه‌مندی";

    } else {

        favoriteModal.textContent = "❤️ علاقه‌مندی";

    }

}


favoriteModal.addEventListener("click", () => {

    if (!currentGame) return;

    toggleFavorite(currentGame.id);

    updateModalFavorite();

});


/* ================= FAVORITE HEADER ================= */

favoriteBtn.addEventListener("click", () => {

    const favoriteGames = games.filter(game =>
        favorites.includes(game.id)
    );

    document
        .getElementById("games")
        .scrollIntoView({
            behavior: "smooth"
        });

    renderGames(favoriteGames);

});


/* ================= SEARCH ================= */

function searchGames() {

    const query = searchInput.value
        .trim()
        .toLowerCase();

    if (!query) {

        renderGames(games);

        return;
    }

    const result = games.filter(game =>

        game.title.toLowerCase().includes(query) ||

        game.categoryName.toLowerCase().includes(query) ||

        game.category.toLowerCase().includes(query)

    );

    renderGames(result);

    document
        .getElementById("games")
        .scrollIntoView({
            behavior: "smooth"
        });

}

searchBtn.addEventListener("click", searchGames);

searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        searchGames();
    }

});

searchInput.addEventListener("input", () => {

    const query = searchInput.value
        .trim()
        .toLowerCase();

    if (!query) {
        renderGames(games);
    }

});


/* ================= CATEGORIES ================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.category;

        if (category === "all") {

            renderGames(games);

        } else {

            const result = games.filter(
                game => game.category === category
            );

            renderGames(result);

        }

        document
            .getElementById("games")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* ================= POPULAR ================= */

function renderPopular() {

    popularGrid.innerHTML = "";

    const popularGames = [...games]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    popularGames.forEach(game => {

        const card = document.createElement("div");

        card.className = "popular-card";

        card.innerHTML = `

            <div class="popular-img">

                <img
                    src="${game.image}"
                    alt="${game.title}"
                    loading="lazy"
                >

            </div>

            <div class="popular-info">

                <span class="small-title">
                    ${game.categoryName}
                </span>

                <h3>${game.title}</h3>

                <p>
                    ${game.size}
                </p>

                <span class="popular-rating">
                    ⭐ ${game.rating}
                </span>

            </div>

        `;

        card.addEventListener("click", () => {

            openGame(game);

        });

        popularGrid.appendChild(card);

    });

}


/* ================= THEME ================= */

function updateThemeIcon() {

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

}


const savedTheme = localStorage.getItem("gameboxTheme");

if (savedTheme === "light") {

    document.body.classList.add("light");

}

updateThemeIcon();


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const theme =
        document.body.classList.contains("light")
            ? "light"
            : "dark";

    localStorage.setItem(
        "gameboxTheme",
        theme
    );

    updateThemeIcon();

});


/* ================= MOBILE MENU ================= */

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("show");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("show");

    });

});


/* ================= NAVIGATION ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            targetId &&
            targetId !== "#" &&
            document.querySelector(targetId)
        ) {

            event.preventDefault();

            document
                .querySelector(targetId)
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

});


/* ================= NEWSLETTER ================= */

newsletterForm.addEventListener("submit", event => {

    event.preventDefault();

    const email =
        document.getElementById("emailInput").value.trim();

    if (!email) return;

    localStorage.setItem(
        "gameboxSubscriber",
        email
    );

    alert(
        "🎉 عضویت شما ثبت شد!"
    );

    newsletterForm.reset();

});


/* ================= INITIALIZE ================= */

heroGameCount.textContent = games.length;

updateFavoriteCount();

renderGames(games);

renderPopular();
