/* secret-messages.js */
const firstQuestion = document.getElementsByClassName('card-question')[0];
const firstAnswer = document.getElementsByClassName('card-answer')[0];

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
        firstQuestion.style.marginBottom = '5px';
        firstAnswer.style.display = 'block';
        firstAnswer.style.marginBottom = '10px';
        firstQuestion.style.fontWeight = 'bold';
    
    } else {
        firstQuestion.style.marginBottom = '20px';
        firstAnswer.style.display = 'none';
        firstAnswer.style.marginBottom = '0px';
        firstQuestion.style.fontWeight = 'normal';
    }
}

firstQuestion.addEventListener('click', () => {
  toggleHiddenElement(firstAnswer);
});
