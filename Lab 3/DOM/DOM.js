let isImgToggled = false;
let isDarkMode = false;
let isColorChanged = false;
let isElementMoved = false;
function changeText() {
    const heading = document.querySelector('h1');
    if(heading.innerText === 'Welcome to DOM Manipulation'){
        heading.innerHTML = 'Text Changed! Welcome to the new DOM World!';
    }
    else{
        heading.innerHTML = 'Welcome to DOM Manipulation';
    }
}

function changeColor() {
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = isColorChanged ? 'black' : 'blue';
    }
    isColorChanged = !isColorChanged;
}

function moveElement() {
    const element = document.getElementsByClassName('dynamic-text')[0];
    element.style.position = 'relative';
    if (!isElementMoved) {
        element.style.left = '100px';
    } else {
        element.style.left = '0px';
    }
    isElementMoved = !isElementMoved;
}

function changeImage() {
    const image = document.getElementById('myImage');
    if (isImgToggled) {
        image.src = 'nature.jpg';
    } 
    else if(!isImgToggled){
        image.src = 'water.jpeg';
    }
    isImgToggled = !isImgToggled;
}

function addTextNode() {
    const parentDiv = document.getElementById('parent');
    const newText = document.createTextNode('This is a dynamically added text node.');
    parentDiv.appendChild(newText);
}

function deleteNode() {
    const parentDiv = document.getElementById('parent');
    if (parentDiv.lastChild) {
        parentDiv.removeChild(parentDiv.lastChild);
    }
}

function changeMode() {
    const modeButton = document.querySelector('#changeMode');
    const body = document.querySelector('body');

    if (isDarkMode) {
        body.classList.remove('dark');
        body.classList.add('light');
        isDarkMode = false;
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        isDarkMode = true;
    }
}