/* secret-messages.js */
const firstQuestion = document.getElementsByClassName('card-question')[0];
const firstAnswer = document.getElementsByClassName('card-answer')[0];
const secondQuestion = document.getElementsByClassName('card-question')[1];
const secondAnswer = document.getElementsByClassName('card-answer')[1];
const thirdQuestion = document.getElementsByClassName('card-question')[2];
const thirdAnswer = document.getElementsByClassName('card-answer')[2];


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

const toggleHiddenElement2 = (domElement) => {
    if (domElement.style.display === 'none') {
        secondQuestion.style.marginBottom = '5px';
        secondAnswer.style.display = 'block';
        secondAnswer.style.marginBottom = '10px';
        secondQuestion.style.fontWeight = 'bold';
    
    } else {
        secondQuestion.style.marginBottom = '20px';
        secondAnswer.style.display = 'none';
        secondAnswer.style.marginBottom = '0px';
        secondQuestion.style.fontWeight = 'normal';
    }
}



const toggleHiddenElement3 = (domElement) => {
    if (domElement.style.display === 'none') {
       thirdQuestion.style.marginBottom = '5px';
        thirdAnswer.style.display = 'block';
        thirdAnswer.style.marginBottom = '10px';
        thirdQuestion.style.fontWeight = 'bold';
    
    } else {
        thirdQuestion.style.marginBottom = '20px';
        thirdAnswer.style.display = 'none';
        thirdAnswer.style.marginBottom = '0px';
        thirdQuestion.style.fontWeight = 'normal';
    }
}






firstQuestion.addEventListener('click', () => {
  toggleHiddenElement(firstAnswer);
});

secondQuestion.addEventListener('click', () => {
    toggleHiddenElement2(secondAnswer);
});


thirdQuestion.addEventListener('click', () => {
    toggleHiddenElement3(thirdAnswer);
} );