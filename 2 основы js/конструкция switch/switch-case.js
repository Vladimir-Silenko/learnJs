// -------1-------
// Напишите "if", аналогичный "switch"
function ifElse(browser) {
    if (browser === 'Edge') alert("You've got the Edge!")
    else if (browser === 'Opera' ||
        browser === 'Safari' ||
        browser === 'Firefox' ||
        browser === 'Chrome') alert('Okay we support these browsers too')
    else alert('We hope that this page looks ok!')
}
ifElse('Edge')
// -------2-------
//Переписать условия "if" на "switch"
function switchCase() {
    const number = +prompt('Введите число между 0 и 3', '')
    switch (number) {
        case 0:
            alert('Вы ввели число 0')
            break
        case 1:
            alert('Вы ввели число 1')
            break
        case (2 || 3):
            alert('Вы ввели число 2, а может и 3')
            break
        default:
            alert('Читайте условия внимательнее')
            switchCase()
            break;
    }
}
switchCase()