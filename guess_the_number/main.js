'use strict';

let userNum;

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = () => {
    let randomNum = Math.floor(Math.random() * 101);
    
    let carent = 10;
    const game = () => {
        carent--;
        if (carent < 0) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                start();
            } else {
                alert('До свидания');
                return;
            }
        } else {
            const num = prompt('"Угадай число от 1 до 100" (Для выхода оставьте строку пустой)');
            if (num === null) {
                alert('До свидания');
                return;
            }
            if (isNumber(num)) {
                const userNum = +num;
                if (userNum > randomNum) {
                    alert(`Загаданное число меньше, осталось попыток: ${carent}`);
                    game();
                } else if (userNum < randomNum) {
                    alert(`Загаданное число больше, осталось попыток: ${carent}`);
                    game();
                } else {
                    if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                        start();
                    } else {
                        alert('До свидания');
                        return;
                    }
                }
            } else {
                alert('Введите число');
                game();
            }
        }
    };
    console.log(game);
    game();
};

start();