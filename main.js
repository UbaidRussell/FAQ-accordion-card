const firstQuestion = document.getElementsByClassName('card-question')[0]
const firstAnswer = document.getElementsByClassName('card-answer')[0]
const secondQuestion = document.getElementsByClassName('card-question')[1]
const secondAnswer = document.getElementsByClassName('card-answer')[1]

//This is the code for our first question
firstQuestion.addEventListener('click', function(){
    firstQuestion.style.marginBottom = '5px';
    firstAnswer.style.display = 'block';
    firstAnswer.style.marginBottom = '10px';
    firstQuestion.style.fontWeight = 'bold';
}) 
secondQuestion.addEventListener('click', function(){
    secondQuestion.style.marginBottom = '5px';
    secondAnswer.style.display = 'block';
    secondAnswer.style.marginBottom = '10px';
    secondQuestion.style.fontWeight = 'bold';
})

//Work in progress for our second click on the first question to make it disappear after the first click if clicked again
/* firstQuestion.addEventListener('dblclick', function(){
    firstQuestion.style.marginBottom = '0px';
    firstAnswer.style.display = 'none';
    firstAnswer.style.marginBottom = '0px';
    firstQuestion.style.fontWeight = 'normal';
}) */