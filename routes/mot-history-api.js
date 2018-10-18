var express = require('express');
var router = express.Router();

const MOT_HISTORY_API_ROUTE_NAME = 'mot-history-api';
const MOT_HISTORY_API_PAGE_TITLE = 'MOT History API';
const MOT_HISTORY_API_TAB_TITLE = 'MOT History API - Check MOT history';

router.get('/', function(req, res, next) 
{
  var options = { title:MOT_HISTORY_API_TAB_TITLE
                , pageTitle: MOT_HISTORY_API_PAGE_TITLE
                } ;

  res.render('mot-history-api', options );
});

module.exports = router;
