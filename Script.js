let coins = Number(localStorage.getItem("gameboxCoins")) || 0;
let xp = Number(localStorage.getItem("gameboxXP")) || 0;

let clickCount = 0;
let clickTimer = null;
let luckyNumber = 0;

function saveData() {
    localStorage.setItem("gameboxCoins", coins);
    localStorage.setItem("gameboxXP", xp);
}

function updateUI() {

    document.getElementById("coins").textContent = coins;
    document.getElementById("xp").textContent = xp;

    document.getElementById("homeCoins").textContent = coins;
    document.getElementById("homeXP").textContent = xp;

    document.getElementById("myRankXP").textContent = xp + " XP";

    saveData();
}

function showPage(pageID) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageID).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// QUICK CLICK
// ===============================

function startClickGame() {

    clearInterval(clickTimer);

    clickCount = 0;

    const area = document.getElementById("gameArea");

    area.innerHTML = `
        <h2>⚡ QUICK CLICK</h2>

        <p>در 10 ثانیه هرچقدر می‌توانی کلیک کن!</p>

        <div class="click-number" id="clickNumber">0</div>

        <button onclick="clickGame()">CLICK!</button>

        <p id="clickTimer">زمان: 10</p>
    `;

    let time = 10;

    clickTimer = setInterval(() => {

        time--;

        const timer = document.getElementById("clickTimer");

        if (timer) {
            timer.textContent = "زمان: " + time;
        }

        if (time <= 0) {

            clearInterval(clickTimer);

            coins += clickCount;
            xp += clickCount * 2;

            updateUI();

            area.innerHTML = `
                <h2>🏁 تمام شد!</h2>
                <p>تعداد کلیک: ${clickCount}</p>
                <p>🪙 +${clickCount} سکه</p>
                <p>⭐ +${clickCount * 2} XP</p>
                <button onclick="startClickGame()">دوباره</button>
            `;
        }

    }, 1000);
}

function clickGame() {

    clickCount++;

    const number = document.getElementById("clickNumber");

    if (number) {
        number.textContent = clickCount;
    }
}


// ===============================
// LUCKY NUMBER
// ===============================

function startLuckyGame() {

    luckyNumber = Math.floor(Math.random() * 10) + 1;

    document.getElementById("gameArea").innerHTML = `

        <h2>🎯 LUCKY NUMBER</h2>

        <p>یک عدد بین 1 تا 10 انتخاب کن.</p>

        <input
            id="guess"
            type="number"
            min="1"
            max="10"
            placeholder="عدد"
            style="
                padding:12px;
                width:100px;
                border-radius:10px;
                border:none;
                margin:15px;
                text-align:center;
            "
        >

        <br>

        <button onclick="checkLucky()">حدس بزن</button>

        <p id="luckyResult"></p>
    `;
}

function checkLucky() {

    const guess = Number(document.getElementById("guess").value);
    const result = document.getElementById("luckyResult");

    if (guess < 1 || guess > 10) {
        result.textContent = "❌ عدد باید بین 1 تا 10 باشد.";
        return;
    }

    if (guess === luckyNumber) {

        coins += 50;
        xp += 100;

        updateUI();

        result.innerHTML =
            "🎉 درست حدس زدی!<br>🪙 +50 سکه<br>⭐ +100 XP";

    } else {

        result.textContent =
            "❌ اشتباه! عدد درست " + luckyNumber + " بود.";

        xp += 5;

        updateUI();
    }
}


// ===============================
// COIN RUSH
// ===============================

function startCoinGame() {

    let score = 0;

    document.getElementById("gameArea").innerHTML = `

        <h2>🪙 COIN RUSH</h2>

        <p>در 15 ثانیه تا می‌توانی سکه جمع کن!</p>

        <div class="click-number" id="coinScore">0</div>

        <button onclick="collectCoin()">🪙 COLLECT</button>

        <p id="coinTimer">زمان: 15</p>
    `;

    let time = 15;

    const timer = setInterval(() => {

        time--;

        const timerText = document.getElementById("coinTimer");

        if (timerText) {
            timerText.textContent = "زمان: " + time;
        }

        if (time <= 0) {

            clearInterval(timer);

            coins += score;
            xp += score * 3;

            updateUI();

            document.getElementById("gameArea").innerHTML = `
                <h2>🏆 پایان!</h2>
                <p>سکه جمع‌شده: ${score}</p>
                <p>🪙 +${score} سکه</p>
                <p>⭐ +${score * 3} XP</p>

                <button onclick="startCoinGame()">دوباره</button>
            `;
        }

    }, 1000);

    window.collectCoin = function () {

        score++;

        const scoreElement = document.getElementById("coinScore");

        if (scoreElement) {
            scoreElement.textContent = score;
        }
    };
}


// ===============================
// PREMIUM
// ===============================

function premiumMessage() {

    alert(
        "👑 GameBox Premium\n\n" +
        "این بخش در نسخه بعدی فعال می‌شود."
    );
}


// شروع
updateUI();
