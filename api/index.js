var express = require('express');
var router = express.Router();


// http://localhost:3000/
router.get('/', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Live long and prosper!'
      });
});


//////////////////////
// Postgres queries
//////////////////////

var db = require('./queries');

router.get('/kbo2LogReport', db.getAllStarships);
router.get('/kbo2LogReport/:id',db.getStarship);
router.get('/getKb02Header/:id', db.getKb02Header);
router.get('/getKb02SumHeadCPUDT2CPUDT/:id/:id2/:id3', db.getKb02SumHeadCPUDT2CPUDT);
router.get('/getKb02SumHeadCPUDT2CPUDT_ZZPMT/:id/:id2/:id3', db.getKb02SumHeadCPUDT2CPUDT_ZZPMT);
router.get('/getKb02Countalldocument/:id/:id2/:id3', db.getKb02Countalldocument);
router.get('/getKb02CountalldocumentZzpmt/:id/:id2/:id3', db.getKb02CountalldocumentZzpmt);
router.get('/getKb02Detail/:id',db.getKb02Detail);
router.post('/starships', db.createStarship);
router.put('/starships/:id', db.updateStarship);
router.delete('/starships/:id', db.removeStarship);

module.exports = router;
