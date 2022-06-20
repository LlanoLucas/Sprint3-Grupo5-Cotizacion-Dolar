let contenido = document.querySelector(
  ".col-4 card bg-secondary bg-opacity-25 me-3"
);

function fetchear() {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((res) => res.json())
    .then((data) => {
      pintar(data);
    });
}
console.log(contenido);

// function pintar(data) {
//   contenido.innerHTML += `

//   <div class="row">
//             <div class="col-12 p-2 bg-success bg-opacity-50">
//               <p class="m-0 text-center text-white">DOLAR OFICIAL</p>
//             </div>
//             <div class="col-12 py-4 d-flex flex-row justify-content-around">
//               <div class="d-flex flex-column">
//                 <p class="m-0 text-bold title-buy-sell text-center">Compra</p>
//                 <p
//                   class="m-0 text-bold currency-font text-opacity-50 text-danger"
//                 >
//                   $205,04
//                 </p>
//               </div>
//               <div class="d-flex flex-column">
//                 <p class="m-0 title-buy-sell text-center">Venta</p>
//                 <p class="m-0 currency-font text-opacity-50 text-secondary">
//                   $200,10
//                 </p>
//               </div>
//             </div>
//             <div
//               class="col-12 pt-2 text-center p-1 bg-light bg-gradient bg-opacity-50"
//             >
//               <p class="m-0 text-danger">Variacion +0.2%</p>
//             </div>
//             <div
//               class="col-12 pb-2 text-center bg-light bg-gradient bg-opacity-50"
//             >
//               <p class="m-0 date-font text-muted">
//                 ACTUALIZADO 19/06/2022 18:00
//               </p>
//             </div>
//           </div>

//   `;
// }

// fetchear();
