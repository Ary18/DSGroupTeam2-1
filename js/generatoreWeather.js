function generateWeatherObj(pos) {
	var weatherObj = {};
	weatherObj.coord = {};
	weatherObj.coord.longitude = pos.coords.longitude;
	weatherObj.coord.latitude = pos.coords.latitude;

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
	weatherObj.name = 'Milano';
	weatherObj.cod = 200;

	return weatherObj;
}