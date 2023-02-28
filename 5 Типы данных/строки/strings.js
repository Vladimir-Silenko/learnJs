//-------1-------
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
const ucFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(ucFirst('hey'))


//-------2-------
// Напишите функцию checkSpam(str),
// возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

const checkSpam = str => {
    str = str.toLowerCase()
    if (str.includes('xxx') || str.includes('viagra')) return true
    else return false
}
console.log(checkSpam('ViaGralkkj'))


//-------3-------
/**
 * Создайте функцию truncate(str, maxlength),
 *  которая проверяет длину строки str и, если она превосходит maxlength,
 *  заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется,
 либо, если необходимо, усечённая строка.
 */

const truncate = (str, maxlength) => {
    return str.length > maxlength ? str.slice(0, maxlength) + '...' : str
}
console.log(truncate('abcdefghigklmnopqrstuvwxyz', 25))

//-------4-------
/**
 * Создайте функцию extractCurrencyValue(str),
 *  которая будет из такой строки выделять числовое значение и возвращать его.
 */
const extractCurrencyValue = str => +str.slice(1)
console.log(extractCurrencyValue('$100'))