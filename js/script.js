/*initializePage();*/

function initializePage() {
	if( 'geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition (function(pos) {
				var userInfo = readFromStorage();
				var weatherObj = generateWeatherObj();

				console.log(userInfo);
				console.log(weatherObj);

				var name = userInfo.name;
				var lastAccess = userInfo.lastAccess;
				var long = weatherObj.coord.lon;
				var lat = weatherObj.coord.lat;
				var country = weatherObj.sys.country;
				var sunrise = weatherObj.sys.sunrise;
				var sunset = weatherObj.sys.sunset;
				var weatherMain = weatherObj.weather[0].main;
				var weatherDescription = weatherObj.weather[0].description;
				var weatherIcon = weatherObj.weather[0].icon;
				var weatherTemp = weatherObj.main.temp;






				document.getElementById('nome-utente').innerText = name;
				document.getElementById('ultimo-accesso').innerText = lastAccess;




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

function generateWeatherObj() {
	var weatherObj = {};

	weatherObj.coord = {};
	weatherObj.coord.lon = 0;
	weatherObj.coord.lat = 0;

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
