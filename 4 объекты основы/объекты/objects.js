// ------1------
/**
 * Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
 */
let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name
console.log(user)
// ------2------
//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
const isEmpty = (obj) => {
    for (let keys in obj) {
        return false
    }
    return true
}
console.log(isEmpty(user))

// ------3------
//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user1 = {
    name: "John"
};

// это будет работать?
user1.name = "Pete"; // Да, это сработает, мы не можем переписать саму константу, а вот содержимое объекта сможем

// ------4------
//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sumSalaries = (obj) => {
    let sum = Object.values(obj).reduce((a, b) => { return a + b }, 0)
    return sum
}
// Или
const sumSalaries2 = (obj) => {
    let sum = 0
    for (let key in obj) {
        sum += obj[key]
    }
    return sum
}
// console.log(sumSalaries(salaries))
// console.log(sumSalaries2(salaries))


// ------5------
//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') obj[key] *= 2
    }
}

multiplyNumeric(menu)
console.log(menu)
