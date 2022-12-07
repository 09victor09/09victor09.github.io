var url = '/* insert out url here */';

getData();

async function getData() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  length = data.hourly.time.length;
  console.log(length);

  time = [];
  temperature = [];

  for (i = 0; i < length; i++) {
    time.push(data.py_wierden.entry_date[i]);
    temperature.push(data.py_wierden.temperature[i]);
  }

  console.log("temp:", temperature);
  console.log("time:", time);

  var ctx = document.getElementById('test_json');

  new Chart(document.getElementById("weather-chart"),{
    type: 'line',
    data: {
      labels: time,
      datasets: [
      {
        label: "Temperature",
        data: temperature,
      },
      ],
    },
    options: {
      legend: { display: false },
      scales: { 
        y: {
          title: {
            display: 'true',
            text: 'yTitle'
          }
        },
        x: {
          title: {
            display: 'true',
            text: 'xTitle'
          }
        }
      },
      plugins: {
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
