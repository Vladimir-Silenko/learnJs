//-------1-------
/**Напишите деструктурирующее присваивание, которое:
свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства) */
let user = {
    name: "John",
    years: 30
}
let { name, years, isAdmin = false } = user

//-------2-------
/**Создайте функцию topSalary(salaries),
 *  которая возвращает имя самого высокооплачиваемого сотрудника. */
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Vova": 600,
}

const topSalary = (obj) => {
    let Name = null
    let max = 0
    Object.entries(obj).forEach(([name, salary]) => {
        if (max < salary) {
            max = salary
            Name = name
        }
    })
    return Name
}
console.log(topSalary(salaries))