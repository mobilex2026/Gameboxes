/* =========================================
   GAMEBOX PRO
   REAL OPEN-SOURCE GAMES
   ========================================= */


/* ================= GAME DATA ================= */

const games = [

    {
        id: 1,
        title: "Shattered Pixel Dungeon",
        category: "rpg",
        categoryName: "نقش‌آفرینی",
        rating: 4.9,
        platform: "Android",
        license: "GPL-3.0",
        icon: "⚔️",
        cover: "cover-rpg",
        description:
            "یک بازی نقش‌آفرینی روگ‌لایک متن‌باز با مراحل تصادفی، دشمنان مختلف و آیتم‌های متعدد.",
        download:
            "https://f-droid.org/packages/com.shatteredpixel.shatteredpixeldungeon/"
    },

    {
        id: 2,
        title: "Mindustry",
        category: "strategy",
        categoryName: "استراتژی",
        rating: 4.9,
        platform: "Android",
        license: "GPL-3.0+",
        icon: "🏭",
        cover: "cover-strategy",
        description:
            "بازی ساخت کارخانه، دفاع از پایگاه و استراتژی با امکان بازی چندنفره.",
        download:
            "https://f-droid.org/packages/io.anuke.mindustry/"
    },

    {
        id: 3,
        title: "Unciv",
        category: "strategy",
        categoryName: "استراتژی",
        rating: 4.8,
        platform: "Android",
        license: "Open Source",
        icon: "🏛️",
        cover: "cover-strategy",
        description:
            "یک بازی استراتژی تمدن‌سازی 4X متن‌باز؛ تمدن خودت را بساز، تحقیق کن و گسترش بده.",
        download:
            "https://f-droid.org/packages/com.unciv.app/"
    },

    {
        id: 4,
        title: "SuperTuxKart",
        category: "racing",
        categoryName: "مسابقه‌ای",
        rating: 4.8,
        platform: "Android",
        license: "GPL-3.0",
        icon: "🏎️",
        cover: "cover-racing",
        description:
            "یک بازی مسابقه‌ای سه‌بعدی متن‌باز با ماشین‌ها، مسیرها، حالت‌های مختلف و بازی آنلاین.",
        download:
            "https://f-droid.org/packages/org.supertuxkart.stk/"
    },

    {
        id: 5,
        title: "Pixel Wheels",
        category: "racing",
        categoryName: "مسابقه‌ای",
        rating: 4.6,
        platform: "Android",
        license: "GPL-3.0+",
        icon: "🚗",
        cover: "cover-racing",
        description:
            "بازی مسابقه‌ای رترو از نمای بالا؛ مسابقه بده، جایزه بگیر و از رقبا جلو بزن.",
        download:
            "https://f-droid.org/packages/com.agateau.tinywheels.android/"
    },

    {
        id: 6,
        title: "OpenTTD",
        category: "strategy",
        categoryName: "استراتژی",
        rating: 4.7,
        platform: "Android",
        license: "LGPL-2.1+",
        icon: "🚂",
        cover: "cover-strategy",
        description:
            "یک بازی شبیه‌سازی و مدیریت حمل‌ونقل که در آن شبکه حمل‌ونقل خودت را می‌سازی.",
        download:
            "https://f-droid.org/packages/org.openttd.fdroid/"
    },

    {
        id: 7,
        title: "Feudal Tactics",
        category: "strategy",
        categoryName: "استراتژی",
        rating: 4.7,
        platform: "Android",
        license: "GPL-3.0+",
        icon: "🏰",
        cover: "cover-strategy",
        description:
            "بازی استراتژی قرون‌وسطایی با جزیره‌های شش‌ضلعی و مراحل متنوع.",
        download:
            "https://f-droid.org/packages/de.sesu8642.feudaltactics/"
    },

    {
        id: 8,
        title: "Simon Tatham's Puzzles",
        category: "puzzle",
        categoryName: "فکری",
        rating: 4.8,
        platform: "Android",
        license: "MIT",
        icon: "🧩",
        cover: "cover-puzzle",
        description:
            "مجموعه‌ای شامل ۴۰ بازی فکری تک‌نفره مانند سودوکو، مین‌یاب، پازل و معماهای مختلف.",
        download:
            "https://f-droid.org/packages/name.boyle.chris.sgtpuzzles/"
    },

    {
        id: 9,
        title: "Andor's Trail",
        category: "rpg",
        categoryName: "نقش‌آفرینی",
        rating: 4.5,
        platform: "Android",
        license: "GPL-2.0",
        icon: "🗡️",
        cover: "cover-rpg",
        description:
            "یک RPG فانتزی داستان‌محور با مأموریت‌ها، مبارزه، تجهیزات و ماجراجویی.",
        download:
            "https://f-droid.org/packages/com.gpl.rpg.AndorsTrail/"
    },

    {
        id: 10,
        title: "Chip Defense",
        category: "arcade",
        categoryName: "آرکید",
        rating: 4.6,
        platform: "Android",
        license: "Open Source",
        icon: "💻",
        cover: "cover-arcade",
        description:
            "یک بازی Tower Defense با موضوع پردازنده، مدارهای منطقی و تراشه‌ها.",
        download:
            "https://f-droid.org/packages/de.chadenas.cpudefense/"
    }

];


