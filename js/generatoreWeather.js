/* exported  generateWeatherObj */
/* globals $ */

function generateWeatherObj(pos, callback) {
	'use strict';

	var url  = 'http://api.openweathermap.org/data/2.5/weather?' +
         		'lat='+pos.coords.latitude+'&' +
				'lon='+pos.coords.longitude+'&' +
				'units=metric&' +
				'lang=it&' +
        		'APPID=ee6b293d773f4fcd7e434f79bbc341f2';
	$.getJSON(url, function(data) {
		console.log(data);
		callback(data);
	});
}

/* exported oggetto */
var oggetto= {
	generaOggetto: generateWeatherObj
};