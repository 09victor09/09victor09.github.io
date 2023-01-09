function addElement(parent, elementType, elementId){
    //var parent = document.getElementById(parentName);
    var child = document.createElement(elementType);
    child.id = elementId;
    parent.appendChild(child);
}

function removeElement(parent){
    //var parent = document.getElementById(parentName);
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}