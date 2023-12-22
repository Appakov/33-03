const formSum = document.querySelector('.form__sum')
const formMonth = document.querySelector('.form__month')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const amount = Number(formSum.value);
    const month = formMonth.value.toLowerCase();

    if (typeof amount === 'number' && month) {
        let daysInMonth;

        if (month === 'январь' || month === 'март' || month === 'май' || month === 'июль' || month === 'август' || month === 'октябрь' || month === 'декабрь') {
            daysInMonth = 31;
        } else if (month === 'апрель' || month === 'июнь' || month === 'сентябрь' || month === 'ноябрь') {
            daysInMonth = 30;
        } else if (month === 'февраль') {
            daysInMonth = 28;
        } else {
            return alert('Введите корректное название месяца.');
        }
        const dailyBudget = amount / daysInMonth;
        let result = ''
        for (let day = 1; day <= daysInMonth; day++) {
            result += `День ${day} - ${Math.round(dailyBudget)}`
        }
        alert(result.trim());
    } else {
        alert('Пожалуйста, введите корректные данные.')
    }
});