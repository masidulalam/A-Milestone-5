function handleJustFunctionClick() {
    const p = document.getElementById('clicking-method');
    p.innerText = 'Set By Using Function';
}

//direct
document.getElementById('handle-event').addEventListener('click', function () {
    const p = document.getElementById('clicking-method');
    p.innerText = ' Set by Direct AddEventListener'
})

//direct addEventlistener indput feild
document.getElementById('update-name').addEventListener('click', function () {
    const inputName = document.getElementById('input-value');
    const p = document.getElementById('clicking-method');
    p.innerText = inputName.value;
    inputName.value = '';
})