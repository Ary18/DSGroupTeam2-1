/*initializePage();*/

function initializePage() {
	if( 'geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition (function(pos) {
				var userInfo = readFromStorage();
				var weatherObj = generateWeatherObj(pos);

				console.log(userInfo);
				console.log(weatherObj);

				document.getElementById('nome-utente').innerText = userInfo.name;
				document.getElementById('ultimo-accesso').innerText = userInfo.lastAccess;
				document.getElementById('posizione').innerText = weatherObj.name;
				document.getElementById('weather-img').setAttribute('src', 'https://openweathermap.org/img/w/' + weatherObj.weather[0].icon + '.png');
				document.getElementById('temp').innerText = weatherObj.main.temp;
				document.getElementById('wind-speed').innerText = weatherObj.wind.speed;
				document.getElementById('wind-deg').innerText = weatherObj.wind.deg;
				document.getElementById('wind-speed').innerText = weatherObj.wind.speed;
				document.getElementById('pressure').innerText = weatherObj.pressure;
				document.getElementById('humidity').innerText = weatherObj.humidity;
				document.getElementById('cloudiness').innerText = weatherObj.weather[0].description;
				document.getElementById('sunrise').innerText = weatherObj.sys.sunrise;
				document.getElementById('sunset').innerText = weatherObj.sys.sunset;
				document.getElementById('long').innerText = weatherObj.coord.lon;
				document.getElementById('lat').innerText = weatherObj.coord.lat;

			},
			function(error) {
				alert(error.message);
			} );	
	} else {
		console.log('No navigator initiated');
	}
}

function readFromStorage() {
	var userInfo = {};

	if( localStorage ) {
		if( userInfo.name ) {
			userInfo.name = localStorage.name;
		} else {
			userInfo.name = 'Mario Rossi';
			localStorage.setItem( 'name', userInfo.name );
		}

		userInfo.lastAccess = localStorage.lastAccess || 'Mai';
		localStorage.setItem( 'lastAccess' , new Date() );
	}

	return userInfo;
}

function generateWeatherObj(pos) {
	var weatherObj = {};

	weatherObj.coord = {};
	weatherObj.coord.lon = pos.coords.longitude;
	weatherObj.coord.lat = pos.coords.latitude;

	weatherObj.sys = {};
	weatherObj.sys.country = 'JP';
	weatherObj.sys.sunrise = 1369769524;
	weatherObj.sys.sunset = 1369769524;

	weatherObj.weather = [];
	weatherObj.weather[0] = {};
	weatherObj.weather[0].id = 804;
	weatherObj.weather[0].main = 'Clouds';
	weatherObj.weather[0].description = 'Overcast clouds';
	weatherObj.weather[0].icon = '04n';

	weatherObj.main = {};
	weatherObj.main.temp = 289.5;
	weatherObj.main.temp = 89;
	weatherObj.main.temp = 1013;
	weatherObj.main.temp = 287.04;
	weatherObj.main.temp = 292.04;

	weatherObj.wind = {};
	weatherObj.wind.speed = 7.31;
	weatherObj.wind.deg = 187.002;

	weatherObj.rain = {};
	weatherObj.rain['3h'] = 0;

	weatherObj.clouds = {};
	weatherObj.clouds.all = 92;

	weatherObj.dt = 1369824698;
	weatherObj.id = 1851632;
	weatherObj.name = 'Shuzenji';
	weatherObj.cod = 200;

	return weatherObj;
}
