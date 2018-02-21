moment.locale('it');

function initializePage() {
    var date = moment();
    var userInfo = {};

    if (localStorage && localStorage.getItem('name')) {
        userInfo.name = localStorage.getItem('name');
        userInfo.lastAccess = localStorage.getItem('lastAccess');
        localStorage.setItem('lastAccess', date.format('LLLL'));
    } else {
        userInfo.name = 'Mario Rossi';
        localStorage.setItem('name', userInfo.name);
        userInfo.lastAccess = localStorage.lastAccess || 'Mai';
        localStorage.setItem('lastAccess' , date.format('LLLL'));
    }

    document.getElementById('nome-utente').innerText = userInfo.name;
    document.getElementById('ultimo-accesso').innerText = userInfo.lastAccess;
}

function miaFunzioneCallback() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(funzioneOk, funzioneErrore);
    } else {
        alert('La geolocalizzazione non è disponibile');
    }
}

function funzioneOk(position) {
    if (position && position.coords) {
        var weatherObj = generateWeatherObj(position);

        var mapProp = {
            center:new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
            zoom:16
        };
        
        var map = new google.maps.Map(document.getElementById('map'), mapProp);
        var marker = new google.maps.Marker({position: mapProp.center, map: map});
        var geocoder = new google.maps.Geocoder;

        geocoder.geocode({'location': {lat: position.coords.latitude, lng: position.coords.longitude}}, function(results, status) {
            if( results && results[0] ) {
                document.getElementById('address').innerText = results[0].formatted_address;
            }
        });


        document.getElementById('posizione').innerText = weatherObj.name;
        document.getElementById('weather-img').setAttribute('src', 'https://openweathermap.org/img/w/' + weatherObj.weather[0].icon + '.png');
        document.getElementById('temp').innerText = weatherObj.main.temp;
        document.getElementById('wind-speed').innerText = weatherObj.wind.speed;
        document.getElementById('wind-deg').innerText = weatherObj.wind.deg;
        document.getElementById('wind-speed').innerText = weatherObj.wind.speed;
        document.getElementById('pressure').innerText = weatherObj.main.pressure;
        document.getElementById('humidity').innerText = weatherObj.main.humidity;
        document.getElementById('cloudiness').innerText = weatherObj.weather[0].description;
        document.getElementById('sunrise').innerText = moment.unix(weatherObj.sys.sunrise).format('HH:MM');
        document.getElementById('sunset').innerText = moment.unix(weatherObj.sys.sunset).format('HH:MM');
        document.getElementById('long').innerText = Math.round(weatherObj.coord.longitude * 100) / 100;
        document.getElementById('lat').innerText = Math.round(weatherObj.coord.latitude * 100) / 100;
    }
}

function funzioneErrore(error) {
    alert(error.message);
}
