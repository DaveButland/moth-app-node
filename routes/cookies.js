var express = require('express');
var router = express.Router();

const COOKIES_ROUTE_NAME = 'cookies';
const COOKIES_PAGE_TITLE = 'Cookies';
const COOKIES_TAB_TITLE = 'Cookie policy - Check MOT history';

router.get('/', function(req, res, next) 
{
  var options = { title: COOKIES_TAB_TITLE
                , pageTitle: COOKIES_PAGE_TITLE
                } ;

  res.render('cookies', options );
});

module.exports = router;
