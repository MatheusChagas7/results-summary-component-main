// fetch para obter o conteúdo do arquivo JSON
// definindo url para o uso no github
urlData = 'https://github.com/MatheusChagas7/results-summary-component-main/blob/main/data.json';

console.log(urlData);

fetch(urlData)
  .then(response => {
    // Verificando se a solicitação foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro ao obter o arquivo JSON');
    }
    // .json() para converter os dados em um objeto JavaScript
    return response.json();
  })
  .then(data => {

    data.forEach(element => {
      
        let minhaClass = element.category.toLowerCase();
        let minhaIMG = document.querySelector("#"+CSS.escape(minhaClass)+"Img");
        let meuP = document.querySelector("#"+CSS.escape(minhaClass)+"P");
        let meuSpan = document.querySelector("#"+CSS.escape(minhaClass)+"Span");

        minhaIMG.setAttribute('src', element.icon);
        meuP.innerHTML = element.category;
        meuSpan.innerHTML = element.score;


      });
  })
  .catch(error => {
    console.error('Erro:', error);
  });