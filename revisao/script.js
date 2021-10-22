const apiKey = "fBMvNITm4ztOERtqyuUqpl4ix7igKxP5B322g66";
const url = "https://api.nasa.gov/planetary/apod";

const consultarApi = () => {
  fetch(`${url}?api_key=${apiKey}`)
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      } else {
        throw new Error('Erro na conversão da resposta');
      }
    })
    .then((resultado) => {
      document.querySelector('#card-nasa').setAttribute('class', 'aparece');
      document.querySelector('#img-card').setAttribute('src', resultado.url);
      document.querySelector('.card-title').innerHTML = resultado.title;
      document.querySelector('.card-text').innerHTML = resultado.copyright;
      console.log(resultado);
    })
    .catch(erro => {
        document.querySelector('#erro').innerHTML = erro.message;
        console.log(erro);
    });
};
