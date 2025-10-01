function checkAnswer() {
    // Function body
    const correctAnswer = "4";
    const selectOption = document.querySelector('input[name="quiz"]:checked');
    //if no option is selected
    if(!selectedOption) {
        document.getElementById('feedback').textContent = 'Please select an answer before submitting.';
        return;
    }

    const userAnswer = selectedOption.value;
    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);