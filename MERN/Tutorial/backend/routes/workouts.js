const express = require('express');
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require('../conrollers/workoutController');

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// Get a single workout
router.get('/:id', getWorkout);

router.post('/', createWorkout);
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a workout' });
});
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE workout' });
});

module.exports = router;
