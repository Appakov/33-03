document.addEventListener("DOMContentLoaded", function () {
    const questionButtons = document.querySelectorAll('.question .btn');

    questionButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const question = this.parentNode;
            const answerElement = question.querySelector('.answer');
            const visible = answerElement.classList.toggle('visible');

            btn.innerHTML = visible ? 'Скрыть ответ' : 'Правильный ответ'
        });
    });
});