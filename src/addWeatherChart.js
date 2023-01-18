async function getDataFromUrl(url, hours, days){
    const response = await fetch(url,{
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
          "Content-Type": "application/json",
          "time-period":`${days}d${hours}h`
        })
    }).catch((error) =>{
        alert(error);
    });
    return response.json();
}

function getRandomString(){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = '';
    for (var i = 0; i < 6; i++) {
        result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
}

function stringToHexColor(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var color = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
}

function addData(chart, label, data) {
    chart.data.datasets.push({
        label: label,
        data: data,
        borderColor: stringToHexColor(label)
    })
    chart.update();
}

async function addWeatherChart(output_type, devices, hours, days, topDiv){

    var url = "https://fe85-2001-1c06-180b-b600-c6dd-83ad-209c-52e5.eu.ngrok.io/webserver/api/";

    var data = await getDataFromUrl(url, hours, days);

    console.log(data);

    time = [];

    for(i=0; i< data[devices[0]].entry_date.length; i++){
        time.push(data[devices[0]].entry_date[i]);
    }

    var chartDivId = getRandomString();
    var chartDiv = addElementToParent(topDiv, "div", "chart-grid-item", chartDivId);

    var canvasId = getRandomString();
    var canvasElement = addElementToParent(chartDiv, "canvas", "canvasClass", canvasId);

    addRemoveButton(chartDiv);
      
    var chart = new Chart(canvasElement,{
        type: 'line',
        data:{
            labels: time
        },
        options: {
            legend: { display: false },
            plugins:{
                title: {
                    display: true,
                    text: output_type
                }
            }
        }
    });

    for(var device of devices){
        addData(chart, device, data[device][output_type]);  
    }
}