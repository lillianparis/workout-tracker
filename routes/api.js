const router = require("express").Router();

const Workout = require("../models/workouts.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// Backend uses : and variable, front end uses + and variable
router.put("/api/workouts/:id", ({ body }, res) => {
    Workout.updateOne({ _id: req.params.id }, { exercises: body })
    .then(function (dbImage) {
        res.json(dbImage);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;