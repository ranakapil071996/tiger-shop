const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  try {
    const response = await fetch(process.env.PRODUCT_URL, {
      method: 'GET'
    });
    const json = await response.json();
    res.status(200).json(json);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
