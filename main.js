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

const createPlayer = function (playerClass, name, hp) {
    const $div = document.createElement('div');
    $div.classList.add(playerClass);
    const $divProgress = document.createElement('div');
    $divProgress.classList.add('progressbar');
    const $divCharacter = document.createElement('div');
    $divCharacter.classList.add('character');
    const $divLife = document.createElement('div');
     $divCharacter.classList.add('life');
    const $divName = document.createElement('div');
     $divName.classList.add('name');

    const $img = document.createElement('img');
    $img.src = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif";
    $divLife.style.width = hp + '%';
    $divName.innerText = name;
    $divProgress.appendChild($divLife);
    $divProgress.appendChild($divCharacter);
    $divCharacter.appendChild($img);
    $div.appendChild($divProgress);
    $div.appendChild($divCharacter);
    const $divArenas = document.querySelector('.arenas');
    $divArenas.appendChild($div);
}
console.log(document);

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'Malina', 80);

// createPlayer('player1', player1);
// createPlayer('player2', player2);