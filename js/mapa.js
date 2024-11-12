function initMap() {
    var sacoma = { lat: -23.60158081719333, lng: -46.60292882125362 };
    var anaRosa = { lat: -23.58154649964919, lng: -46.63866074446629 };
    var santosImigrantes = { lat: -23.59588908002157, lng: -46.620526117410165 };
    var altoIpiranga = {lat: -23.601974957945174, lng: -46.61234708846078};
    var tamanduatei = { lat: -23.593070068986112, lng: -46.58969363152082};

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

    var santosImigrantesMarker = new google.maps.Marker({
        position: santosImigrantes,
        map: map,
        title: "Estação Santos-Imigrantes",
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    });

    var altoIpirangaMarker = new google.maps.Marker({
        position: altoIpiranga,
        map: map,
        title: "Estação Alto do Ipiranga",
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    });

    var tamanduateiMarker = new google.maps.Marker({
        position: tamanduatei,
        map: map,
        title: "Estação Tamanduateí",
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    });


    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            let statusHTML = '<h3>Estações Próximas Encontradas:</h3>';

            results.forEach(station => {
                if (station.name !== "Estação Tamanduateí" && station.name !== "Estação Santos-Imigrantes") {
                    new google.maps.Marker({
                        position: station.geometry.location,
                        map: map,
                        title: station.name
                    });
                    statusHTML += `<p>Estação: ${station.name} - Endereço: ${station.vicinity}</p>`;
                }
            });

        }
    });
}
