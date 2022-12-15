function getDropDownOption(option) {
    var obj = document.getElementById(option);
    return obj.options[obj.selectedIndex].text;
  }