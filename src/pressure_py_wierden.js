getData();

async function getDataFromUrl(/*url*/){
    var url = "https://1ed9-2001-1c06-180b-b600-c6dd-83ad-209c-52e5.eu.ngrok.io/webserver/api/";
  
    const response = await fetch(url,{
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
          "Content-Type": "application/json",
          "time-period": "0d7h"
        })
    }).catch((error) =>{
        alert(error);
    });
    return response.json();
  }

async function getData() {
  var data = await getDataFromUrl();

  time = [];
  pressure_py_wierden = [];
  pressure_py_saxion = [];

  for(i = 0; i < data.py_wierden.entry_hour.length; i++){
      time.push(data.py_wierden.entry_hour[i]);
      pressure_py_wierden.push(data.py_wierden.pressure[i]);
      pressure_py_saxion.push(data.py_saxion.pressure[i]);
  }

  // this is used to create the graph
  new Chart(document.getElementById("pressure_py_wierden"),{
    type: 'line',
    data:{
        labels: time,
        datasets: [
            {
                label: "py_wierden",
                data: pressure_py_wierden,
                // tension: 1
            },
            {
                label: "py_saxion",
                data: pressure_py_saxion,
                // tension: 1
            },
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
                    text: 'time in hours'
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
