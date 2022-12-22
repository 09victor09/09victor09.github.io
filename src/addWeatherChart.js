async function getDataFromUrl(url){
    const response = await fetch(url,{
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
          "Content-Type": "application/json"
        })
    }).catch((error) =>{
        alert(error);
    });
    return response.json();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addData(chart, label, data) {
    chart.data.datasets.push({
        label: label,
        data: data,
        borderColor: getRandomColor()
    })
    chart.update();
}

async function addWeatherChart(output_type, devices){

    var url = "https://1ed9-2001-1c06-180b-b600-c6dd-83ad-209c-52e5.eu.ngrok.io/webserver/api/";

    var data = await getDataFromUrl(url);

    time = [];

    for(i=0; i< data[devices[0]].entry_hour.length; i++){
        time.push(data[devices[0]].entry_hour[i]);
    }

    removeElement("div1");
    
    addElement("div1", "canvas", location);

    var ctx = document.getElementById(location);
        
    var chart = new Chart(ctx,{
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