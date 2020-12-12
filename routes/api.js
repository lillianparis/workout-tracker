const router = require("express").Router();

const Workout = require("../models");

// Grab workouts

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((workoutResponse) => {
            res.json(workoutResponse);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// create a new workout 

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
// update one workout
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