const btnEl = document.querySelector('#btn');
const inputEl = document.querySelector('#input');
const containerEl = document.querySelector('#container');
btnEl.addEventListener("click", onClick);

containerEl.addEventListener("click", deleteElement);
containerEl.addEventListener("click", changeColor);

function onClick() {
    const data = inputEl.value.trim();
    if (data) {
        createElementButton(containerEl, 'div', 'button');
        createElement(data, containerEl, 'div', 'item-container');
        clearValue(inputEl);
    } else {
        clearValue(inputEl);
        alert("Enter text")
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
    const elements = containerEl.children;
    for (let i = 0; i < elements.length; i += 2) {
        if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
            removeElement(i, elements)
        }
    }
}

function removeElement(index, container) {
    const shift = 1;
    container[index].parentNode.removeChild(container[index + shift]);
    container[index].parentNode.removeChild(container[index]);
}

function clearValue(element) {
    element.value = '';
}

function changeColor(e) {
    const elements = containerEl.children;
    for (i = 0; i < elements.length; i++) {
        if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
            elements[i].classList.toggle('item-container-active');
        }
    }
}