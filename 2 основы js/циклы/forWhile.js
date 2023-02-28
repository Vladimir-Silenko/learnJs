// ---------1---------
//  Какое последнее значение выведет этот код? Почему?
const alertEl = () => {
    let i = 3;

    while (i) {
        alert(i--);
    }
}
//Выведет 1, так как выполняется покуда i == true


// ---------2---------
//Какие значения выведет цикл while?
// 1 Префиксный вариант ++i:

const pre = () => {
    let i = 0;
    while (++i < 5) alert(i);
} //  здесь от 1 до 4 так как цикл не учитывает 0, и сразу переходит к 1
// pre()

//  2 Постфиксный вариант i++

const post = () => {
    let i = 0;
    while (i++ < 5) alert(i);
}//здесь от 1 до 5, так как учитываются все значения от 0 до 4, увеличенные на 1
// post()


// ---------3---------
//
const preFor = () => { for (let i = 0; i < 5; ++i) alert(i); }
const postFor = () => { for (let i = 0; i < 5; i++) alert(i); }
//результат будет одинаков, так как  увеличение и проверка условия происходят независимо друг от друга

// ---------4---------
//При помощи цикла for выведите чётные числа от 2 до 10.
const evenFor = () => {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0 && i != 0) alert(i)
    }
}
// evenFor()
// ---------5---------
//Замените for на while
const whileFor = () => {
    let i = 0
    while (i <= 10) {
        i++
        if (i % 2 == 0 && i != 0) alert(i)
    }
}
// whileFor()
// ---------6---------
//Повторять цикл, пока ввод неверен
const promptNum = () => {
    do { let num = prompt('введите число ,больше 100', 0) } while (num <= 100)

}
// promptNum()
// ---------7---------
//Вывести простые числа
function isSimple(num) {

    simple: for (let i = 0; i <= num; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue simple
        }
        alert(i)
    }
}
// isSimple(7)
function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true //объявляем переменную говорящую о том, является ли число простым
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false //
                break;
            }
        }
        if (isPrime) {
            console.log(i)
        }
    }
}
printPrimes(10)