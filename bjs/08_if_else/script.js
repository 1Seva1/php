let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (isNaN(minValue) || isNaN(maxValue)) {
    minValue = 0;
    maxValue = 100;
}
(minValue < -999) ? minValue = -999 : minValue;
(maxValue > 999) ? maxValue = 999 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
//let getHundred = String(answerNumber%1000);
//console.log(answerNumber%100-answerNumber%10);
let orderNumber = 1;
let gameRun = true;
let getNumber = '';
let getOne = '';
let getTen = '';
let getHundred = '';

if (answerNumber > 101) {
    getOne = answerNumber%10;
    switch (getOne) {
        case 1:
            getOne = 'один';
            break;
        case 2:
            getOne = 'два'
            break;
        case 3:
            getOne = 'три'
            break;
        case 4:
            getOne = 'четыре'
            break;
        case 5:
            getOne = 'пять'
            break;
        case 6:
            getOne = 'шесть'
            break;
        case 7:
            getOne = 'семь'
            break;
        case 8:
            getOne = 'восемь'
            break;
        case 9:
            getOne = 'девять'
            break;
        default:
            getOne = ''
            break;
    }
    getNumber = getOne;
    getTen = answerNumber%100 - answerNumber%10;
    switch (getTen) {
        case 20:
            getTen = 'двадцать';
            break;
        case 30:
            getTen = 'тридцать'
            break;
        case 40:
            getTen = 'сорок'
            break;
        case 50:
            getTen = 'пятьдесят'
            break;
        case 60:
            getTen = 'шестьдесят'
            break;
        case 70:
            getTen = 'семьдесят'
            break;
        case 80:
            getTen = 'восемьдесят'
            break;
        case 90:
            getTen = 'девяносто'
            break;
        default:
            getTen = '';
            break;
    }
    getNumber = getTen + ' '+getOne;
    getHundred = answerNumber%1000-answerNumber%100;
    switch (getHundred) {
        case 100:
            getHundred = 'сто';
            break;
        case 200:
            getHundred = 'двести'
            break;
        case 300:
            getHundred = 'триста'
            break;
        case 400:
            getHundred = 'четыреста'
            break;
        case 500:
            getHundred = 'пятьсот'
            break;
        case 600:
            getHundred = 'шестьсот'
            break;
        case 700:
            getHundred = 'семьсот'
            break;
        case 800:
            getHundred = 'восемьсот'
            break;
        case 900:
            getHundred = 'девятьсот'
            break;
        default:
            getHundred = '';
            break;
    }
    getNumber = getHundred + ' ' + getTen + ' '+getOne;
    if (getNumber.length > 20) {
        getNumber = answerNumber;
    } 
} else if (answerNumber > 20) {
    getOne = answerNumber%10;
    switch (getOne) {
        case 1:
            getOne = 'один';
            break;
        case 2:
            getOne = 'два'
            break;
        case 3:
            getOne = 'три'
            break;
        case 4:
            getOne = 'четыре'
            break;
        case 5:
            getOne = 'пять'
            break;
        case 6:
            getOne = 'шесть'
            break;
        case 7:
            getOne = 'семь'
            break;
        case 8:
            getOne = 'восемь'
            break;
        case 9:
            getOne = 'девять'
            break;
        default:
            getOne = ''
            break;
    }
    getNumber = getOne;
    getTen = answerNumber%100 - answerNumber%10;
    switch (getTen) {
        case 20:
            getTen = 'двадцать';
            break;
        case 30:
            getTen = 'тридцать'
            break;
        case 40:
            getTen = 'сорок'
            break;
        case 50:
            getTen = 'пятьдесят'
            break;
        case 60:
            getTen = 'шестьдесят'
            break;
        case 70:
            getTen = 'семьдесят'
            break;
        case 80:
            getTen = 'восемьдесят'
            break;
        case 90:
            getTen = 'девяносто'
            break;
        default:
            getTen = '';
            break;
    }
    getNumber = getTen + ' '+getOne;
} else if (answerNumber > 10) {
    getTen = answerNumber%100;
    switch (getTen) {
        case 11:
            getTen = 'одиннадцать';
            break;
        case 12:
            getTen = 'двенадцать'
            break;
        case 13:
            getTen = 'тринадцать'
            break;
        case 14:
            getTen = 'четырнадцать'
            break;
        case 15:
            getTen = 'пятнадцать'
            break;
        case 16:
            getTen = 'шестнадцать'
            break;
        case 17:
            getTen = 'семнадцать'
            break;
        case 18:
            getTen = 'восемнадцать'
            break;
        case 19:
            getTen = 'девятнадцать'
            break;
        case 20:
            getTen = 'двадцать'
            break;
        default:
            getTen = '';
            break;
    }
    getNumber = getTen;
} else if (answerNumber > 0) {
    getOne = answerNumber%10;
    switch (getOne) {
        case 1:
            getOne = 'один';
            break;
        case 2:
            getOne = 'два'
            break;
        case 3:
            getOne = 'три'
            break;
        case 4:
            getOne = 'четыре'
            break;
        case 5:
            getOne = 'пять'
            break;
        case 6:
            getOne = 'шесть'
            break;
        case 7:
            getOne = 'семь'
            break;
        case 8:
            getOne = 'восемь'
            break;
        case 9:
            getOne = 'девять'
            break;
        case 0:
            getOne = 'десять'
            break;
        default:
            getOne = ''
            break;
    }
    getNumber = getOne;
} else if (answerNumber == 0) {
    getNumber = '0';
} else {
   getNumber = 'минус'; 
}
console.log(getNumber);   

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

//кнопка Заново
document.querySelector('#btnRetry').addEventListener('click', function () {
    if (gameRun == false) {
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        if (isNaN(minValue) || isNaN(maxValue)) {
            minValue = 0;
            maxValue = 100;
        }
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumber = 1;  
        orderNumberField.innerText = orderNumber;
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        gameRun = true; 
    }
    
})

//кнопка Больше
document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь...\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Взможно, это число ${answerNumber }?`;
                    break;
                case 1:
                    answerPhrase = `Может, это число ${answerNumber }?`;
                    break;
                case 2:
                    answerPhrase = `Вы загадали число ${answerNumber }?`;
                default:
                    break;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

//кнопка Меньше
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue + maxValue == 1){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь...\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Взможно, это число ${answerNumber }?`;
                    break;
                case 1:
                    answerPhrase = `Может, это число ${answerNumber }?`;
                    break;
                case 2:
                    answerPhrase = `Вы загадали число ${answerNumber }?`;
                default:
                    break;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

//кнопка Верно
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        switch (phraseRandom) {
            case 0:
                answerPhrase = `Я всегда угадываю!\n\u{1F60E}`;
                break;
            case 1:
                answerPhrase = `Я знаю, я молодец!\n\u{1F60E}`;
                break;
            case 2:
                answerPhrase = `Дааа! Я хорош!\n\u{1F60E}`;
            default:
                break;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

