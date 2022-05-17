let real = document.getElementById("valorEmReal");
let rees = document.getElementById("res");

function retornaDolar() {
  let data = fazGet("https://economia.awesomeapi.com.br/last/BRL-USD");

  moeda = JSON.parse(data);
  let valor_dolar = moeda.BRLUSD.high;
  console.log(valor_dolar);
  let new_value = valorConvertido(valor_dolar);
  return new_value;
}

function retornaEuro() {
  let data = fazGet("https://economia.awesomeapi.com.br/last/BRL-EUR");

  moeda = JSON.parse(data);
  let valor_euro = moeda.BRLEUR.high;
  console.log(valor_euro);
  let new_value = valorConvertido(valor_euro);
  return new_value;
}
function valorConvertido(value) {
  new_value = parseFloat(value);
  return new_value;
}

function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function Convert() {
  let moeda = document.getElementsByName("moedaEstrangeira");
  if (real.value == 0) {
    window.alert("Error");
  } else {
    if (moeda[0].checked) {
      let valor = real.value * retornaDolar();
      rees.innerHTML = `R$${real.value} para dolar será $${valor.toFixed(2)}`;
    } else if (moeda[1].checked) {
      let valor = real.value * retornaEuro();
      rees.innerHTML = `R$${real.value} para euro será Є${valor.toFixed(2)}`;
    } 
  }
}
function Limpar() {
  real.value = "";
  rees.innerHTML = "";
}

function MudaCor() {
  let cor = document.getElementsByName("dark-clear");
  let foot = document.getElementById("footer1");
  if (cor[1].checked) {
    document.body.style.background = "white";
    foot.style.color = "black";
  } else {
    document.body.style.background = "black";
    foot.style.color = "white";
  }
}
