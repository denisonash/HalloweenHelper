let express = require("express");
let app = new express();

// Initialize database connection
const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "costumedb.cyojq0o6xjnw.us-west-1.rds.amazonaws.com",
        user: "admin",
        password: "adminadmin",
        database: "Costumes",
        port: 3306,
    },
});

app.get("/", (req,res) => {
    knex
    .select()
    .from("Costumes")
    .then((result) => {
        res.render("index.ejs", {aCostumes: result});
    });
});

app.listen(3000);