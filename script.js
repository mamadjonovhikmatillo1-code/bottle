
var fakt = 0;

function changeTheme() {
    if (document.body.className == "dark") {
        document.body.className = "";
        document.querySelector(".theme-btn").innerHTML = "🌙 Tungi rejim";
    } else {
        document.body.className = "dark";
        document.querySelector(".theme-btn").innerHTML = "☀️ Kunduzgi rejim";
    }
    return;
}

function buyBottle(nomi) {
    document.getElementById("orderMessage").innerHTML =
        nomi + " tanlandi! Buyurtmangizni rasmiylashtiring.";
    return;
}

function showFact() {
    if (fakt == 0) {
        document.getElementById("factText").innerHTML =
            "Suv inson tanasining normal ishlashi uchun zarur.";
    } else if (fakt == 1) {
        document.getElementById("factText").innerHTML =
            "Qayta ishlatiladigan shishalar chiqindilarni kamaytiradi.";
    } else if (fakt == 2) {
        document.getElementById("factText").innerHTML =
            "Suv o'simliklar hayoti uchun ham juda muhim.";
    } else {
        document.getElementById("factText").innerHTML =
            "Toza suv salomatlik uchun muhim.";
    }

    fakt++;

    if (fakt > 3) {
        fakt = 0;
    }

    return;
}

function showAnswer(raqam) {
    var javob = document.getElementById("answer" + raqam);

    if (javob.style.display == "block") {
        javob.style.display = "none";
    } else {
        javob.style.display = "block";
    }

    return;
}

function sendMessage() {
    var ism = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var xabar = document.getElementById("message").value;

    if (ism == "" || email == "" || xabar == "") {
        document.getElementById("formMessage").innerHTML =
            "Barcha maydonlarni to'ldiring!";
    } else {
        document.getElementById("formMessage").innerHTML =
            "Rahmat, " + ism + "! Ma'lumotlaringiz kiritildi.";
    }

    return;
}
