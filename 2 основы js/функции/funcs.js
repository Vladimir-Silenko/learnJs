//-------1------
//Обязателен ли "else"?
function checkAge1(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}
//   Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}

//   обе функции дают одинаковый результат


//-------2------
//Перепишите функцию, используя оператор '?' или '||'
const checkAge3 = age => age > 18 ? true : confirm('Родители разрешили?')
const checkAge4 = age => (age > 18 || confirm('Родители разрешили?'))

//-------3------
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
const min = (a, b) => a > b ? alert(b) : alert(a)
// min(1, 2)


//-------4------
//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
const pow = (x, n) => alert(x ** n)
// pow(2, 4)