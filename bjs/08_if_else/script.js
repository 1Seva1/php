const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
const inputMinValue = document.querySelector('#inputMinValue');
const inputMaxValue = document.querySelector('#inputMaxValue');

let minValue = 0;
let maxValue = 100;
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

orderNumberField.innerText = orderNumber;
answerField.innerText = '';

function getminValue (){
    minValue = parseInt(inputMinValue.value);
    (minValue < -999) ? minValue = -999 : minValue;
    console.log(minValue);
    if (isNaN(minValue)) {
        minValue = 0;
    }
}
function getmaxValue (){
    maxValue = parseInt(inputMaxValue.value);
    (maxValue > 999) ? maxValue = 999 : maxValue;
    if (isNaN(maxValue)) {
        maxValue = 100;
    }
    document.querySelector('#alert').classList.remove('collapse');
    document.querySelector('#alert').innerHTML = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
    console.log(maxValue);
}
function start (){
    if (isNaN(minValue) || isNaN(maxValue)) {
        minValue = 0;
        maxValue = 100;
    }
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${numberStr()}?`;
    gameRun = true;
    console.log(answerNumber);
    document.querySelector('#minValue').classList.add('collapse');
    document.querySelector('#maxValue').classList.add('collapse');
    document.querySelector('#start').classList.add('collapse');
    document.querySelector('#alert').classList.add('collapse');
}

//кнопка Заново
document.querySelector('#btnRetry').addEventListener('click', function () {
    if (gameRun == false) {
        document.querySelector('#minValue').classList.remove('collapse');
        document.querySelector('#maxValue').classList.remove('collapse');
        document.querySelector('#start').classList.remove('collapse');
        //minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
        //maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        /*if (isNaN(minValue) || isNaN(maxValue)) {
            minValue = 0;
            maxValue = 100;
        }
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumber = 1;  
        orderNumberField.innerText = orderNumber;
        answerField.innerText = `Вы загадали число ${numberStr() }?`;
        gameRun = true;*/ 
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
                    answerPhrase = `Взможно, это число ${numberStr() }?`;
                    break;
                case 1:
                    answerPhrase = `Может, это число ${numberStr() }?`;
                    break;
                case 2:
                    answerPhrase = `Вы загадали число ${numberStr() }?`;
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
                    answerPhrase = `Взможно, это число ${numberStr() }?`;
                    break;
                case 1:
                    answerPhrase = `Может, это число ${numberStr() }?`;
                    break;
                case 2:
                    answerPhrase = `Вы загадали число ${numberStr() }?`;
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
//текстове представление числа
function numberStr () {
    let getNumber = '';
    let getOne = '';
    let getTen = '';
    let getHundred = '';
    if (Math.abs(answerNumber%1000) >= 100) {
        getHundred = Math.abs(answerNumber%1000-answerNumber%100);
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
        if (Math.abs(answerNumber%100) >= 20) {
            getTen = Math.abs(answerNumber%100 - answerNumber%10);
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
            getOne = Math.abs(answerNumber%10);
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
        } else if (Math.abs(answerNumber%100) > 10){
            getTen = Math.abs(answerNumber%100);
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
        } else {
            getOne = Math.abs(answerNumber%10);
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
                    getOne = 'деcять'
                    break;
                default:
                    getOne = '0'
                    break;
            }    
        }
    } else if (Math.abs(answerNumber%100) >= 20) {
        getTen = Math.abs(answerNumber%100 - answerNumber%10);
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
            getOne = Math.abs(answerNumber%10);
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
            } else if (Math.abs(answerNumber%100) > 10){
                getTen = Math.abs(answerNumber%100);
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
            } else {
                getOne = Math.abs(answerNumber%10);
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
                        getOne = 'деcять'
                        break;
                    default:
                        getOne = ''
                        break;
                    }     
                    }
    getNumber = getHundred + ' ' + getTen + ' '+getOne;
    if (getNumber.length > 20) {
        getNumber = answerNumber;
    }
    if (answerNumber == 0) {
        getNumber = '0';
    }
    if (answerNumber < 0) {
        getNumber = 'минус ' + getHundred + ' ' + getTen + ' '+getOne;
    } else {
        return getNumber;  
    }
return getNumber;    
}

