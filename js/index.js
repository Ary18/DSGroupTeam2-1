inizializzaPagina();

function inizializzaPagina() {
	if( 'geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition (function(pos) {
			var userInfo = readFromStorage();
			var weatherObj = generateWeatherObj();

			},
			function(error) {
				alert(error.message);
			} );	
	} else {
		console.log('No navigator initiated');
	}

	console.log( readFromStorage() );
	console.log( generateweatherObj() );
}

function readFromStorage() {
	var userInfo = {};

	if( localStorage ) {
		userInfo.name = localStorage.name || 'Mario Rossi';
		userInfo.lastAccess = localStorage.lastAccess || 'Mai';

		localStorage.lastAccess = new Date();
	}

	return userInfo;
}

function generateweatherObj() {
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
