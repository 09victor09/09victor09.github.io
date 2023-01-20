// Add an element with an id, classtype and elementtype to a parent element
// Returns the child element
function addElementToParent(parent, elementType, classType, elementId){
    var child = document.createElement(elementType);
    child.classList.add(classType);
    child.id = elementId;
    parent.appendChild(child);
    return child;
}

//Adds a remove button as a child to a parent element to remove the parent element
function addRemoveButton(parent){
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.addEventListener('click', function() {
        parent.remove();
    });
    parent.appendChild(button);
}