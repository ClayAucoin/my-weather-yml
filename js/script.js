
disableButton("button", true);
visibleElement("dataDisplay", false);
visibleElement("button", false);

onEvent("location", "change", function () {
    var location = getValue("location");

    if (location == "none") {
        disableButton("button", true);
        visibleElement("button", false);
    } else {
        disableButton("button", false);
        visibleElement("dataDisplay", true);
        visibleElement("button", false);
        visibleElement("selectCity", false);
    };

    if (location == "no") {
        // fetchWeather(here, -90.0751);
        fetchWeather(29.9547, -90.0751);
        cityState = "New Orleans, LA";
    } else if (location == "ny") {
        fetchWeather(40.7143, -74.006);
        cityState = "New York, New York";
    } else if (location == "sw") {
        fetchWeather(47.6062, -122.3321);
        cityState = "Seattle, Washington";
    }
});

let city;
let cityState;

/**
 * Enable or disable element.
 * @param {number} lat - The id of button.
 * @param {number} long - disable or enable.
 * 
 * @example
 * fetchWeather(29.9547, -90.0751);
 */

function fetchWeather(lat, long) {
        const requestOptions = { method: "GET", redirect: "follow" };

        fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + 
            "&longitude=" + long + "&current=apparent_temperature&wind_speed_unit"+ 
            "=mph&temperature_unit=fahrenheit&precipitation_unit=inch", requestOptions)
            .then((response) => response.json())
            .then(function (result) {
                console.log(result);
                city = result;
                updateWeatherCard();
            })
            .catch((error) => console.error(error));
}

function updateWeatherCard() {
    setText("cityState", cityState);
    setText("latitude", city.latitude);
    setText("longitude", city.longitude);
    setText("temp", city.current.apparent_temperature);
}


