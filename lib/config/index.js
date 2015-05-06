'use strict';

var Secrets;

try {
  Secrets = require('./secrets');
} catch(ex){

}


var env = process.env.NODE_ENV || 'development';

var common = {
  FIREBASE_SECRET: Secrets ? Secrets.FIREBASE_SECRET : process.env.FIREBASE_SECRET,
  FIREBASE_EXPIRE: 24
};

var environments = {
  development: {
    PORT: 8000,
    MONGO_URL: 'mongodb://localhost/roadtrip-dev'
  },
  test: {
    PORT: 0,
    MONGO_URL: 'mongodb://localhost/roadtrip-test'
  },
  production: {
    PORT: process.env.PORT || 0,
    MONGO_URL: 'mongodb://heroku_app36605995:tmh67np21qejt7qqe7sj1rv78k@ds031822.mongolab.com:31822/heroku_app36605995'
  }
};

var environment = environments[env];

Object.keys(common).forEach(function(key){
  environment[key] = common[key];
});

console.log('Environment: ', environment);
exports.environment = environment;
