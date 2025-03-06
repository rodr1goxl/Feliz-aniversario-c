// Esconder a tela inicial e iniciar a música ao clicar no botão
document.getElementById("botao-entrada").addEventListener("click", function() {
    document.getElementById("tela-inicial").style.display = "none";
    musica.play(); // Inicia a música automaticamente
    musicToggle.checked = true; // Atualiza o botão de música para indicar que está tocando
});

// Slider de imagens
let sliderWrapper = document.querySelector(".slides-wrapper");
let slides = document.querySelectorAll(".slide");
let index = 0;

function trocarImagem() {
    index = (index + 1) % slides.length;
    let deslocamento = -index * 100 + "%";
    sliderWrapper.style.transform = `translateX(${deslocamento})`;
}

setInterval(trocarImagem, 3000);

// Corações caindo
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.innerText = "💜";
    coracao.classList.add("coracao");
    document.body.appendChild(coracao);

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

setInterval(criarCoracao, 200);

// Controle da música
let musica = document.getElementById("musica");
let musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("change", () => {
    if (musicToggle.checked) {
        musica.play();
    } else {
        musica.pause();
    }
});

// Atualiza o contador
function atualizarContador() {
    const inicio = new Date("August 23, 2024 22:25:00").getTime();
    const agora = new Date().getTime();
    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60 * 60)) / 1000);

    document.getElementById("contador").innerText = 
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();