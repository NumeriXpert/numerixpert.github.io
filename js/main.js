function navbar() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

var btnPembahasan = document.getElementsByClassName("btn-ans");
var i;

for (i = 0; i < btnPembahasan.length; i++) {
    btnPembahasan[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var contentPembahasan = this.nextElementSibling;
    if (contentPembahasan.style.display === "block") {
        contentPembahasan.style.display = "none";
    } else {
        contentPembahasan.style.display = "block";
    }
    }); 
}

document.getElementById("checkAnswer").addEventListener("click", function () {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');
    var resultElement = document.getElementById("result");

    if (selectedAnswer) {
        if (selectedAnswer.value === "benar") {
            resultElement.textContent = "Jawaban Anda benar!";
        } else {
            resultElement.textContent = "Jawaban Anda salah. Coba lagi.";
        }
    } else {
        resultElement.textContent = "Silakan pilih salah satu jawaban.";
    }
});