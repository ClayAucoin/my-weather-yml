console.log("script-orig.org");
// CODE FOR INDEX.HTML

// I want to have the data here put in HTML elements
var noWeather = {
    "latitude": 29.95653,
    "longitude": -90.07374,
    "generationtime_ms": 0.034809112548828125,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 10,
    "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "apparent_temperature": "°F"
    },
    "current": {
        "time": "2025-08-28T00:00",
        "interval": 900,
        "apparent_temperature": 91.6
    }
};

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

var swWeather = {
    "latitude": 47.595562,
    "longitude": -122.32443,
    "generationtime_ms": 0.03445148468017578,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 59,
    "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "apparent_temperature": "°F"
    },
    "current": {
        "time": "2025-08-28T00:45",
        "interval": 900,
        "apparent_temperature": 73.4
    }
};





disableButton("button", true);
// visibleElement("dataDisplay", false);
// visibleElement("button", false);

onEvent("location", "change", function () {
    if (getValue("location") == "none") {
        disableButton("button", true);
        // visibleElement("button", false);
    } else {
        disableButton("button", false);
        // visibleElement("dataDisplay", true);
        // visibleElement("button", false);
        // visibleElement("selectCity", false);
    };
});

onEvent("button", "click", function () {


    var location = getValue("location");
    var city;
    var cityState;

    console.log(location);

    if (location == "no") {
        city = noWeather;
        cityState = "New Orleans, LA";
    } else if (location == "ny") {
        city = nyWeather;
        cityState = "New York, New York";
    } else if (location == "sw") {
        city = swWeather;
        cityState = "Seattle, Washington";
    }

    console.log(city);

    var latitude = city.latitude;
    var longitute = city.longitude;
    var temp = city.current.apparent_temperature;

    setText("cityState", cityState);
    setText("latitude", latitude);
    setText("longitude", longitute);
    setText("temp", temp);
});





// this function will update the page with the current data
function updateWeatherCard() {
    setText("temp2", noWeather.current.apparent_temperature);
}





/**
 * Enable or disable element.
 * @param {string} id - The id of button.
 * @param {boolean} [status=false] - disable or enable.
 * 
 * @example
 * disableButton("ID", true);
 */
function disableButton(elementId, status) {
    const element = document.getElementById(elementId)
    if (status == true) {
        element.classList.add('disabled');
    } else {
        element.classList.remove('disabled');
    }
}

