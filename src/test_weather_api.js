// var url = 'https://api.open-meteo.com/v1/forecast?current_weather=true&timezone=Europe%2FBerlin&latitude=52.2&longitude=8.9';
// var url2 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
var url3 = 'https://api.open-meteo.com/v1/forecast?latitude=52.2&longitude=8.9&hourly=temperature_2m';

getData();

async function getData(){
    const response = await fetch(url3);
    console.log(response);
    const data = await response.json();
    console.log(data);
    length = data.hourly.time.length;
    console.log(length);

    time = [];
    temperature_2m = [];

    for(i=0; i< length; i++){
        time.push(data.hourly.time[i]);
        temperature_2m.push(data.hourly.temperature_2m[i]);
    }

    new Chart(document.getElementById("line-chart"),{
        type: 'line',
        data:{
            labels: time,
            datasets: [
                {
                    label: "Temperature",
                    data: temperature_2m
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Weather'
            }
        }
    });
}






// getData();

// async function getData() {
//     const response = await fetch(url2);
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//     length = data.data.length;
//     console.log(length);

//     labels = [];
//     values = [];
//     for (i = 0; i < length; i++) {
//         labels.push(data.data[i].Year);
//         values.push(data.data[i].Population);
//     }

//     new Chart(document.getElementById("bar-chart"), {
//         type: 'bar',
//         data: {
//             labels: labels,
//             datasets: [
//                 {
//                     label: "Population (millions)",
//                     backgroundColor: ["#3e95cd",
//                                       "#8e5ea2", 
//                                       "#3cba9f", 
//                                       "#e8c3b9", 
//                                       "#c45850",
//                                       "#CD5C5C", 
//                                       "#40E0D0"],
//                     data: values
//                 }
//             ]
//         },
//         options: {
//             legend: { display: false },
//             title: {
//                 display: true,
//                 text: 'U.S population'
//             }
//         }
//     });
// }

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


// async function fetchWeatherJSON() {
//     const response = await fetch(url);

//     if (!response.ok) {
//         throw new Error('HTTP error! status: ${response.status}');
//     }
//     const data = await response.json(); // Extracting data as a JSON Object from the response
//     return data;
// }

// fetchWeatherJSON().then(data => { console.log(data); })


