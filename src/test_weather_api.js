const axios = require('axios');

var url = 'https://api.open-meteo.com/v1/forecast?current_weather=true&timezone=Europe%2FBerlin&latitude=52.2&longitude=8.9';

var test;

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));


// fetch(url)
//   .then(response => {
//     return response.json();
//     })
//   .then(data => {
//     test = data;
//     return console.log(data); 
//   })

//   console.log(test);



async function fetchWeatherJSON() {
    const response = await fetch(url);

    // response.ok;     // => false
    // response.status; // => 404

    const data = await response.json();
    return data;
}

fetchWeatherJSON().then(data => { console.log(data); })


