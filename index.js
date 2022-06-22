let contenido = document.querySelector("#dolares"); //SELECCIONO EL CONTAINER CON TODOS LOS DÓLARES

function fetchear() {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((res) => res.json()) // HAGO QUE RES DEVUELVA LA API
    .then((data) => {
      // A TODA LA DATA QUE ESTA EN LA API LE DOY DE NOMBRE DATA, Y HAGO QUE DEVUELVA LA FUNCION PINTAR CON EL PARÁMETRO DE DATA (LA API)
      pintar(data);
    });
}

function pintar(data) {
  // CREO LA FUNCION PINTAR
  for (let valores of data) {
    // HAGO UN BUCLE PARA PODER USAR TODOS LOS VALORES DE DATA (ESTO ES INÚTIL, PORQUE NO PUDIMOS HACER EL BUCLE)

    // HUBIERA SIDO MEJOR HACER UN BUCLE, PERO NO ENCONTRAMOS LA FORMA, Y LO TUVIMOS QUE HACER ASÍ

    // ACÁ ABAJO CAMNBIO EL CONTENIDO DEL CONTENEDOR DEL HTML, BÁSICAMENTE COPIO Y PEGO LO QUE ESTABA EN EL HTML Y EDITO LOS VALORES IMPORTANTES CON LA DATA DE LA API
    contenido.innerHTML = `

    <div class="col-4 card bg-secondary bg-opacity-25 me-3">
    <div class="row">
      <div class="col-12 p-2 bg-success bg-opacity-50">
        <p class="m-0 text-center text-white">${data["0"]["casa"]["nombre"]}</p>
      </div>
      <div class="col-12 py-4 d-flex flex-row justify-content-around">
        <div class="d-flex flex-column">
          <p class="m-0 text-bold title-buy-sell text-center">Compra</p>
          <p
            class="m-0 text-bold currency-font text-opacity-50 text-danger"
          >
          ${data["0"]["casa"]["compra"]}
          </p>
        </div>
        <div class="d-flex flex-column">
          <p class="m-0 title-buy-sell text-center">Venta</p>
          <p class="m-0 currency-font text-opacity-50 text-secondary">
          ${data["0"]["casa"]["venta"]}
          </p>
        </div>
      </div>
      <div
        class="col-12 pt-2 text-center p-1 bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 text-danger">Variacion ${data["0"]["casa"]["variacion"]}%</p>
      </div>
      <div
        class="col-12 pb-2 text-center bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 date-font text-muted">
          ACTUALIZADO 19/06/2022 18:00
        </p>
      </div>
    </div>
  </div>
  <div class="col-4 card bg-secondary bg-opacity-25">
    <div class="row">
      <div class="col-12 p-2 bg-success bg-opacity-50">
        <p class="m-0 text-center text-white">${data["1"]["casa"]["nombre"]}</p>
      </div>
      <div class="col-12 py-4 d-flex flex-row justify-content-around">
        <div class="d-flex flex-column">
          <p class="m-0 text-bold title-buy-sell text-center">Compra</p>
          <p
            class="m-0 text-bold currency-font text-opacity-50 text-success"
          >
          ${data["1"]["casa"]["compra"]}
          </p>
        </div>
        <div class="d-flex flex-column">
          <p class="m-0 title-buy-sell text-center">Venta</p>
          <p class="m-0 currency-font text-opacity-50 text-secondary">
          ${data["1"]["casa"]["venta"]}
          </p>
        </div>
      </div>
      <div
        class="col-12 pt-2 text-center p-1 bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 text-success">Variacion ${data["1"]["casa"]["variacion"]}%</p>
      </div>
      <div
        class="col-12 pb-2 text-center bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 date-font text-muted">
          ACTUALIZADO 19/06/2022 18:00
        </p>
      </div>
    </div>
  </div>
  <div class="col-4 card bg-secondary bg-opacity-25 me-3">
    <div class="row">
      <div class="col-12 p-2 bg-success bg-opacity-50">
        <p class="m-0 text-center text-white">${data["3"]["casa"]["nombre"]}</p>
      </div>
      <div class="col-12 py-4 d-flex flex-row justify-content-around">
        <div class="d-flex flex-column">
          <p class="m-0 text-bold title-buy-sell text-center">Compra</p>
          <p
            class="m-0 text-bold currency-font text-opacity-50 text-success"
          >
          ${data["3"]["casa"]["compra"]}
          </p>
        </div>
        <div class="d-flex flex-column">
          <p class="m-0 title-buy-sell text-center">Venta</p>
          <p class="m-0 currency-font text-opacity-50 text-secondary">
          ${data["3"]["casa"]["venta"]}
          </p>
        </div>
      </div>
      <div
        class="col-12 pt-2 text-center p-1 bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 text-success">Variacion ${data["3"]["casa"]["variacion"]}%</p>
      </div>
      <div
        class="col-12 pb-2 text-center bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 date-font text-muted">
          ACTUALIZADO 19/06/2022 18:00
        </p>
      </div>
    </div>
  </div>
  <div class="col-4 card bg-secondary bg-opacity-25">
    <div class="row">
      <div class="col-12 p-2 bg-success bg-opacity-50">
        <p class="m-0 text-center text-white">${data["4"]["casa"]["nombre"]}</p>
      </div>
      <div class="col-12 py-4 d-flex flex-row justify-content-around">
        <div class="d-flex flex-column">
          <p class="m-0 text-bold title-buy-sell text-center">Compra</p>
          <p
            class="m-0 text-bold currency-font text-opacity-50 text-success"
          >
          ${data["4"]["casa"]["compra"]}
          </p>
        </div>
        <div class="d-flex flex-column">
          <p class="m-0 title-buy-sell text-center">Venta</p>
          <p class="m-0 currency-font text-opacity-50 text-secondary">
          ${data["4"]["casa"]["venta"]}
          </p>
        </div>
      </div>
      <div
        class="col-12 pt-2 text-center p-1 bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 text-success">Variacion ${data["4"]["casa"]["variacion"]}%</p>
      </div>
      <div
        class="col-12 pb-2 text-center bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 date-font text-muted">
          ACTUALIZADO 19/06/2022 18:00
        </p>
      </div>
    </div>
  </div>
  <div class="col-4 card bg-secondary bg-opacity-25 me-3">
    <div class="row">
      <div class="col-12 p-2 bg-success bg-opacity-50">
        <p class="m-0 text-center text-white">${data["7"]["casa"]["nombre"]} Promedio</p>
      </div>
      <div class="col-12 py-4 d-flex flex-row justify-content-around">
        <div class="d-flex flex-column">
          <p class="m-0 text-bold title-buy-sell text-center">Compra</p>
          <p
            class="m-0 text-bold currency-font text-opacity-50 text-success"
          >
          ${data["7"]["casa"]["compra"]}
          </p>
        </div>
        <div class="d-flex flex-column">
          <p class="m-0 title-buy-sell text-center">Venta</p>
          <p class="m-0 currency-font text-opacity-50 text-secondary">
          ${data["7"]["casa"]["venta"]}
          </p>
        </div>
      </div>
      <div
        class="col-12 pt-2 text-center p-1 bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 text-success">Variacion ${data["7"]["casa"]["variacion"]}%</p>
      </div>
      <div
        class="col-12 pb-2 text-center bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 date-font text-muted">
          ACTUALIZADO 19/06/2022 18:00
        </p>
      </div>
    </div>
  </div>
  <div class="col-4 card bg-secondary bg-opacity-25">
    <div class="row">
      <div class="col-12 p-2 bg-success bg-opacity-50">
        <p class="m-0 text-center text-white">${data["6"]["casa"]["nombre"]}</p>
      </div>
      <div class="col-12 py-4 d-flex flex-row justify-content-around">
        <div class="d-flex flex-column">
          <p class="m-0 text-bold title-buy-sell text-center">Compra</p>
          <p
            class="m-0 text-bold currency-font text-opacity-50 text-success"
          >
          ${data["6"]["casa"]["compra"]}
          </p>
        </div>
        <div class="d-flex flex-column">
          <p class="m-0 title-buy-sell text-center">Venta</p>
          <p class="m-0 currency-font text-opacity-50 text-secondary">
          ${data["6"]["casa"]["venta"]}
          </p>
        </div>
      </div>
      <div
        class="col-12 pt-2 text-center p-1 bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 text-success">Variacion ${data["6"]["casa"]["variacion"]}%</p>
      </div>
      <div
        class="col-12 pb-2 text-center bg-light bg-gradient bg-opacity-50"
      >
        <p class="m-0 date-font text-muted">
          ACTUALIZADO 19/06/2022 18:00
        </p>
      </div>
    </div>
  </div>
  `;
  }
}

fetchear(); // FINALMENTE LLAMO LA FUNCION FETCHEAR PARA QUE SE EJECUTE EL CÓDIGO
