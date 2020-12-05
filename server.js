// using layout code 
const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");

const app = express();

const path = require("path");

db.on("error", error => {
    console.log("Database Error:", error);
});

// Creating path to front end index...
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, ".public/index.html"));
});

app.get("/unread", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/evercise.thml"));
});

app.put("/markread/:id", ({ params }, res) => {
    db.books.update(
        {
            _id: mongojs.ObjectId(params.id)
        },
        {
            $set: {
                read: true
            }
        },

        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        }
    );
});

app.put("/markunread/:id", ({ params }, res) => {
    db.books.update(
        {
            _id: mongojs.ObjectId(params.id)
        },
        {
            $set: {
                read: false
            }
        },

        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        }
    );
});

app.listen(3000, () => {
    console.log("App running on port 3000!");
});