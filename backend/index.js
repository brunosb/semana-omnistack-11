const express = require("express");

const app = express();

app.get("/", (req, resp) => {
    return resp.json({
        evento: "Semana OminiStack 11.0",
        aluno: "Bruno Barbosa"
    });
});

app.listen(3333);
