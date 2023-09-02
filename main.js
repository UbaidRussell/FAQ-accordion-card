/* secret-messages.js */
const firstQuestion = document.getElementsByClassName('card-question')[0];
const firstAnswer = document.getElementsByClassName('card-answer')[0];
const secondQuestion = document.getElementsByClassName('card-question')[1];
const secondAnswer = document.getElementsByClassName('card-answer')[1];
const thirdQuestion = document.getElementsByClassName('card-question')[2];
const thirdAnswer = document.getElementsByClassName('card-answer')[2];
const fourthQuestion = document.getElementsByClassName('card-question')[3];
const fourthAnswer = document.getElementsByClassName('card-answer')[3];
const fifthQuestion = document.getElementsByClassName('card-question')[4];
const fifthAnswer = document.getElementsByClassName('card-answer')[4];


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

const toggleHiddenElement4 = (domElement) => {
    if (domElement.style.display === 'none') {
        fourthQuestion.style.marginBottom = '5px';
        fourthAnswer.style.display = 'block';
        fourthAnswer.style.marginBottom = '10px';
        fourthQuestion.style.fontWeight = 'bold';
    }else {
        fourthQuestion.style.marginBottom = '20px';
        fourthAnswer.style.display = 'none';
        fourthAnswer.style.marginBottom = '0px';
        fourthQuestion.style.fontWeight = 'normal';
    }
}


const toggleHiddenElement5 = (domElement) => {
    if (domElement.style.display === 'none') {
        fifthQuestion.style.marginBottom = '5px';
        fifthAnswer.style.display = 'block';
        fifthAnswer.style.marginBottom = '10px';
        fifthQuestion.style.fontWeight = 'bold';
    }else { 
        fifthQuestion.style.marginBottom = '20px';
        fifthAnswer.style.display = 'none';
        fifthAnswer.style.marginBottom = '0px';
        fifthQuestion.style.fontWeight = 'normal';
    }
}



//Thease activate the functions above on click
firstQuestion.addEventListener('click', () => {
  toggleHiddenElement(firstAnswer);
});
secondQuestion.addEventListener('click', () => {
    toggleHiddenElement2(secondAnswer);
});
thirdQuestion.addEventListener('click', () => {
    toggleHiddenElement3(thirdAnswer);
});
fourthQuestion.addEventListener('click', () => {
    toggleHiddenElement4(fourthAnswer);
});

fifthQuestion.addEventListener('click', () => {
    toggleHiddenElement5(fifthAnswer);
});