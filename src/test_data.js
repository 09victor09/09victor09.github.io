
// function getData() {
//   fs.readFile("src/json_file.json", "utf8", (err, jsonString) => {
//     if (err) {
//       console.log("Error reading file from disk:", err);
//       return;
//     }
//     try {
//       const data = JSON.parse(jsonString);
//       console.log("Data py_wierden is:", data.py_wierden);
//     } catch (err) {
//       console.log("Error parsing JSON string:", err);
//     }
//   });
// }

getData();

function getData() {
  const fs = require("fs");

  fs.readFile("src/json_file.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    console.log("File data:", jsonString);
    
    const data = JSON.parse(jsonString);
    console.log("Data py_wierden:", data.py_wierden);
    length = data.py_wierden.entry_date.length;
    console.log(length);


    tijd = [];
    temperature = [];

    for (i = 0; i < length; i++) {
      tijd.push(data.py_wierden.entry_date[i]);
      temperature.push(data.py_wierden.temperature[i]);
    }

    console.log("temp:", temperature);
    console.log("time:", tijd);

    var ctx = document.getElementById('test_json');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    
  });
}