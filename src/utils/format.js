const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
];
const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
];
function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition];
}

function convertHourToMinute(time){
    const {hour, minutes} = time.split(":");
    return Number((hour * 60)+minutes);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHourToMinute
}