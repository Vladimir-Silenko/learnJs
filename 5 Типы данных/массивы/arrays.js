//------1------
// что выведет код??
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
// alert(fruits.length);
// выведет 4, так как  shoppingCart не копия,
// а переменная, которая содержит ссылку на fruits



//------2------
/**Давайте произведём 5 операций с массивом.

1 Создайте массив styles с элементами «Джаз» и «Блюз».
2 Добавьте «Рок-н-ролл» в конец.
3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
4 Удалите первый элемент массива и покажите его.
5 Вставьте Рэп и Регги в начало массива. */

let styles = ['jazz', 'blues']
styles.push('rock\'n\'roll')
styles[Math.floor((styles.length - 1) / 2)] = 'classics'
// alert(styles.shift())
styles.unshift('rap', 'reggae')
console.log(styles)



//------3------
//
let arr = ["a", "b"];

arr.push(function () {
    alert(this);
});

// arr[2]()
// выводится тело функции, потому что js видит её методом объекта

//------4------
/**
 * Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение,
пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */
const sumInput = () => {
    let arr = []
    let num
    let sum = 0
    do {
        num = +prompt('введите число', 0)
        if (!isNaN(num)) arr.push(num)
    } while (typeof num === 'number')

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    alert(sum)
}
// sumInput()

//------5------
//     
const getMaxSubSum = arr => {
    let maxSum = 0
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
        if (sum < 0) sum = 0
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum
}
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
