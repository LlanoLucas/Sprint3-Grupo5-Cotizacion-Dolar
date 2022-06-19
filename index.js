let dolares = [];

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
.then(response => response.json().then( resp => createDollarsCards(resp)))
.catch(err => console.error(err));


//TO DO: ACA TIENEN QUE CREAR LOS ELEMENTOS O ASIGNARLE LA DATA A DONDE QUIERAN

function createDollarsCards(data) {
    dolares = data;
}