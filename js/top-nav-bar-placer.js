// Substitui a chamada do script por um documento HTML de barra de navegação superior em tempo de execução
fetch("../html/top-nav-bar.html")
.then(res => res.text())
.then(text => {

    // Seleciona o script de substituição
    let old_element = document.querySelector("script#top-nav-bar-placer");

    // Cria o novo elemento com base no HTML da barra de navegação
    let new_element = document.createElement("nav");
    new_element.setAttribute("id", "top-nav-bar")
    new_element.innerHTML = text;

    // Substitui no HTML em tempo-real
    old_element.parentNode.replaceChild(new_element, old_element);
})