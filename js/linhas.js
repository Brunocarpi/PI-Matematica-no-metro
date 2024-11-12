let map;
let directionsService;
let directionsRenderer;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: -23.5895, lng: -46.5913} 
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('directions-panel'));
}

function calcularRota() {
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;

    const request = {
        origin: origem,
        destination: destino,
        travelMode: 'TRANSIT', 
        transitOptions: {
            modes: ['SUBWAY'] 
        }
    };

    directionsService.route(request, function(result, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
        } else {
            alert('Não foi possível calcular a rota: ' + status);
        }
    });
}

window.onload = initMap;