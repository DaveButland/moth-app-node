var express = require('express');
const VehicleData = require('../Entity/VehicleData.js');
var router = express.Router();

const INDEX_PAGE_ROUTE_NAME = 'home';
const INDEX_PAGE_TITLE = 'What is the vehicle\'s registration number - MOT History';
const VEHICLE_RESULTS_MOT_TITLE = ' - Check MOT history';
const VEHICLE_RESULTS_HGV_TITLE = ' - Check annual test history';

const USER_SATISFACTION_COOKIE_NAME = 'seen_user_survey';

const ERROR_MESSAGE_NO_RESULT = 'Check that the registration you entered is correct';
const VIEW_INDEX = 'mot-history-ui/index/index.phtml';
const GOOGLE_ANALYTICS_UID = 'GTM-TP6B87K';
const DAYS_BEFORE_GARAGE_DETAILS = 14;

/* GET home page. */
router.get('/', function (req, res, next) {
  var options = {
    title: INDEX_PAGE_TITLE
    , google_analytics_uid: GOOGLE_ANALYTICS_UID
  };

  res.render('index', options);
});

router.post('/', function (req, res, next) {
  var vehicle2 = new VehicleData();

  vehicle2.registration = vehicle1.registration;
  vehicle2.make = vehicle1.make;
  vehicle2.model = vehicle1.model;
  vehicle2.primaryColour = vehicle1.primaryColour;
  vehicle2.fuelType = vehicle1.fuelType;
  vehicle2.firstUsedDate = vehicle1.firstUsedDate;

  var options = {
    title: vehicle2.makeandmodelname + VEHICLE_RESULTS_MOT_TITLE
    , google_analytics_uid: GOOGLE_ANALYTICS_UID
    , vehicle: vehicle2
  };

  res.render('results/vehicle-info', options);
});

const vehicle1 = {
  "registration": "SK09GVG",
  "make": "RENAULT",
  "model": "SCENIC",
  "firstUsedDate": "2009-03-17",
  "fuelType": "Petrol",
  "primaryColour": "Silver",
  "motTests": [
    {
      "completedDate": "2018.03.14 12:45:55",
      "testResult": "PASSED",
      "expiryDate": "2019.03.17",
      "odometerValue": "56332",
      "odometerUnit": "mi",
      "motTestNumber": "792962400919",
      "odometerResultType": "READ",
      "rfrAndComments": []
    },
    {
      "completedDate": "2017.02.28 10:09:11",
      "testResult": "PASSED",
      "expiryDate": "2018.03.17",
      "odometerValue": "53721",
      "odometerUnit": "mi",
      "motTestNumber": "925979400384",
      "odometerResultType": "READ",
      "rfrAndComments": []
    },
    {
      "completedDate": "2016.03.18 15:39:06",
      "testResult": "PASSED",
      "expiryDate": "2017.03.17",
      "odometerValue": "51499",
      "odometerUnit": "mi",
      "motTestNumber": "888392566085",
      "odometerResultType": "READ",
      "rfrAndComments": [
        {
          "text": "registration plate deteriorated but not likely to be misread  cracked (6.3.1d)",
          "type": "ADVISORY",
          "dangerous": false
        },
        {
          "text": "Nearside Steering pivot point has slight play  track rod inner joint (2.2.B.1g)",
          "type": "ADVISORY",
          "dangerous": false
        }
      ]
    },
    {
      "completedDate": "2016.03.11 10:05:17",
      "testResult": "FAILED",
      "odometerValue": "51370",
      "odometerUnit": "mi",
      "motTestNumber": "531810770480",
      "odometerResultType": "READ",
      "rfrAndComments": [
        {
          "text": "registration plate deteriorated but not likely to be misread  cracked (6.3.1d)",
          "type": "ADVISORY",
          "dangerous": false
        },
        {
          "text": "Offside Outer Front constant velocity joint gaiter insecure to the extent that it no longer prevents the ingress of dirt etc (2.5.C.1a)",
          "type": "FAIL",
          "dangerous": false
        },
        {
          "text": "Nearside Front Anti-roll bar linkage has excessive play in a ball joint (2.4.G.2)",
          "type": "FAIL",
          "dangerous": false
        },
        {
          "text": "Nearside Steering pivot point has slight play  track rod inner joint (2.2.B.1g)",
          "type": "ADVISORY",
          "dangerous": false
        },
        {
          "text": "Stop lamp excessively deteriorated so that it is not visible from a reasonable distance  ALL, when lights are turned off (1.2.1d)",
          "type": "FAIL",
          "dangerous": false
        }
      ]
    },
    {
      "completedDate": "2015.03.18 09:38:33",
      "testResult": "PASSED",
      "expiryDate": "2016.03.17",
      "odometerValue": "45198",
      "odometerUnit": "mi",
      "motTestNumber": "656687575023",
      "odometerResultType": "READ",
      "rfrAndComments": [
        {
          "text": "Front registration plate deteriorated but not likely to be misread (6.3.1d)",
          "type": "ADVISORY",
          "dangerous": false
        },
        {
          "text": "Nearside Front Tyre worn close to the legal limit (4.1.E.1)",
          "type": "ADVISORY",
          "dangerous": false
        },
        {
          "text": "Child seat fitted not allowing full inspection of adult belt",
          "type": "USER ENTERED",
          "dangerous": false
        }
      ]
    },
    {
      "completedDate": "2014.02.26 11:03:14",
      "testResult": "PASSED",
      "expiryDate": "2015.03.17",
      "odometerValue": "37934",
      "odometerUnit": "mi",
      "motTestNumber": "317767154056",
      "odometerResultType": "READ",
      "rfrAndComments": []
    },
    {
      "completedDate": "2013.03.13 12:01:40",
      "testResult": "PASSED",
      "expiryDate": "2014.03.17",
      "odometerValue": "30217",
      "odometerUnit": "mi",
      "motTestNumber": "495122473078",
      "odometerResultType": "READ",
      "rfrAndComments": []
    },
    {
      "completedDate": "2013.03.13 08:52:44",
      "testResult": "FAILED",
      "odometerValue": "30217",
      "odometerUnit": "mi",
      "motTestNumber": "615472573039",
      "odometerResultType": "READ",
      "rfrAndComments": [
        {
          "text": "Nearside Windscreen wiper does not clear the windscreen effectively (8.2.2)",
          "type": "FAIL",
          "dangerous": false
        },
        {
          "text": "Offside Windscreen wiper does not clear the windscreen effectively (8.2.2)",
          "type": "FAIL",
          "dangerous": false
        }
      ]
    },
    {
      "completedDate": "2012.02.20 11:09:33",
      "testResult": "PASSED",
      "expiryDate": "2013.03.17",
      "odometerValue": "21757",
      "odometerUnit": "mi",
      "motTestNumber": "479001952070",
      "odometerResultType": "READ",
      "rfrAndComments": []
    }
  ]
};

module.exports = router;
