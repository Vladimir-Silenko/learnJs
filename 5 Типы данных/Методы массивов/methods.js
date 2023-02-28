// ---------1---------
//Переведите текст вида border-left-width в borderLeftWidth
const camelize = str => {
    str = str.split('-').map((item, index) => {
        if (index > 0) { return item[0].toUpperCase() + item.slice(1) }
        return item
    })
    return str
}
console.log(camelize('border-left-width'))
// ---------2---------
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b
// и возвращает результат в виде массива.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function filterRange(arr, a, b) {
    let result = arr.filter(item => item >= a && item <= b)
    return result
}
console.log(filterRange(arr, 3, 7))

// ---------3---------
//Напишите функцию filterRangeInPlace(arr, a, b),
//  которая принимает массив arr и удаляет из него все значения кроме тех,
//  которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
const filterRangeInPlace = (arr, a, b) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1)
            i--
        }
    }

}
filterRangeInPlace(arr, 2, 5)
console.log(arr)


// ---------4---------
//Сортировать в порядке по убыванию
let arr2 = [5, 2, 1, -10, 8]
const sorter = arr => {
    return arr2.sort().reverse()
}
console.log(sorter(arr2))

// ---------5---------
//Скопировать и отсортировать массив
let arr3 = ["HTML", "JavaScript", "CSS"]

const copySorted = arr => {
    return [...arr].sort()
}
let sorted = copySorted(arr3)
console.log(sorted)


// ---------6---------
// Создайте функцию конструктор Calculator,
// которая создаёт «расширяемые» объекты калькулятора.
function Calculator(str) {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
    this.calculate = function (str) {
        let params = str.split(' '),
            a = +params[0],
            b = +params[2],
            option = params[1]

        return this.methods[option](a, b)
    }

    this.extend = function (name, func) {
        this.method[name] = func
    }
}
const calc = new Calculator()
console.log(calc.calculate('7 + 3'))


// ---------7---------
//У вас есть массив объектов user, и в каждом из них есть user.name.
//Напишите код, который преобразует их в массив имён.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha]
let usernames = users.map(item => item.name)
console.log(usernames)


// ---------8---------
//У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
// где fullName – состоит из name и surname.
const newObjects = () => {
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [vasya, petya, masha];

    let usersMapped = users.map(user => ({
        fullname: `${user.name} ${user.surname}`,
        id: user.id
    }))
    console.log(usersMapped)
}
newObjects()
// ---------9---------
const sortByAge = users => users.sort((a, b) => a.age - b.age)

console.log(sortByAge(users))

// ---------10---------
//
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
console.log(shuffleArray(users))


// ---------11---------
//Напишите функцию getAverageAge(users),
//которая принимает массив объектов со свойством age и возвращает средний возраст.
const getAverageAge = users => {
    let average = 0
    for (let i = 0; i < users.length; i++)  average += users[i].age
    return Math.round(average / 3)
}
console.log(getAverageAge(users))


// ---------12---------
//Напишите функцию unique(arr),
//которая возвращает массив, содержащий только уникальные элементы arr.
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O", '1']
const unique = arr => {
    let obj = {}
    let array = []
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]
        if (!(obj[el])) obj[el] = 1
        else { obj[el] += 1 }
    }
    Object.keys(obj).forEach(key => {
        if (obj[key] === 1) array.push(key)
    })
    return array
}
console.log(unique(strings))

// ---------13---------
//Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
//Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа
// и элементами массива в качестве значений.
let userlist = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];
const groupById = users => {
    let obj = {}
    users.forEach(u => { if (!(obj[u.id])) obj[u.id] = u })
    return obj
}
let usersById = groupById(userlist);
console.log(usersById)



