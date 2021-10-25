const apiKey = "4LYxwOoWOqv3oQKNeiFuBog14WQUAjwLoqCTbdmg";
const urlImagemDoDia = "https://api.nasa.gov/planetary/apod";

const consultarImagem = () => {
  fetch(`${urlImagemDoDia}?api_key=${apiKey}`)
    .then((resposta) => resposta.json())
    .then((resultado) => {
      if (resultado?.url) {
        const img = `<img src="${resultado.url}" alt=${resultado.title} />`;
        document.getElementById("imagem-wrapper").innerHTML = img;
      } else {
        console.log(resultado)
        const alertaDeErro = `<div class="alert alert-danger" role="alert">${resultado.error.message}</div>`;
        document.getElementById('imagem-wrapper').innerHTML = alertaDeErro;
      }
    });
};
