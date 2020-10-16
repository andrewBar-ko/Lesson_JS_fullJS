'use strict';

let userNum;

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function (randomNum) {
    
    // Рандомное число
    const getRandomNum = function() {
        randomNum = Math.floor(Math.random() * 101);  // Загаданое случайное число от 1 до 100
        

        // Введенное число userNum
        const getUserNum = function(userNum) {
            userNum = prompt('Угадай число от 1 до 100'); 

            if (userNum === null) {
                alert('Игра окончена');
                return;
            }else if (!isNumber(userNum)) {
                return(alert('Введите число!'));
            } else if (userNum > randomNum) {                      
                return(confirm('Загаданное число меньше\nПопробуй снова')), 
                getUserNum(userNum);
            } else if (userNum < randomNum) {                      
                return(confirm('Загаданное число больше\nПопробуй снова')),
                getUserNum(userNum);
            } else if (userNum !== randomNum) {
                return(alert('Поздравляю, Вы угадали!!!'));  
            } else {
                alert('Игра окончена');
                getUserNum(userNum);
            }
               
        };
        getUserNum(userNum);
    };
    getRandomNum();
};

start();

