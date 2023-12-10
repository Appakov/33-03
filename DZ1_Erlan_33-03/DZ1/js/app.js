var country = prompt('Введите название вашей страны')
var capital = prompt('Введите название столицы вашей страны')

if (country === 'Кыргызстан' && capital === 'Бишкек') {
    var countryCode = 996
    alert('Поздравляем, вы ввели правильную информацию,код вашей страны ' + countryCode)
}
else {
    alert('error')
}