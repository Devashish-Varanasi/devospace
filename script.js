function toggleAnswer(questionId) {
    var answer = document.getElementById('answer-' + questionId);
    var arrow = document.getElementById('arrow-' + questionId);

    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        arrow.classList.add('rotate');
    } else {
        answer.style.display = 'none';
        arrow.classList.remove('rotate');
    }
}