// 1) Создайте объект Starbucks Coffee Company.

var starbucks = {
    drinks: [{
        hotTeas: [{
            name: 'tea',
            description: 'Обычный чай'
        }, {
            name: 'black tea',
            description: 'Черный чай с различными добавками'
        }, {
            name: 'Green tea',
            description: 'Зеленый чай с антиоксидантами'
        }, {
            name: 'Fruit tea',
            description: 'Ароматный чай с фруктами'
        }
        ]
    }, {
        hotCoffees: [{
            name: 'Cappuccino',
            description: 'Классический кофе с молоком и пеной'
        }, {
            name: 'latte',
            description: 'Кофе с молоком, обычно без пены'
        }, {
            name: 'Espresso',
            description: 'Крепкий черный кофе без молока'
        }
        ]


    }
    ], eat: [{
        hotBreakfast: [{
            name: 'Chiccen Maple Butter & Egg Sandwich',
            description: 'Сэндвич с курицей, кленовым маслом и яйцом'
        }, {
            name: 'Bacon, Sausage & Egg Wrap',
            description: 'Обертка с беконом, колбасой и яйцом'
        }],
        lunch: [{
            name: 'Crispy Grilled Cheese on Sourdough',
            description: 'Хрустящий жареный сыр на закваске'

        }, {
            name: 'Ham & Swiss on Baguette',
            description: 'Ветчина и швейцарский сыр на багете'
        }]
    }]

}
console.log(starbucks.drinks[0].hotTeas[1].description)
console.log(starbucks.eat[0].hotBreakfast[1].name);



// 3)Программа должна запрашивать месяц и в зависимости от введенного месяца выводить сезон года
// var season = String(prompt('Введите месяц'.toLowerCase()))
// switch (season) {
//     case 'декабрь':
//         alert('Зима')
//         break;
//     case 'январь':
//         alert('Зима')
//         break;
//     case 'февраль':
//         alert('Зима')
//         break;
//     case 'март':
//         alert('Весна')
//         break;
//     case 'апрель':
//         alert('Весна')
//         break;
//     case 'май':
//         alert('Весна')
//         break;
//     case 'июнь':
//         alert('Лето')
//         break;
//     case 'июль':
//         alert('Лето')
//         break;
//     case 'август':
//         alert('Лето')
//         break;
//     case 'сентябрь':
//         alert('Осень')
//         break;
//     case 'октябрь':
//         alert('Осень')
//         break;
//     case 'ноябрь':
//         alert('Осень')
//         break;

//     default:
//         alert('error')
// }

// 4) Есть массив [[[[[[[[[[[2]]]]]]]]]]].С помощью индекса выведите цифру 2

// var array = [[[[[[[[[[[2]]]]]]]]]]]
// console.log(array[0][0][0][0][0][0][0][0][0][0][0]);



// 2) Циклом выведите все числа от 0 до 100, но с 3 условиями: 
// 1. Если число делится на 3 без остатка, то вместо этого числа надо вывести слово "fizz"
// 2. Если число делится на 5 без остатка, то вместо этого числа надо вывести слово "buzz"
// 3. Если число делится и на 3, и на 5, то надо вывести "fizzbuzz".
// Вывод примерно должен быть таким: 0, 1, 2, "fizz" и т.д
// for (var i = 100; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuz');
//     } else if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0) {
//         console.log('buzz');
//     }
//     else{
//         console.log(i);
//     }
// }