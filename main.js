const player1 = {
    name: 'Bob',
    hp: 200,
    img: '',
    weapon: ['kick', 'punch', 'uppercut'],
    attack: function () {
        console.log(player1.name + 'Fight')
    }
}

const player2 = {
    name: 'Margo',
    hp: 160,
    img: '',
    weapon: ['kick', 'punch', 'uppercut'],
    attack: function () {
        console.log(player2.name + 'Fight')
    }
}

const createPlayer = function (class, name, hp) {
    const $div = document.createElement('div');
    $div.classList.add(player1);
    const $divProgress = document.createElement('div');
    const $divCharacter = document.createElement('div');
    const $divLife = document.createElement('div');
    const $divName = document.createElement('div');

    const $img = document.createElement('img');
    $img.src = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif";
    $divLife.style.width = '100%';
    $divName.innerText = name;
    $divProgress.appendChild($divLife);
    $divProgress.appendChild($divCharacter);
    $divCharacter.appendChild($img);
    $div.appendChild($divProgress);
    $div.appendChild($divCharacter);
    const $divArenas = document.querySelector('.arenas');
    $divArenas.appendChild($div);
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);

createPlayer('player1', player1);
createPlayer('player2', player1);