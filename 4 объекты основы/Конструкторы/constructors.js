// -------1-------
//Возможно ли создать функции A и B, чтобы new A() == new B()?

//да, возможно, если обе эти функции будут возвращать один и тот-же объект созданный вне их

const obj = { isShared: true }
function A() { return obj }
function B() { return obj }

let a = new A();
let b = new B();

// alert(a == b)

// -------2-------
/**
 * Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
 */

function Calculator() {
    this.read = function (a, b) {
        this.a = +prompt('a?')
        this.b = +prompt('a?')
    }
    this.sum = () => alert(this.a + this.b)
    this.mul = () => alert(this.a * this.b)
}
// let calc = new Calculator()
// calc.read()
// calc.mul()
// -------3-------
/**Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value. */

function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function (a, b) {
        this.value += +prompt('сколько прибавлять?')
    }
}
let acc = new Accumulator(1)
acc.read()
acc.read()
alert(acc.value)