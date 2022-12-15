function getDropDownOption() {
    var obj = document.getElementById("mySelect");
    return obj.options[obj.selectedIndex].text;
  }