async function getDataFromUrl(url){
    const response = await fetch(url,{
        method: "get",
        mode: "no-cors",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        })
    }).catch((error) =>{
        alert(error);
    });
    return response.json();
}

async function addWeatherChart(location){

    var url = "https://6f63-2001-1c06-180b-b600-c6dd-83ad-209c-52e5.eu.ngrok.io/webserver/api/";

    const data = await getDataFromUrl(url)
    .catch((error) => {
        alert(error)
    });
    alert(data);

    // const response = await fetch(url, {
    //     method: "get",
    //     mode: "no-cors",
    //     headers: new Headers({
    //       "ngrok-skip-browser-warning": "69420",
    //     })
    // }).catch((error) =>{
    //     alert(error);
    // }).then((response) => response.json())
    // .then((data) => alert(data));


    // const data = await response.json();
    // alert(data);
        
    // time = [];
    // temperature_2m = [];

    // for(i=0; i< 24; i++){
    //     time.push(data.py_wierden.entry_date[i]);
    //     temperature_2m.push(data.py_wierden.temperature[i]);
    // }

    // alert(time);
    // alert(temperature_2m);

    // removeElement("div1");
    
    // addElement("div1", "canvas", location);
        
    // new Chart(document.getElementById(location),{
    //     type: 'line',
    //     data:{
    //         labels: time,
    //         datasets: [
    //             {
    //                 label: "Temperature",
    //                 data: temperature_2m
    //             }
    //         ]
    //     },
    //     options: {
    //         legend: { display: false },
    //         plugins:{
    //             title: {
    //                 display: true,
    //                 text: "TestLocation"
    //             }
    //         }
    //     }
    // });
    
    //response = await fetch(someURL);
    //console.log(response);
    //const data = await response.json();
    //console.log(response);
    //length = data.hourly.time.length;
    //console.log(response);

    
}