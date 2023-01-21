// function to get a json response from a url
async function getDataFromUrlMetaData(url){
    const response = await fetch(url,{
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
          "Content-Type": "application/json",
        })
    }).catch((error) =>{
        alert(error);
    });
    return response.json();
}

// function to add a table containing the meta-data
async function addMetaDataTable(topDiv){

    //get data from the api
    var url = "https://1e08-2001-1c06-18ca-7400-da4c-b997-d193-ca3d.eu.ngrok.io/webserver/api";
    var data = await getDataFromUrlMetaData(url);

    var all_devices = [];
    for (device in data) {
        all_devices.push(device);
    }

    //creates a <table> element
    const tbl = document.createElement("table");

    //creates a <tbody> element and a <thead> element
    const tblBody = document.createElement("tbody");
    const tblHead = document.createElement("thead");

    //creates all the cells for the table-head
    for (var i = 0; i < 1; i++) {
        //creates a <tr> element, a table row
        const row = document.createElement("tr");

        //creates the <th> elements
        const cell = document.createElement("th");
        const cell1 = document.createElement("th");
        const cell2 = document.createElement("th");
        const cell3 = document.createElement("th");
        const cell4 = document.createElement("th");
        const cell5 = document.createElement("th");
        const cell6 = document.createElement("th");

        //create the text-nodes
        const cellText = document.createTextNode("Device");
        const cellText1 = document.createTextNode("Air time");
        const cellText2 = document.createTextNode("Gateway id");
        const cellText3 = document.createTextNode("Latitude");
        const cellText4 = document.createTextNode("Longitude");
        const cellText5 = document.createTextNode("Rssi");
        const cellText6 = document.createTextNode("Snr");

        //add the text-nodes to the corresponding cells
        cell.appendChild(cellText);
        cell1.appendChild(cellText1);
        cell2.appendChild(cellText2);
        cell3.appendChild(cellText3);
        cell4.appendChild(cellText4);
        cell5.appendChild(cellText5);
        cell6.appendChild(cellText6);

        //add all the cells to the corresponding row
        row.appendChild(cell);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);

        //add the row to the end of the table-head
        tblHead.appendChild(row);
    }

    //creates all the cells for the table-body
    for (var i = 0; i < all_devices.length; i++){
        //creates a <tr> element
        const row = document.createElement("tr");

        //add a device to the table
        // create a <td> element and a text-node, add the text-node to the <td> element 
        // and put the <td> element at the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(all_devices[i]);
        cell.appendChild(cellText);
        row.append(cell);

        //create the <td> elements, <td> defines the cells in the table
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");
        const cell4 = document.createElement("td");
        const cell5 = document.createElement("td");
        const cell6 = document.createElement("td");

        //create the text-nodes
        const cellText1 = document.createTextNode(data[all_devices[i]].meta_data.airtime);
        const cellText2 = document.createTextNode(data[all_devices[i]].meta_data.gateway_id);
        const cellText3 = document.createTextNode(data[all_devices[i]].meta_data.latitude);
        const cellText4 = document.createTextNode(data[all_devices[i]].meta_data.longitude);
        const cellText5 = document.createTextNode(data[all_devices[i]].meta_data.rssi);
        const cellText6 = document.createTextNode(data[all_devices[i]].meta_data.snr);

        //add the text-nodes to the corresponding cells
        cell1.appendChild(cellText1);
        cell2.appendChild(cellText2);
        cell3.appendChild(cellText3);
        cell4.appendChild(cellText4);
        cell5.appendChild(cellText5);
        cell6.appendChild(cellText6);

        //add all the cells to the corresponding row
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);

        //add the row to the end of the table-body
        tblBody.appendChild(row);
    }

    //put the <thead> in the <table>
    tbl.appendChild(tblHead);
    //put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    //sets the border attribute of the table to '1'
    tbl.setAttribute("border", "1");

    topDiv.appendChild(tbl);
    //adds a remove button
    addRemoveButton(tbl);
}
  