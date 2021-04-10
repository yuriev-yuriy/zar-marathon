const $divArenas = document.querySelector('.arenas');
const $randomBtn = document.querySelector('.button');
const player1 = {
    player: 1,
    name: 'Bob',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['kick', 'punch', 'uppercut'],
    attack: function (name) {
        console.log(name + 'Fight')
    }
}

const player2 = {
    player: 2,
    name: 'Margo',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['kick', 'punch', 'uppercut'],
    attack: function (name) {
        console.log(name + 'Fight')
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

const createPlayer = function ( player) {
    const $player = createElement('div', 'player'+player.player);
    const $progress = createElement('div', 'progressbar');
    const $divCharacter = createElement('div', 'character');
    const $divLife = createElement('div', 'life');
    const $divName = createElement('div', 'name');
    const $img = createElement('img');

    $divLife.style.width = player.hp + '%';
    $divName.innerText = player.name;
    $img.src = player.img;
    $progress.appendChild($divLife);
    $progress.appendChild($divName);
    $divCharacter.appendChild($img);
    $player.appendChild($progress);
    $player.appendChild($divCharacter);
    
    return $player;
}

function changeHP(player) {
    const $divLife = document.querySelector('.player' + player.player + ' .life');
    if (player.hp <= 0) {
        player.hp = 0;
        $randomBtn.disabled = true
    } else {
        player.hp -= Math.ceil(Math.random()*10);
    }
    $divLife.style.width = player.hp + '%';
    console.log(player.hp)

    if (player.hp < 0) {
        
        $divArenas.appendChild(playerWins('Bob'));
    }
}

function playerWins(name) {
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = name + ' Lose';

    return $winTitle;
}

$randomBtn.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
})

// createPlayer('player1', 'SCORPION', 50);
// createPlayer('player2', 'Malina', 80);

$divArenas.appendChild(createPlayer(player1));
$divArenas.appendChild(createPlayer(player2));