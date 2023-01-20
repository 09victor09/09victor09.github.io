// function to get the text of the selected option from an dropdown
function getDropDownOption(selectedID) {
  var obj = document.getElementById(selectedID);
  return obj.options[obj.selectedIndex].text;
}

// function to get the text of multiple selected options from a dropdown
function getMultipleDropDownOption(selectedID){
var selection = document.getElementById(selectedID);
const selectedValues = [].filter
    .call(selection.options, option=> option.selected)
    .map(option => option.text)
return selectedValues
}

// function to get the value of a slider
function getSliderOption(selectedID){
  var selection = document.getElementById(selectedID);
  return selection.value;
}