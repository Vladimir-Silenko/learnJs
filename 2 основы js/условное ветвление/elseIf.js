// -----1-----
if ("0") {
    alert('Привет'); // выводится, так как результат проверки - true
}

// -----2-----

let JSName = prompt('Какое "официальное" название JavaScript?')

if (JSName === 'ECMAScript') alert('Верно!')
else alert('Не знаете? “ECMAScript”!')

//-----3-----

let number = prompt('введите число')

if (number > 0) alert(1)
else if (number < 0) alert(-1)
else alert(0)

//-----4-----

let result = (a + b < 4) ? 'Мало' : 'Много'

//-----5-----
let message = (login == 'сотрудник') ? 'привет' : (login == 'директор') ? 'здравствуйте' :
    (login == '') ? 'нет логина' : ''