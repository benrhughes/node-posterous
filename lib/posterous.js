var http = require('http');
var qs = require('querystring');

var HOST = 'posterous.com';
var PATH = '/api/2/';


var Posterous = function(user, pass) {
  this._auth = 'Basic ' + new Buffer(user + ':' + pass).toString('base64');
  this._token = null;
};


Posterous.prototype.request = function(method, api, args, callback) {
  args = args || {};

  //Add the api token
  args.api_token = this._token;

  //Set up request options
  var path = PATH + api;
  var body = null;
  var headers = {
    Authorization: this._auth
  };

  if (method != 'GET') {
    body = qs.stringify(args);
    headers['Content-Length'] = body.length;
  } else {
    path = path + '?' + qs.stringify(args);
  }

  var reqOptions = {
    host: HOST,
    port: 80,
    method: method,
    path: path,
    headers: headers
  };

  //Make request to Posterous API
  var req = http.request(reqOptions, function apiRequest(res) {
    //Gather response
    var response = '';
    res.on('data', function apiResponse(d) {
      response += d.toString();
    });

    res.on('end', function endResponse(){
      var r = JSON.parse(response);

      if (r.error) {
        return callback(r.message || r.error);
      }

      callback(null, r);
    });
  });

  if (body) {
    req.write(body);
  }

  req.on('error', function reqError(e) {
    return callback('Problem with request: ' + e);
  });

  req.end();
};


//Get api token
Posterous.prototype.auth = function getAuthKey(callback) {
  var t = this;

  this.request('GET', 'auth/token', null, function(err, result) {
    if (err) {
      return callback(err);
    }

    //Save api token
    t.setToken(result.api_token);

    callback(null, result.api_token);
  });
};


//Users
Posterous.prototype.getUser = function getCurrentUser(callback) {
  this.request('GET', 'users/me', null, function(err, result) {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};


//Subscriptions


module.exports = Posterous;