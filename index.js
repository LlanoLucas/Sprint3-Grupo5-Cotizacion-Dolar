let blue = fetch("api.json")
  .then((res) => res.json())
  .then((data) => document.write(data["0"]["casa"]["nombre"]));

function fetchear(dol) {
  fetch("api.json")
    .then((res) => res.json())
    .then((data) => document.write(data[dol]["casa"]["nombre"]));
}

function printear(dolar) {
  for (let caracteristicas of dolar) {
    dolar.appendChild(caracteristicas);
    console.log(dolar);
  }
}

fetchear(6);
