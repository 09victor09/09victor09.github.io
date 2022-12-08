// const fs = require("fs");

// fs.readFile("./json_file.json", "utf8", (err, jsonString) => {
//     if (err) {
//       console.log("File read failed:", err);
//       return;
//     }
//     console.log("File data:", jsonString);
  
// });

const fs = require("fs");
fs.readFile("./json_file.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const data = JSON.parse(jsonString);
    console.log("data is:", data.py_wierden.entry_date); // => "Customer address is: Infinity Loop Drive"
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});