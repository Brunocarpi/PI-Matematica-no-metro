function initMap() {

    var sacoma = { lat: -23.601364383757222, lng: -46.60244845631667 };
    var anaRosa = { lat: -23.58154649964919, lng: -46.63866074446629 };


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: sacoma
    });
    var sacomaMarker = new google.maps.Marker({
        position: sacoma,
        map: map,
        title: "Estação Sacomã",
          icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    });


    var anaRosaMarker = new google.maps.Marker({
        position: anaRosa,
        map: map,
        title: "Estação Ana Rosa",
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    });

    var service = new google.maps.places.PlacesService(map);
    var request = {
        location: sacoma,
        radius: '2000',
        type: ['subway_station']
    };

    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            let statusHTML = '<h3>Estações Encontradas:</h3>';
            results.forEach(station => {

                new google.maps.Marker({
                    position: station.geometry.location,
                    map: map,
                    title: station.name
                });

                statusHTML += `<p>Estação: ${station.name} - Endereço: ${station.vicinity}</p>`;
            });
            document.getElementById('status-metro').innerHTML = statusHTML;
        } else {
            document.getElementById('status-metro').innerHTML = 'Nenhuma estação encontrada.';
        }
    });
}