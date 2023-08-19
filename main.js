const firstQuestion = document.getElementsByClassName('card-question')[0]
const firstAnswer = document.getElementsByClassName('card-answer')[0]


//This is the code for our first question
firstQuestion.addEventListener('click', function(){
    firstQuestion.style.marginBottom = '5px';
    firstAnswer.style.display = 'block';
    firstAnswer.style.marginBottom = '10px';
    firstQuestion.style.fontWeight = 'bold';
}) 