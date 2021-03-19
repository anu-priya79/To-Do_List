const form = document.querySelector('form');
const input = document.querySelector('input');
const addButton = document.querySelector('#addToDo');
const toDo = document.querySelector('#toDo');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newToDoIn = form.elements.inputText;
    if(newToDoIn.value === ""){
        alert("Empty input!!!!!!")
    }else{
        addToDo(newToDoIn.value);
        newToDoIn.value = "";
    }
})

const addToDo = (NewToDoIn) => {
    const p = document.createElement('p');
    const button = document.createElement('button');
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    p.innerHTML = NewToDoIn;
    button.innerHTML = "Remove";
    p.append(button);
    p.insertAdjacentElement('afterbegin', checkbox)
    toDo.insertAdjacentElement('afterbegin', p);
}

toDo.addEventListener('click', function(e) {
    if(e.target.nodeName === 'BUTTON'){
        e.target.parentNode.remove();
    }
    console.log(e);
})
toDo.addEventListener('change', function(e) {
    if(e.target.nodeName === 'INPUT'){
        e.target.parentNode.style.backgroundColor = "green";
    }
})