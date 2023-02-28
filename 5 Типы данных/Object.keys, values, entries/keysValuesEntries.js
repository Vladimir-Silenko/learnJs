//-------1-------
/**
 * Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат
с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.
 */
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
const sumSalaries = (obj) => {
    let sum = 0
    let val = Object.values(obj)
    for (let i = 0; i < val.length; i++) {
        sum += val[i]
    }
    return sum

}
console.log(sumSalaries(salaries))

//------2------
/**
alert( count(user) );
 * Напишите функцию count(obj), которая возвращает количество свойств объекта:
 */
let user = {
    name: 'John',
    age: 30
}
const count = (obj) => Object.keys(obj).length

console.log(count(user))