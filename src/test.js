var url = "https://api.open-meteo.com/v1/forecast?latitude=52.2&longitude=8.9&hourly=temperature_2m"
var url2 = "https://api.open-meteo.com/v1/forecast" +
            "?latitude=52.2&longitude=8.9" +
            "&past_days=10" +
            "&hourly=temperature_2m, relativehumidity_2m, windspeed_10m"
getData();

async function getData(){
    const response = await fetch(url);
    console.log(response);
    //const data = await response.json();
    //console.log(data);
    //length = data.data.length;
    //console.log(length);
}