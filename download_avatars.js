var request = require('request');

var token_ID = require("./secrets")

console.log('Welcome to the GitHub Avatar Downloader!');

// var GITHUB_TOKEN = token_ID.GITHUB_TOKEN;

function getRepoContributors(repoOwner, repoName, cb) {

  // var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  // request.get(url, function(err, res, body) {
  //   cb(err, body);
  // });

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': token_ID.GITHUB_TOKEN
    }
  };

  console.log('options:', options);

  request.get(options, function(err, res, body) {
    cb(err, body);
  });
}



getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

// request.get('http://github.com').on('response', (response) => {
//   var data = '';
//   response.on('data', (d) => {
//     data += d;
//   });

//   response.on('end', () => {
//     console.log(data);
//   });
// });
