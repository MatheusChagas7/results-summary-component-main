function novoElemento(tagName, className){

    const elemento = document.createElement(tagName)
    elemento.className = className
    return elemento
}