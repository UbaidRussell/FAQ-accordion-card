const firstQuestion = document.getElementsByClassName('card-question')[0]
const firstAnswer = document.getElementsByClassName('card-answer')[0]



firstQuestion.addEventListener('click', function(){
    firstAnswer.style.display = 'block';
}) 