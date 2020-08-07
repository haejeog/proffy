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
    }];

function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    return res.render("study.html", { proffys, title: "Hi from Nunjucks" });
}
function pageGiveClasses(req, res) {
    return res.render("give-classes.html");
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