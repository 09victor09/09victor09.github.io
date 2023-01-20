// function to get a json response from a url with the days and hours as parameters
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

// function to turn the device names to a hex-color code
function stringToHexColor(labelName){
    switch(labelName){
        case "py_wierden":
            return "#FF0000";
            break;
        case "py_saxion":
            return "#00FF00";
            break;
        case "py_group3":
            return "#0000FF";
            break;
        case "lht_saxion":
            return "#00FFFF";
            break;
        case "lht_wierden":
            return "#FF00FF";
            break;
        case "lht_gronau":
            return "#FFFF00";
            break;
    }
}

// function to add new dataset to an existing chart-element and add a label to it
function addData(chart, label, data) {
    chart.data.datasets.push({
        label: label,
        data: data,
        borderColor: stringToHexColor(label)
    })
    chart.update();
}

// function to label a chart with an output_type
function yLabel(output_type) {
    var y_label;
    if (output_type === "Outside Temperature" || output_type === "Inside Temperature") {
        y_label = "Temperature [°C]"  
    }
    else if (output_type === "Pressure") {
        y_label = "Pressure [hPa]"
    }
    else if (output_type === "Light Intensity") {
        y_label = "Light intensity [Lux]"
    }
    else if (output_type === "Humidity") {
        y_label = "Humidity [rH%]"
    }
    else{
        y_label = ""
    }

    return y_label;
}

// function to turn a output_type label into something more human-readable
function outputType(output_type) {
    var type_output;
    if (output_type === "Outside Temperature") {
        type_output = "Outside_Temperature"  
    }
    else if (output_type === "Inside Temperature") {
        type_output = "Inside_Temperature"  
    }
    else if (output_type === "Pressure") {
        type_output = "pressure"
    }
    else if (output_type === "Light Intensity") {
        type_output = "light_intensity"
    }
    else if (output_type === "Humidity") {
        type_output = "Humidity"
    }
    else{
        type_output = ""
    }

    return type_output;
}

// function to add a weather chart with a certain output_type with one or multiple devices and a hour/day time range to a parent element
async function addWeatherChart(output_type, devices, hours, days, parentElement){

    //get data from the api
    var url = "https://1e08-2001-1c06-18ca-7400-da4c-b997-d193-ca3d.eu.ngrok.io/webserver/api";
    var data = await getDataFromUrl(url, hours, days);

    //fill in the time stamps of the chart with the first selected device
    time = [];
    for(i=0; i< data[devices[0]].entry_date.length; i++){
        time.push(data[devices[0]].entry_date[i]);
    }

    //make a unique div for the chart and remove button
    var chartDivId = getRandomString();
    var chartDiv = addElementToParent(parentElement, "div", "chart-grid-item", chartDivId);

    //add a chart-canvas element to the previous div
    var canvasId = getRandomString();
    var canvasElement = addElementToParent(chartDiv, "canvas", "canvasClass", canvasId);

    //add a remove button to the chart-div to remove the chart-div
    addRemoveButton(chartDiv);
    
    //add a chart to the chart-canvas element with only the timestamps
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
            },
            scales: {
                x: {
                    title: {
                        display: 'true',
                        text: 'time'
                    }
                },
                y: {
                    title: {
                        display: 'true',
                        text: yLabel(output_type)
                    }
                }
            }
        }
    });

    //add for each device the data to the previously created chart
    for(var device of devices){
        addData(chart, device, data[device][outputType(output_type)]);  
    }
}