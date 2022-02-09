let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

//кнопка Заново
document.querySelector('#btnRetry').addEventListener('click', function () {
    if (gameRun == false) {
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
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
                `Я сдаюсь..\n\u{1F92F}`;

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
        if (minValue === maxValue || answerNumber == 0){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

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

