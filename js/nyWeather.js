// I want to have the data here put in HTML elements


var nyWeather = {
    "latitude": 40.710335,
    "longitude": -73.99309,
    "generationtime_ms": 0.028133392333984375,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 51,
    "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "apparent_temperature": "°F"
    },
    "current": {
        "time": "2025-08-28T00:15",
        "interval": 900,
        "apparent_temperature": 64.6
    }
};


var nyLatitude = nyWeather.latitude;
var nyLongitute = nyWeather.longitude;
var nyTemp = nyWeather.current.apparent_temperature;

setText("nylatitude", nyLatitude);
setText("nylongitude", nyLongitute);
setText("nytemp", nyTemp);





