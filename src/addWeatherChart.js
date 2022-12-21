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

async function addWeatherChart(output_type, devices){

    var url = "https://6bd4-2001-1c06-180b-b600-c6dd-83ad-209c-52e5.eu.ngrok.io/webserver/api/";

    var data = await getDataFromUrl(url);

    console.log(data)

    time = [];
    temperature_2m = [];

    for(i=0; i< data[devices[0]].entry_hour.length; i++){
        time.push(data[devices[0]].entry_hour[i]);
        temperature_2m.push(data[devices[0]][output_type][i]);
    }

    removeElement("div1");
    
    addElement("div1", "canvas", location);
        
    new Chart(document.getElementById(location),{
        type: 'line',
        data:{
            labels: time,
            datasets: [
                {
                    label: output_type,
                    data: temperature_2m
                }
            ]
        },
        options: {
            legend: { display: false },
            plugins:{
                title: {
                    display: true,
                    text: devices[0]
                }
            }
        }
    });
    
}