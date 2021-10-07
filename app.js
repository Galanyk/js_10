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

containerEl.addEventListener("click", deleteElement);
containerEl.addEventListener("click", changeColor);

function onClick(e) {
    // console.log(e.target.id)
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
    element.textContent = title;
    element.classList.add(classList);
    element.id = `item-container${Math.random()}`;
    containerEl.addEventListener("click", changeColor);
    containerEl.append(element);
}

function createElementButton(containerEl, tag, classList) {
    const buttonEl = document.createElement(tag);
    buttonEl.textContent = 'X';
    buttonEl.id = `button${Math.random()}`;
    containerEl.addEventListener("click", deleteElement);
    buttonEl.classList.add(classList);
    containerEl.append(buttonEl);
}

function deleteElement(e) {
    //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    const elements = containerEl.children;
    for (let i = 0; i < elements.length; i += 2) {
        if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
            removeElement(i, elements)
        }
    }
}

function removeElement(index, container) {
    let shift = 1;
    console.log("delete: " + index);
    console.log(container.length);
    container[index].parentNode.removeChild(container[index + shift])
    console.log(container.length);
    container[index].parentNode.removeChild(container[index])
    console.log(container.length);
}

// function changeColor(e) {
//     e.target.classList.toggle('item-container-active');

// }

function clearValue(element) {
    element.value = '';
}

// 41.5

function changeColor(e) {
    const elements = containerEl.children;
    for (i = 0; i < elements.length; i++) {
        //  console.log(elements[i].id);
        if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
            elements[i].classList.toggle('item-container-active');
        }
    }
}