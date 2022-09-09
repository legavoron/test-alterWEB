let body = document.querySelector("body");

function addElement(place, elem) {
    place.appendChild(elem)
}

function createInput(id) {
    let input = document.createElement('input');
    input.type = 'number';

    return input
}

function createHeading(value) {
    let heading = document.createElement('h3');
    heading.innerHTML = value;
    return heading
}

let inputContainer = document.createElement('div');
inputContainer.classList.add('inputContainer');

let inputFirst = createInput('inputFirst');
let inputSecond = createInput('inputSecond');
let inputThird = createInput('inputThird');

let message = createHeading('Введите делитель');
let deviderFirst = createInput('deviderFirst');
let deviderSecond = createInput('deviderSecond');


let button = document.createElement('button');
button.innerHTML = 'Старт';
button.addEventListener('click', showInputsValue);

let valuesContainer = document.createElement('div');

addElement(body, inputContainer);
addElement(inputContainer, inputFirst);
addElement(inputContainer, inputSecond);
addElement(inputContainer, inputThird);
addElement(body, message);
addElement(body, deviderFirst);
addElement(body, deviderSecond);
addElement(body, button);
addElement(body, valuesContainer)


function showInputsValue() {
    valuesContainer.innerHTML = '';
    let headingFirst = inputFirst.value;
    let headingSecond = inputSecond.value;
    let headingThird = inputThird.value;

    let num1 = deviderFirst.value;
    let num2 = deviderSecond.value;

    let listValues = [headingFirst, headingSecond, headingThird];
    let values = listValues.map(value => {
        return checkValue(value, num1, num2);
        
    })

    if (num1 === num2) {
        let error = document.createElement('h2');
        error.style.color = 'red';
        error.innerHTML = 'Вы ввели одинаковые делители'
        addElement(valuesContainer, error)
    }

    if (num1 === '0' || num2 === '0') {
        let error = document.createElement('h2');
        error.style.color = 'red';
        error.innerHTML = 'На 0 делить нельзя, но это же Java Script, мы попытаемся)'
        addElement(valuesContainer, error)
    }
        
    values.forEach(value => {
        let heading = createHeading(value);
        addElement(valuesContainer, heading)
    })
}


function checkValue(value, num1, num2) {
    if (+value % num1 === 0 && value % num2 === 0) {
        return 'alterweb'
    }
    if (+value % num1 === 0) {
        return 'alter'
    }
    if (+value % num2 === 0) {
        return 'web'
    }
    return +value
}