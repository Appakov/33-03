var birthYear = Number(prompt('Напишите год рождения'))

var currentYear = 2023

var age = currentYear - birthYear



if(birthYear > currentYear){
    console.log('Введите корректные данные')
}else{
    var age = currentYear - birthYear

    console.log('Ваш возраст ' + age + 'лет' )
}