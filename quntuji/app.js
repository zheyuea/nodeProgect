var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bodyParserXml = require('body-parser-xml')(bodyParser);

var config = require('./common/config');
var app = express();
var api = express();
var mongoose = require("./common/mongoose");
var db = mongoose();


var index = require('./routes/index');
var users = require('./routes/users');
var albums = require('./routes/albums');
var flocks = require('./routes/flocks');
var pics = require("./routes/pics");
var service = require("./routes/service");
var admin = require("./routes/admin");
var test = require("./routes/test");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//微信小程序session服务
var weapp = require("./common/weapp/weapp");
app.use(weapp());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 解决微信支付通知回调数据
app.use(bodyParser.xml({
	limit: '2MB', // Reject payload bigger than 1 MB
	xmlParseOptions: {
		normalize: true, // Trim whitespace inside text nodes
		normalizeTags: true, // Transform tags to lowercase
		explicitArray: false // Only put nodes in array if >1
	}
}));

app.use('/', index);
app.use('/1.0', api);
api.use('/users', users);
api.use('/albums',albums);
api.use('/flocks',flocks);
api.use("/pics",pics);
api.use("/service",service);
api.use("/admin",admin);
api.use("/test",test);
//设置代理
app.set('trust proxy',true);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
