// --------1-------
/**
 * Создайте объект Date для даты: 20 февраля 2012 года,
 *  3 часа 12 минут. Временная зона – местная.
 */
let date = new Date(2012, 1, 20, 3, 12)
// alert(date)

// --------2-------
/**Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
 *  «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС». */
const getWeekDay = (date) => {
    let weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
    return weekDays[date.getDay()]
}
console.log(getWeekDay(date))

// --------3-------
/**
 * В Европейских странах неделя начинается с понедельника (день номер 1),
 *  затем идёт вторник (номер 2) и так до воскресенья (номер 7).
 *  Напишите функцию getLocalDay(date),
 *  которая возвращает «европейский» день недели для даты date.
 */
const getLocalDay = (date) => {

    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }

    return day;
}
let date2 = new Date(2012, 0, 3)
console.log(getLocalDay(date2))


// --------4-------
/**
 *Создайте функцию getDateAgo(date, days),
  возвращающую число, которое было days дней назад от даты date.
 */
function getDateAgo(date, days) {
    let dateDublicate = new Date(date);

    dateDublicate.setDate(date.getDate() - days);
    return dateDublicate.getDate();
}
console.log(getDateAgo(date2, 3))


// --------5-------

/** Напишите функцию getLastDayOfMonth(year, month), 
 * возвращающую последнее число месяца.*/
const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 0)
    return date.getDate()
}
console.log(getLastDayOfMonth(2023, 1))


// --------6-------
/** 
 * Напишите функцию getSecondsToday(),
 *  возвращающую количество секунд с начала сегодняшнего дня.
*/
const getSecondsToday = () => {
    let date = new Date()
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    return Math.round((date - today) / 1000)
}
console.log(getSecondsToday())


// --------7-------
/** 
 * Создайте функцию getSecondsToTomorrow(),
 *  возвращающую количество секунд до завтрашней даты.
*/
const getSecondsToTomorrow = () => {
    let now = new Date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    return Math.round((tomorrow - now) / 1000)
}
console.log(getSecondsToTomorrow())


// --------8-------
/** 
 * Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты",
 всё в виде двух цифр, т.е. 31.12.16 10:00.
*/

function formatDate(date) {
    let monthDay = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    let diffMs = new Date() - date;
    let diffS = Math.round(diffMs / 1000);
    let diffM = diffS / 60;
    let diffH = diffM / 60;

    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    monthDay = monthDay < 10 ? '0' + monthDay : monthDay;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffS < 1) {
        return 'прямо сейчас';
    } else if (diffM < 1) {
        return `${diffS} сек. назад`
    } else if (diffH < 1) {
        return `${diffM} мин. назад`
    } else {
        return `${monthDay}.${month}.${year} ${hour}:${minutes}`
    }
}

console.log(formatDate(date))