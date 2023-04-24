const key = "85ef4a098a7f0aa52ea3b4a13588ccec";

function colocarDadosNaTela(dados) {
  console.log(dados);
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C (Celsius)";
  document.querySelector(".text-weather").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    dados.main.humidity + "% (umidade relativa do ar)";
  document.querySelector(
    ".weather"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function BuscarCity(city) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  colocarDadosNaTela(dados);
}

function CliqueiNoBotao() {
  const city = document.querySelector(".input-city").value;

  BuscarCity(city);
}
