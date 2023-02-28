// -------1------
let user = {
    name: "Василий Иванович",
    age: 35
}
let json = JSON.parse(JSON.stringify(user))
//------2------
//Напишите функцию replacer для JSON-преобразования,
// которая удалит свойства, ссылающиеся на meetup
let room = {
    number: 23
}

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
}
room.occupiedBy = meetup
meetup.self = meetup

console.log(JSON.stringify(meetup, function replacer(key, value) {
    if (key != '' && value == meetup) return undefined
    else return value
}))