let map;
let marker;
let center = {lat: -6.888463202449027, lng: -38.558930105104125};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
  });

  marker = new google.maps.Marker({
      map: map,
      position: center,
      draggable: true
  });

  map.addListener("click", (evt) => {
    addMarker(evt);
  });

  marker.addListener('position_changed', ()=>{
      map.setCenter(marker.position);
  });

}

function addMarker(evt){
    marker.setPosition(evt.latLng);
}

function salvar(){

    const obj = {
        nome: document.getElementById('nome').value,
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
    };

    fetch("http://localhost:3000/localizacao",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(response =>{alert('Salvo com sucesso')})
    .catch(error => alert('Falha ao salvar!'));    

}



function listar(){
  fetch("http://localhost:3000/pontos",{
      method: 'GET',
  })
  .then(resposta => resposta.json())
  .then(resposta2 => {
    for(let hemonucleo of resposta2){
      console.log(hemonucleo)
      const latitude = parseFloat(hemonucleo.geometria.coordinates[1])
      const longitude = parseFloat(hemonucleo.geometria.coordinates[0])
      marker = new google.maps.Marker({
        map: map,
        position: {
          lat: latitude,
          lng: longitude
        },
        draggable: true
      })
    }
  })
}
