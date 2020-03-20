var express = require('express');
var router = express.Router();
const Gpio = require("onoff").Gpio;

const led = new Gpio(4, 'out');

router.post('/on', function(req, res, next) {
  led.writeSync(1);
  res.json({ 'status': 'OK', 'data': 'Led Aceso' });
});

router.post('/off', function(req, res, next) {
  led.writeSync(0);
  res.json({ 'status': 'OK', 'data': 'Led Apagado' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Controle de LED' });
});

module.exports = router;
