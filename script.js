const cntrBanner = document.getElementById('cntrBanner');
const scrollStep = 1;  // Quantidade de pixels para rolar a cada intervalo
const scrollInterval = 20;  // Intervalo em milissegundos
let scrollDirection = 1;  // 1 para rolar para a direita, -1 para a esquerda

function startScrolling() {
    // Rolar o container na direção atual
    cntrBanner.scrollBy(scrollStep * scrollDirection, 0);

    // Verificar se atingiu o final ou o início e inverter a direção
    if (cntrBanner.scrollLeft + cntrBanner.clientWidth >= cntrBanner.scrollWidth) {
        scrollDirection = -1;  // Alterar para rolar para a esquerda
    } else if (cntrBanner.scrollLeft <= 0) {
        scrollDirection = 1;  // Alterar para rolar para a direita
    }
}

// Iniciar o intervalo para rolagem
setInterval(startScrolling, scrollInterval);


function allProdut(categ){
    window.location.href = "allProdutos.html"
    localStorage.setItem("categProdutosPDR", categ)
}


btnsHeaderEsquerda = document.querySelector(".btnsHeaderEsquerda")
btnsHeaderDireita = document.querySelector(".btnsHeaderDireita")
logo = document.querySelector(".cntrLogo")
btnMenu = document.querySelector(".menu")

function menu(){
    btnsHeaderEsquerda.style.display = 'flex'
    btnsHeaderDireita.style.display = 'flex'
    logo.style.display = 'none'
    btnMenu.style.display = 'none'
}


