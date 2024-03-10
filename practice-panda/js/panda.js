const headings = document.getElementsByClassName('section-heading');
for (const heading of headings) {
    heading.style.color = 'red'
}
document.getElementById('backpack').style.backgroundColor = 'pink';

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

function makeSent() {
    document.getElementById('footer-btn').innerText = 'Sent'
}

const buttons = document.getElementsByClassName('btn');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target)
    })
}

document.getElementById('email-field').addEventListener('keyup', function (event) {
    const footerBtn = document.getElementById('footer-btn');
    if (event.target.value == 'send') {
        footerBtn.removeAttribute('disabled')
    }
    else {
        footerBtn.setAttribute('disabled', true)
    }
})

function changeBgm() {
    document.getElementById('footer-area').style.backgroundColor = 'green'
}
function revertBgm() {
    document.getElementById('footer-area').classList.add('pink-bg')
}
function changeImage() {
    document.getElementById('first-image').src = './images/shoes/shoe-2.png'
}
function revertImage() {
    document.getElementById('first-image').src = './images/shoes/shoe-1.png'
}