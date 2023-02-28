//---------1--------
//Создайте функцию unique(arr), которая вернёт массив уникальных,
//  не повторяющихся значений массива arr.
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
function unique(arr) {
    return Array.from(new Set(arr))
}
console.log(unique(values))

//---------2--------
//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
const aclean = (arr) => {

    let map = new Map()
    arr.forEach(item => {
        sorted = item.toLowerCase().split('').sort().join('')
        map.set(sorted, item)
    })
    return Array.from(map.values())
}
console.log(aclean(arr))
//---------3--------
//Мы хотели бы получить массив ключей map.keys() в переменную
// и далее работать с ними, например, применить метод .push.
// Что нужно поправить в коде, чтобы вызов keys.push сработал?
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()) //!!!! конвертируем в массив !!!!


keys.push("more");
console.log(keys)