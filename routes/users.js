var express = require('express');
const { request, response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("kukkuluuruu!!!");
});
//eka väli vehe
router.use(function (request,response,next) {
  console.log("olen välivehje 1!");
  next();

});
//get metodi ilman parametrejä
router.get ('/toka', function(request,response)
{
  response.send("olenpa toka hyvinkin");
  console.log("toka tietenkin");

});
//toinen välivehe
router.use(function (request,response,next) {
  console.log("olen välivehje 2!");
  next();

});
//get metodi yhdellä parametrillä
router.get ('/kolmas/:nimi', function(request,response)
{
  response.send("olenpa vaan "+request.params.nimi);
  console.log(request.params.nimi);

});
//väli vehe kolmas
router.use(function (request,response,next) {
  console.log("olen välivehje 3!");
  next();

});
//get metodi kahdella parametrillä
router.get ('/neljas/:enimi/:snimi', function(request,response)
{
  response.send("olenpa vaan "+request.params.enimi+" "+request.params.snimi);

});
//post metodi - annetaan postmanille parametri
router.post('/',function(request,response)
{
  response.send(request.body);
});

module.exports = router;
