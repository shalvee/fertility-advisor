/*
function addExpense() {
	description = $("#expense-input-description").val();
	console.log(description);
	$("#try").append(description);
}
*/


/*
var map;
var geoJSON;
var request;
var gettingData = false;
var openWeatherMapKey = "86c4d9b63063039667c19c9e95f88459";

function initialize() {
    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(50, -50)
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    // Add interaction listeners to make weather requests
    google.maps.event.addListener(map, 'idle', checkIfDataRequested);
    // Sets up and populates the info window with details
    map.data.addListener('click', function (event) {
        infowindow.setContent(
            "<img src=" + event.feature.getProperty("icon") + ">" +
            "<br /><strong>" + event.feature.getProperty("city") + "</strong>" +
            "<br />" + event.feature.getProperty("temperature") + "&deg;C" +
            "<br />" + event.feature.getProperty("pressure") + "Pa" +
            "<br />" + event.feature.getProperty("weather")
        );
        infowindow.setOptions({
            position: {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            },
            pixelOffset: {
                width: 0,
                height: -15
            }
        });
        infowindow.open(map);

        document.getElementById("temp-div").innerHTML = event.feature.getProperty("temperature") + "&deg;C";
        document.getElementById("press-div").innerHTML = event.feature.getProperty("pressure") + "Pa";

    });
}
var checkIfDataRequested = function () {
    // Stop extra requests being sent
    while (gettingData === true) {
        request.abort();
        gettingData = false;
    }
    getCoords();
};
// Get the coordinates from the Map bounds
var getCoords = function () {
    var bounds = map.getBounds();
    var NE = bounds.getNorthEast();
    var SW = bounds.getSouthWest();
    getWeather(NE.lat(), NE.lng(), SW.lat(), SW.lng());
};
// Make the weather request
var getWeather = function (northLat, eastLng, southLat, westLng) {
    gettingData = true;
    var requestString = "http://api.openweathermap.org/data/2.5/box/city?bbox=" +
        westLng + "," + northLat + "," //left top
        +
        eastLng + "," + southLat + "," //right bottom
        +
        map.getZoom() +
        "&cluster=yes&format=json" +
        "&APPID=" + openWeatherMapKey;
    request = new XMLHttpRequest();
    request.onload = proccessResults;
    request.open("get", requestString, true);
    request.send();
};
// Take the JSON results and proccess them
var proccessResults = function () {
    console.log(this);
    var results = JSON.parse(this.responseText);
    if (results.list.length > 0) {
        resetData();
        for (var i = 0; i < results.list.length; i++) {
            geoJSON.features.push(jsonToGeoJson(results.list[i]));
        }
        drawIcons(geoJSON);
    }
};
var infowindow = new google.maps.InfoWindow();
// For each result that comes back, convert the data to geoJSON
var jsonToGeoJson = function (weatherItem) {
    var feature = {
        type: "Feature",
        properties: {
            city: weatherItem.name,
            weather: weatherItem.weather[0].main,
            temperature: weatherItem.main.temp,
            min: weatherItem.main.temp_min,
            max: weatherItem.main.temp_max,
            humidity: weatherItem.main.humidity,
            pressure: weatherItem.main.pressure,
            windSpeed: weatherItem.wind.speed,
            windDegrees: weatherItem.wind.deg,
            windGust: weatherItem.wind.gust,
            icon: "http://openweathermap.org/img/w/" +
                weatherItem.weather[0].icon + ".png",
            coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
        },
        geometry: {
            type: "Point",
            coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
        }
    };
    // Set the custom marker icon
    map.data.setStyle(function (feature) {
        return {
            icon: {
                url: feature.getProperty('icon'),
                anchor: new google.maps.Point(25, 25)
            }
        };
    });
    // returns object
    return feature;
};
// Add the markers to the map
var drawIcons = function (weather) {
    map.data.addGeoJson(geoJSON);
    // Set the flag to finished
    gettingData = false;
};
// Clear data layer and geoJSON
var resetData = function () {
    geoJSON = {
        type: "FeatureCollection",
        features: []
    };
    map.data.forEach(function (feature) {
        map.data.remove(feature);
    });
};
google.maps.event.addDomListener(window, 'load', initialize);






var map = new ol.Map({
	target: 'map-canvas',
	layers: [
        new ol.layer.Tile({
			source: new ol.source.OSM()
		})

    ],
	view: new ol.View({
		center: ol.proj.fromLonLat([37.41, 8.82]),
		zoom: 4
	})
});



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        map.setCenter(pos);
    }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}



//Center of map
var lonlat = new OpenLayers.LonLat(0, 0);

var map = new OpenLayers.Map("map-canvas");
// Create OSM overlays
var mapnik = new OpenLayers.Layer.OSM();

var layer_clouds = new OpenLayers.Layer.XYZ(
    "clouds",
    "http://${s}.tile.openweathermap.org/map/clouds/${z}/${x}/${y}.png", {
        isBaseLayer: false,
        opacity: 0.7,
        sphericalMercator: true
    }
);


map.addLayers([mapnik, layer_clouds]); 
*/




/* ====================== Random Wave Color ========================== 
	var wavy, color;
	$("#placeholder-for-map").click(function () {
	    $("#main-map").removeClass(wavy); //remove the previous class assignment to avoid conflict
	    var value = Math.random(); // Generates a random no
	    if (value < 0.5) {
	        color = "red"; // Assign color depending upon te random no
	    } else {
	        color = "green";
	    }
	    wavy = "waves-" + color; //variable to create string in form of materialize class syntax
	    $("#main-map").addClass(wavy); // add the new class
	});
	 ====================== *************************** ========================== */


