function generateWeatherObj(pos) {
	'use strict';
	var weatherObj = {
		coord: {
			longitude: pos.coords.longitude,
			latitude: pos.coords.latitude
		},
		sys: {
			country: 'JP',
			sunrise: 1485763863,
			sunset: 1485726240
		},
		weather: [{
				id: 804,
				main: 'Clouds',
				description: 'Overcast clouds',
				icon: '04n'
			}
		],
		main: {
			temp: 285.514,
			pressure: 1013.75,
			humidity: 100,
			temp_min: 285.514, 
			temp_max: 285.514,
			sea_level: 1023.22,
			grnd_level: 1013.75
		},
		wind: {
			speed: 7.31,
			deg: 187.002
		},
		rain: {
			'3h': 0
		},
		clouds: {
			all: 92
		},
		dt: 1369824698,
		id: 1369824698,
		name: 'Milano',
		cod: 200
	};

	return weatherObj;
}