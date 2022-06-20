fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then((res) => res.json())
  .then((data) => console.log(data["0"]["casa"]["nombre"]));

function fetchear(dol) {
  fetch("api.json")
    .then((res) => res.json())
    .then((data) => document.write(data[dol]["casa"]));
}

fetchear(0);
