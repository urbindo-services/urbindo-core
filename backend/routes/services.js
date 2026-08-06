const express = require('express');
const router = express.Router();

const services = [
  { id: 1, name: 'Home Cleaning', price: 499 },
  { id: 2, name: 'Electrician', price: 399 },
  { id: 3, name: 'Plumbing', price: 449 }
];

router.get('/', (req, res) => {
  res.json({ services });
});

module.exports = router;