/* ================= DOM ================= */

const gamesGrid =
    document.getElementById("gamesGrid");

const popularGrid =
    document.getElementById("popularGrid");

const gameCount =
    document.getElementById("gameCount");

const heroGameCount =
    document.getElementById("heroGameCount");

const empty =
    document.getElementById("empty");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const themeBtn =
    document.getElementById("themeBtn");

const favoriteBtn =
    document.getElementById("favoriteBtn");

const favoriteCount =
    document.getElementById("favoriteCount");

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const modal =
    document.getElementById("gameModal");

const closeModal =
    document.getElementById("closeModal");

const modalCover =
    document.getElementById("modalCover");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalRating =
    document.getElementById("modalRating");

const modalPlatform =
    document.getElementById("modalPlatform");

const modalLicense =
    document.getElementById("modalLicense");

const modalDescription =
    document.getElementById("modalDescription");

const downloadBtn =
    document.getElementById("downloadBtn");

const favoriteModal =
    document.getElementById("favoriteModal");


/* ================= STATE ================= */

let currentGame = null;

let currentList = games;

let favorites = JSON.parse(
    localStorage.getItem("gameboxFavorites") || "[]"
);


/* ================= RENDER ================= */

function renderGames(list) {

    currentList = list;

    gamesGrid.innerHTML = "";

    gameCount.textContent = list.length;

    if (!list.length) {

        empty.style.display = "block";

        return;

    }

    empty.style.display = "none";

    list.forEach(game => {

        const isFavorite =
            favorites.includes(game.id);

        const card =
            document.createElement("article");

        card.className = "game-card";

        card.innerHTML = `

            <div class="game-cover ${game.cover}">

                <span>${game.icon}</span>

                <div class="rating">
                    ⭐ ${game.rating}
                </div>

                <button
                    class="heart ${isFavorite ? "active" : ""}"
                    data-heart="${game.id}"
                >
                    ${isFavorite ? "❤️" : "♡"}
                </button>

            </div>

            <div class="game-info">

                <span class="game-category">
                    ${game.categoryName}
                </span>

                <h3>
                    ${game.title}
                </h3>

                <div class="game-meta">

                    <span>
                        📱 ${game.platform}
                    </span>

                    <span>
                        🏷️ ${game.license}
                    </span>

                </div>

                <div class="card-buttons">

                    <button
                        class="details-btn"
                        data-details="${game.id}"
                    >
                        جزئیات
                    </button>

                    <a
                        class="download-small"
                        href="${game.download}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        دانلود
                    </a>

                </div>

            </div>
        `;

        gamesGrid.appendChild(card);

    });

    attachEvents();
}


/* ================= EVENTS ================= */

function attachEvents() {

    document
        .querySelectorAll("[data-details]")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();

                const id =
                    Number(button.dataset.details);

                const game =
                    games.find(item => item.id === id);

                openGame(game);

            });

        });


    document
        .querySelectorAll("[data-heart]")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();

                const id =
                    Number(button.dataset.heart);

                toggleFavorite(id);

            });

        });


    document
        .querySelectorAll(".game-card")
        .forEach(card => {

            card.addEventListener("click", event => {

                if (
                    event.target.closest("button") ||
                    event.target.closest("a")
                ) {
                    return;
                }

                const id =
                    Number(
                        card.querySelector("[data-details]")
                            .dataset.details
                    );

                openGame(
                    games.find(game => game.id === id)
                );

            });

        });

}


/* ================= MODAL ================= */

