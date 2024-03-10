function addStyle() {
    const players = document.getElementsByClassName('player');
    for (const player of players) {
        player.style.border = '1px solid red';
        player.style.borderRadius = '15px';
        player.style.margin = '10px';
        player.style.padding = '10px';
    }
}
addStyle()
function addPlayer() {
    const playerContainer = document.getElementById('players');
    const newPlayer = document.createElement('div')
    newPlayer.classList.add('player')
    newPlayer.innerHTML = `
    <h4 class="player-name">player-1</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus harum reprehenderit ut assumenda adipisci quasi sint nihil maiores placeat cum quam nesciunt, delectus illum veniam ab aut recusandae. Quidem, quo!</p>
    `
    playerContainer.appendChild(newPlayer)
    addStyle()
}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.parentNode.classList.contains('player')) {
        event.target.parentNode.style.backgroundColor = 'rgb(0,0,0,0.2)'
    }
    else if (event.target.classList.contains('player')) {
        event.target.style.backgroundColor = 'rgb(0,0,0,0.2)'
    }
})
