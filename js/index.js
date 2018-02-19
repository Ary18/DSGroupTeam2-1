function inizializzaPagina() {
	var map = new google.maps.Map(document.getElementById('mappa'), {
		center : {lat: 45.510471, lng: 9.232482},
		zoom : 12,
	});
	
	if( 'geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition (function(pos) {
			var marker = new google.maps.Marker({
				position: {lat: pos.coords.latitude, lng: pos.coords.longitude},
				map: map
			});
			map.setCenter({lat: lat, lng: lng});
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