function openGame(game) {

    if (!game) return;

    currentGame = game;

    modalCover.className =
        "modal-cover " + game.cover;

    modalCover.innerHTML =
        `<span>${game.icon}</span>`;

    modalTitle.textContent =
        game.title;

    modalCategory.textContent =
        game.categoryName;

    modalRating.textContent =
        game.rating;

    modalPlatform.textContent =
        game.platform;

    modalLicense.textContent =
        game.license;

    modalDescription.textContent =
        game.description;

    downloadBtn.href =
        game.download;

    updateModalFavorite();

    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";
}


function closeGameModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

    currentGame = null;
}


closeModal.addEventListener(
    "click",
    closeGameModal
);


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

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.push(id);

    }

    localStorage.setItem(
        "gameboxFavorites",
        JSON.stringify(favorites)
    );

    updateFavoriteCount();

    updateModalFavorite();

    renderGames(currentList);

    renderPopular();
}


function updateFavoriteCount() {

    favoriteCount.textContent =
        favorites.length;
}


function updateModalFavorite() {

    if (!currentGame) return;

    if (
        favorites.includes(currentGame.id)
    ) {

        favoriteModal.textContent =
            "💔 حذف از علاقه‌مندی";

    } else {

        favoriteModal.textContent =
            "❤️ علاقه‌مندی";

    }

}


favoriteModal.addEventListener(
    "click",
    () => {

        if (currentGame) {
            toggleFavorite(currentGame.id);
        }

    }
);


/* ================= FAVORITE BUTTON ================= */

favoriteBtn.addEventListener(
    "click",
    () => {

        const favoriteGames =
            games.filter(game =>
                favorites.includes(game.id)
            );

        renderGames(favoriteGames);

        document
            .getElementById("games")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* ================= SEARCH ================= */

function searchGames() {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();

    if (!query) {

        renderGames(games);

        return;
    }

    const result =
        games.filter(game =>

            game.title
                .toLowerCase()
                .includes(query)

            ||

            game.categoryName
                .toLowerCase()
                .includes(query)

        );

    renderGames(result);

    document
        .getElementById("games")
        .scrollIntoView({
            behavior: "smooth"
        });

}


searchBtn.addEventListener(
    "click",
    searchGames
);


searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            searchGames();
        }

    }
);


searchInput.addEventListener(
    "input",
    () => {

        if (!searchInput.value.trim()) {
            renderGames(games);
        }

    }
);


/* ================= CATEGORIES ================= */

document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".category")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                const category =
                    button.dataset.category;

                if (category === "all") {

                    renderGames(games);

                } else {

                    renderGames(
                        games.filter(
                            game =>
                                game.category === category
                        )
                    );

                }

                document
                    .getElementById("games")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* ================= POPULAR ================= */

function renderPopular() {

    popularGrid.innerHTML = "";

    const popular =
        [...games]
            .sort(
                (a,b) => b.rating - a.rating
            )
            .slice(0,3);

    popular.forEach(game => {

        const card =
            document.createElement("div");

        card.className =
            "popular-card";

        card.innerHTML = `

            <div class="popular-cover ${game.cover}">
                ${game.icon}
            </div>

            <div class="popular-info">

                <span class="small-title">
                    ${game.categoryName}
                </span>

                <h3>
                    ${game.title}
                </h3>

                <p>
                    ${game.platform}
                </p>

                <span class="popular-rating">
                    ⭐ ${game.rating}
                </span>

            </div>
        `;

        card.addEventListener(
            "click",
            () => openGame(game)
        );

        popularGrid.appendChild(card);

    });

}


/* ================= THEME ================= */

const savedTheme =
    localStorage.getItem("gameboxTheme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}

function updateThemeIcon() {

    themeBtn.textContent =
        document.body.classList.contains("light")
            ? "☀️"
            : "🌙";

}

updateThemeIcon();


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

        localStorage.setItem(
            "gameboxTheme",

            document.body.classList.contains("light")
                ? "light"
                : "dark"
        );

        updateThemeIcon();

    }
);


/* ================= MOBILE MENU ================= */

menuBtn.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "show"
        );

    }
);


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "show"
                );

            }
        );

    });


/* ================= NAVIGATION ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const id =
                    link.getAttribute("href");

                if (
                    id &&
                    id !== "#" &&
                    document.querySelector(id)
                ) {

                    event.preventDefault();

                    document
                        .querySelector(id)
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }

            }
        );

    });


/* ================= INIT ================= */

heroGameCount.textContent =
    games.length;

updateFavoriteCount();

renderGames(games);

renderPopular();
