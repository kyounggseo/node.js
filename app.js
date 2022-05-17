/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

var express = require('express')
, http = require('http')
, path = require('path'); // Express의 미들웨어 불러오기

var bodyParser = require('body-parser')
, cookieParser = require('cookie-parser')
, static = require('serve-static')
, errorHandler = require('errorhandler'); // 오류 핸들러 모듈사용

var expressErrorHandler = require('express-error-handler'); // Session 미들웨어불러오기

var expressSession = require('express-session'); // 익스프레스 객체 생성

var app = express();