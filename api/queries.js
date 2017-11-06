var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://adempiere:icEthENaNDEmPEGINaWB@idp.yai.io:5432/logdb'; // startrek is an example database name
var db = pgp(connectionString);


/////////////////////
// Query Functions
/////////////////////

function getAllStarships(req, res, next) {
  db.any('SELECT * FROM "public"."test2"')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all starships'
        });
    })
    .catch(function (err) {
      return next(err);
    });
 
}

function getStarship(req, res, next) {
  var id = parseInt(req.params.id);

  db.any('SELECT * FROM "public"."Log_Header_creadit" WHERE "head_logno" =\'$1\'  or "detail_logno"=\'$1\' ',id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved one starship'
        });
    })
    .catch(function (err) {
      return next(err);
    });

}
function getKb02Header(req, res, next) {
  var id = parseInt(req.params.id);
  db.any('SELECT * FROM "public"."KB02_LOG_REPORT_HEADER" WHERE "a_logno" = \'$1\' ',id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          header: data,
          message: 'Retrieved one starship'
        });
    })
    .catch(function (err) {
      return next(err);
    });

}
function getKb02Detail(req, res, next) {
  var id = parseInt(req.params.id);
  db.any('SELECT * FROM "public"."Report_Log_KB02" WHERE  "a_logno" =\'$1\' ',id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          item: data,
          message: 'Retrieved one starship'
        });
    })
    .catch(function (err) {
      return next(err);
    });

}
function createStarship(req, res, next) {
  req.body.launched = parseInt(req.body.launched);
  db.none('INSERT INTO public.starships(name, registry, affiliation, launched, class, captain)' +
      'values(${name}, ${registry}, ${affiliation}, ${launched}, ${class}, ${captain})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one starship'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateStarship(req, res, next) {
  db.none('UPDATE public.starships SET name=$1, registry=$2, affiliation=$3, launched=$4, class=$5, captain=$6 where id=$7',
    [req.body.name, req.body.registry, req.body.affiliation, parseInt(req.body.launched), req.body.class, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated starship'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeStarship(req, res, next) {
  var id = parseInt(req.params.id);
  db.result('DELETE FROM public.starships WHERE id = $1', id)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: 'Removed ${result.rowCount} starships'
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}


/////////////
// Exports
/////////////

module.exports = {
    getAllStarships: getAllStarships,
    getStarship: getStarship,
    createStarship: createStarship,
    updateStarship: updateStarship,
    removeStarship: removeStarship,
    getKb02Header:getKb02Header,
    getKb02Detail:getKb02Detail
};
