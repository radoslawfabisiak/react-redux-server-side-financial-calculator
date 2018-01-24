var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var moment = require('moment');

var exampleData = require('./data/data.json');

var corsFix = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(corsFix);
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:500}));
var port = process.env.PORT || 8080;
var router = express.Router();
router.use(function(req, res, next) {
  next();
})

router.get('/', function(req, res) {
    res.json({ message: 'Api works!' });   
});

function formatData(days) {
  return moment(new Date()).add(days, 'days').format('DD.MM.YY');
}
router.route('/example-data')
  .post(function(req, res) {
    let data = {
      "amount": req.body.amount,
      "term": req.body.term,
      "fee": 250,
      "repay": 1250
    }
    if(req.body.term > 14) {
      data.fee = 250;
    } else {
      data.fee = 0;
    }
    data.repay = Number(req.body.amount) + Number(data.fee);
    data.repaymentDate = formatData(req.body.term);
    // console.log(req.body);
    res.json(data);

  })
  .get(function(req, res) {
    exampleData.repaymentDate = formatData(exampleData.term);
    res.json(exampleData);
  });

app.use('/', router);


app.listen(port);
console.log('Your api is working on: ' + port);
