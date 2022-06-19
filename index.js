let oficial = fetch("api.json")
  .then((res) => res.json())
  .then((data) => console.log(data[0]["venta"]));

console.log();
