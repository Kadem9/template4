// Les imaged qui tournent

const image = document.querySelectorAll(".imagejs");
nombreImage = image.length;
let compteur = 0;

function imageturn() {
    image[compteur].classList.remove("active");

    if (compteur < nombreImage - 1) {
        compteur++;
    } else {
        compteur = 0;
    }
    image[compteur].classList.add("active");

    setTimeout("imageturn()", 2000);
}

window.onload = function () {
    imageturn();
};

// Système d'avis par les utilisateurs

const blocdiv = document.querySelector(".pnote");
const inputvaleur = document.getElementById("inputtext");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    blocdiv.innerHTML += ` <div class="avisbox">
    <p style="text-align: center;">"${inputvaleur.value}"</p>

    <div class="rate">
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
    </div>
</div>`;
    storage();
    inputvaleur.value = "";
});

function storage() {
    window.localStorage.todoList = blocdiv.innerHTML;
}

// Système d'avis 1 à la fois

const boxavis = document.querySelectorAll(".avisbox");
nombreBox = boxavis.length;
const avisPrecedent = document.querySelector(".left");
const avisSuivant = document.querySelector(".right");
let count = 0;

function slideSuivant() {
    boxavis[count].classList.remove("online");

    if (count < nombreBox - 1) {
        count++;
    } else {
        count = 0;
    }
    boxavis[count].classList.add("online");
}

avisSuivant.addEventListener("click", slideSuivant);

function slidePrecedent() {
    boxavis[count].classList.remove("online");

    if (count > 0) {
        count--;
    } else {
        count = nombreBox - 1;
    }
    boxavis[count].classList.add("online");
}

avisPrecedent.addEventListener("click", slidePrecedent);
