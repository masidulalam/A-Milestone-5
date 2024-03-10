function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//handle blue button click by setting function name
const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//handle event using direct function
const greenButton = document.getElementById('green-button');
greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green'
}
//or annonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green'
}

//handle byusing addevenListener
const purpleButton = document.getElementById('purple-button');
purpleButton.addEventListener('click', makePurple);
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


//adddEvenlISTENER short version
const hotpinkButton = document.getElementById('hotpink-button');
hotpinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

//addEventListener more shortcut
document.getElementById('chocolate-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'chocolate';
})