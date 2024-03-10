
function addPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    addPlayerStyle(player);
    // player.addEventListener('click', function (event) {
    //     event.target.style.backgroundColor = 'red'
    // })
}
function addPlayer() {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div')
    player.classList.add('player')
    player.innerHTML = `
    <h4 class="player-name">player-1</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus harum reprehenderit ut assumenda adipisci quasi sint nihil maiores placeat cum quam nesciunt, delectus illum veniam ab aut recusandae. Quidem, quo!</p>
    `
    addPlayerStyle(player)
    playerContainer.appendChild(player)

    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'red'
    // })

}
document.getElementById('players').addEventListener('click', function (event) {
    console.log(event.target.tagName.toLowerCase())
    // if (event.target.parentNode.classList.contains('player')) {

    //     event.target.parentNode.style.backgroundColor = 'red'
    // }
    // else if (event.target.classList.contains('player')) {
    //     event.target.style.backgroundColor = 'red'
    // }
    if (event.target.tagName.toLowerCase() == 'div') {

        event.target.style.backgroundColor = 'yellow'
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow'
    }
})
//event bubble in javascript