getData();

async function getData(){
    var url_enschede = `https://api.open-meteo.com/v1/forecast?latitude=52.2215372&longitude=6.8936619&hourly=temperature_2m`;
    var url_wierden = `https://api.open-meteo.com/v1/forecast?latitude=52.3582599&longitude=6.593873&hourly=temperature_2m`;
    var url_gronau =  `https://api.open-meteo.com/v1/forecast?latitude=52.184120&longitude=7.028936&hourly=temperature_2m`;

    const response_enschede = await fetch(url_enschede);
    const data_enschede = await response_enschede.json();

    const response_wierden = await fetch(url_wierden);
    const data_wierden = await response_wierden.json();

    const response_gronau = await fetch(url_gronau);
    const data_gronau = await response_gronau.json();

    time = [];
    temp_enschede = [];
    temp_wierden = [];
    temp_gronau = [];

    for(i = 0; i < 24; i++){
        time.push(data_enschede.hourly.time[i]);
        temp_enschede.push(data_enschede.hourly.temperature_2m[i]);
        temp_wierden.push(data_wierden.hourly.temperature_2m[i]);
        temp_gronau.push(data_gronau.hourly.temperature_2m[i]);
    }

    console.log(time);

    new Chart(document.getElementById("line-chart"),{
        type: 'line',
        data:{
            labels: time,
            datasets: [
                {
                    label: "temp_enschede",
                    data: temp_enschede
                },
                {
                    label: "temp_wierden",
                    data: temp_wierden
                },
                {
                    label: "temp_gronau",
                    data: temp_gronau,
                }
            ]
        },
        options: {
            legend: { display: false },
            scales: {
                y: {
                    title: {
                        display: 'true',
                        text: 'temp in degrees Celsius'
                    }
                },
                x: {
                    title: {
                        display: 'true',
                        text: 'time (needs better title)'
                    }
                }
            },
            plugins:{
                title: {
                    display: true,
                    text: 'Temperature',
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                }
            }
        }
    });
}