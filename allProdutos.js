tagGigantes = document.querySelector(".tagGigantes")
tagAssc = document.querySelector(".tagAssc")
tagNike = document.querySelector(".tagNike")
tagStreetwear = document.querySelector(".tagStreetwear")
tagQuadro = document.querySelector(".tagQuadro")
tagChaveiro = document.querySelector(".tagChaveiro")


styleSelect = 'background-color: rgb(79, 79, 218);color: white;border: 1px solid rgb(79, 79, 218);'
styleNoSelect = 'background-color: rgb(255, 255, 255);color: black;border: 1px solid rgba(0, 0, 0, 0.5);'

textQuantidadeEstampa = document.querySelector(".quantidadeDeEstampa")


function clickTag(classTag) {
    if (classTag == 'Produtos'){
        document.querySelectorAll(".listaProdutos")[0].style.display = "flex"
        document.querySelectorAll(".listaProdutos")[1].style.display = "flex"
        document.querySelectorAll(".listaProdutos")[2].style.display = "flex"
        document.querySelectorAll(".listaProdutos")[3].style.display = "flex"
        document.querySelectorAll(".listaProdutos")[4].style.display = "flex"
        document.querySelectorAll(".listaProdutos")[5].style.display = "flex"
    
    }else{
        tagGigantes.style = styleNoSelect
        tagAssc.style = styleNoSelect
        tagNike.style = styleNoSelect
        tagStreetwear.style = styleNoSelect
        tagQuadro.style = styleNoSelect
        tagChaveiro.style = styleNoSelect

        document.querySelector(".tag"+classTag).style = styleSelect
        attLista(classTag)
    }
}

clickTag(localStorage.getItem("categProdutosPDR"))

function attLista(classBoxList){
    //fazer um box com a class semelhante a da tag
    //deixa todas as box invisiveis
    //deixar so as box "box"+classBoxList visivel
    document.querySelectorAll(".listaProdutos")[0].style.display = "none"
    document.querySelectorAll(".listaProdutos")[1].style.display = "none"
    document.querySelectorAll(".listaProdutos")[2].style.display = "none"
    document.querySelectorAll(".listaProdutos")[3].style.display = "none"
    document.querySelectorAll(".listaProdutos")[4].style.display = "none"
    document.querySelectorAll(".listaProdutos")[5].style.display = "none"
    document.querySelector(".produtos" + classBoxList).style.display = "flex"
    localStorage.setItem("categProdutosPDR", classBoxList)

    textQuantidadeEstampa.innerHTML = document.querySelectorAll(".boxProduto"+classBoxList).length + " Estampas encontrados"
}






function produtoSelecionado(artista) {
    localStorage.setItem("artistaSelecionado", artista)
    //window.location.href = "produtoSelecionado.html"
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

