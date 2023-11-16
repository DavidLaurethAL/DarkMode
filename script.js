function darkmode(){
    const pagina = document.body

    pagina.classList.toggle("darkmode")

    const botao = document.querySelector("button")

    const isdarkmode = document.body.classList.contains("darkmode")

    if (isdarkmode == true){
        botao.textContent = "Modo Claro" 
    }
    else{
        botao.textContent = "Modo Escuro"
    }
}