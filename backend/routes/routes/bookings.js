const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'Booking created', booking: req.body });
});

router.get('/', (req, res) => {
  res.json({ bookings: [] });
});

module.exports = router;
