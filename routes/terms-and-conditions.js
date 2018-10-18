var express = require('express');
var router = express.Router();

const T_AND_C_PAGE_API_ROUTE_NAME = 'terms-and-conditions';
const T_AND_C_PAGE_TITLE = 'Terms and conditions';
const T_AND_C_TAB_TITLE = 'Terms and conditions - Check MOT history';

router.get('/', function(req, res, next) 
{
  var options = { title:T_AND_C_TAB_TITLE
                , pageTitle: T_AND_C_PAGE_TITLE
                } ;

  res.render('terms-and-conditions', options );
});

module.exports = router;
