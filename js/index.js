function inizializzaPagina() {
	var map = new google.maps.Map(document.getElementById('mappa'), {
		center : {lat: 45.510471, lng: 9.232482},
		zoom : 12,
	});
	var centerMap = function(lat, lng) {
		lat = parseFloat(lat);
		lng = parseFloat(lng);
		var marker = new google.maps.Marker({
			position: {lat: lat, lng: lng},
			map: map
		});
		map.setCenter({lat: lat, lng: lng});
	}

	if( 'geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition (function(pos) {
			localStorage.setItem('lat', pos.coords.latitude);
			localStorage.setItem('lon', pos.coords.longitude);
			
			centerMap(pos.coords.latitude, pos.coords.longitude);
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
		userInfo.date = localStorage.lastAccess || 'Mai';
		userInfo.lastAccess = lastAccess || 'Mai';

		localStorage.lastAccess = new Date();
	}

	return userInfo;
}