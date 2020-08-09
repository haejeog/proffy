const proffys = [
    {
        name: "Eli Marins",
        avatar: "https://avatars1.githubusercontent.com/u/31313971?s=460&u=135fc6b28e1a19071d2a61ce07109d8a577767ea&v=4",
        whatsapp: "89987557",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Ronaldo Dominguez",
        avatar: "https://avatars1.githubusercontent.com/u/31313971?s=460&u=135fc6b28e1a19071d2a61ce07109d8a577767ea&v=4",
        whatsapp: "697658991",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20,00",
        weekday: [3],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Andreia Dominguez",
        avatar: "https://avatars1.githubusercontent.com/u/31313971?s=460&u=135fc6b28e1a19071d2a61ce07109d8a577767ea&v=4",
        whatsapp: "697658991",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Matemática",
        cost: "200,00",
        weekday: [3],
        time_from: [720],
        time_to: [1220]
    }];

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
function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects, weekdays });
}
function pageGiveClasses(req, res) {
    const data = req.query;
    const isNotEmpty = Object.keys(data).length != 0;
    if (isNotEmpty) {
        data.subject = getSubject(data.subject);
        proffys.push(data);
        return res.redirect("/study");
    } else {
        return res.render("give-classes.html", { weekdays, subjects });
    }
}

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});
server.use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500);