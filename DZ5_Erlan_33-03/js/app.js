// const numbers = [2, 3, 4, 5, 44, 44, 34, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 8, 7, 8, 7, 5, 6, 4, 5]
// const uniqueNumbers = numbers.reduce((index, value) => (index.includes(value) ? index : [...index, value]), [])
// console.log(uniqueNumbers);

function filterAndMapBooks(bookName) {
    const booksWithU = bookName.filter(title => title.includes('у'));
    const otherBooks = bookName.filter(title => !title.includes('у'));
    booksWithU.forEach(title => console.log(`${title} - книга с буквой "у"`));
    otherBooks.forEach(title => console.log(title));
}
const bookName = ["Чистая архитектура", "Js с нуля", "Чистый код", "Совершенный код", "Js для чайников"];
filterAndMapBooks(bookName);

