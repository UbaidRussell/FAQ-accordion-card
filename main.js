const firstQuestion = document.getElementsByClassName('card-question')[0]
const firstAnswer = document.getElementsByClassName('card-answer')[0]
const secondQuestion = document.getElementsByClassName('card-question')[1]
const secondAnswer = document.getElementsByClassName('card-answer')[1]
const thirdQuestion = document.getElementsByClassName('card-question')[2]
const thirdAnswer = document.getElementsByClassName('card-answer')[2]
const fourthQuestion = document.getElementsByClassName('card-question')[3]
const fourthAnswer = document.getElementsByClassName('card-answer')[3]
const fifthQuestion = document.getElementsByClassName('card-question')[4]
const fifthAnswer = document.getElementsByClassName('card-answer')[4]


//This is the code for our first question
firstQuestion.addEventListener('click', function(){
    firstQuestion.style.marginBottom = '5px';
    firstAnswer.style.display = 'block';
    firstAnswer.style.marginBottom = '10px';
    firstQuestion.style.fontWeight = 'bold';

    //This code closes our first question when we click on it again
    this.addEventListener('click', function(){
        firstQuestion.style.marginBottom = '20px';
        firstAnswer.style.display = 'none';
        firstAnswer.style.marginBottom = '0px';
        firstQuestion.style.fontWeight = 'normal';
    })
})

secondQuestion.addEventListener('click', function(){
    secondQuestion.style.marginBottom = '5px';
    secondAnswer.style.display = 'block';
    secondAnswer.style.marginBottom = '10px';
    secondQuestion.style.fontWeight = 'bold';
})

thirdQuestion.addEventListener('click', function(){
    thirdQuestion.style.marginBottom = '5px';
    thirdAnswer.style.display = 'block';
    thirdAnswer.style.marginBottom = '10px';
    thirdQuestion.style.fontWeight = 'bold';
})

fourthQuestion.addEventListener('click', function(){
    fourthQuestion.style.marginBottom = '5px';
    fourthAnswer.style.display = 'block';
    fourthAnswer.style.marginBottom = '10px';
    fourthQuestion.style.fontWeight = 'bold';
})

fifthQuestion.addEventListener('click', function(){
    fifthQuestion.style.marginBottom = '5px';
    fifthAnswer.style.display = 'block';
    fifthAnswer.style.marginBottom = '10px';
    fifthQuestion.style.fontWeight = 'bold';
})