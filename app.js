// const btnEl = document.querySelector('#btn');
// const inputEl = document.querySelector('#input');
// const containerEl = document.querySelector('#container');

// btnEl.addEventListener("click", onClick);
// containerEl.addEventListener("click", changeColor);

// function onClick() {

//     const data = inputEl.value;
//     if (data) {
//         createElement(data, containerEl, 'div', 'item-container');
//         clearValue(inputEl);
//     } else {
//         clearValue(inputEl);
//     }
// }

// function createElement(title, containerEl, tag, classList) {
//     const element = document.createElement(tag);
//     const buttonEl = document.createElement('button');
//     element.textContent = title;
//     buttonEl.textContent = 'X';
//     buttonEl.addEventListener("click", deleteElement);

//     element.classList.add(classList);
//     element.appendChild(buttonEl)
//     containerEl.append(element);
// }

// function deleteElement(e) {
//     e.target.parentNode.parentNode.removeChild(e.target.parentNode);
// }

// function changeColor(e) {
//     e.target.classList.toggle('item-container-active')
// }

// function clearValue(element) {
//     element.value = '';
// }

const btnEl = document.querySelector('#btn');
const inputEl = document.querySelector('#input');
const containerEl = document.querySelector('#container');
btnEl.addEventListener("click", onClick);
containerEl.addEventListener("click", changeColor);

function onClick() {
    const data = inputEl.value.trim();
    createElementButton(containerEl, 'button', 'button');
    if (data) {
        createElement(data, containerEl, 'div', 'item-container');
        clearValue(inputEl);
    } else {
        clearValue(inputEl);
    }
}

function createElement(title, containerEl, tag, classList) {
    const element = document.createElement(tag);
    // const buttonEl = document.createElement('button');
    element.textContent = title;
    // buttonEl.textContent = 'X';
    // buttonEl.addEventListener("click", deleteElement);
    element.classList.add(classList);
    // element.appendChild(buttonEl)
    containerEl.append(element);
}

function createElementButton(containerEl, tag, classList) {
    const buttonEl = document.createElement(tag);
    buttonEl.textContent = 'X';
    buttonEl.addEventListener("click", deleteElement);
    buttonEl.classList.add(classList);
    containerEl.append(buttonEl);
}

function deleteElement(e) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}

function changeColor(e) {
    e.target.classList.toggle('item-container-active')
}

function clearValue(element) {
    element.value = '';
}