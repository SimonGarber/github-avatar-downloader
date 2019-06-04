var request = require('request');

var token_ID = require("./secrets")

console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {



  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      // created a variable that hides the actual token in token_ID as a property of GITHUB_Token in the
      // secrets.js file
      'Authorization': token_ID.GITHUB_TOKEN
    }
  };

  console.log('options:', options);

  request.get(options, function(err, res, body) {
    cb(err, body);
  });
}

function print_avatars(err,body){
  var print_URL = JSON.parse(body);
  for(var URL of print_URL){
    console.log(URL.avatar_url);
  }
}

getRepoContributors("jquery", "jquery", print_avatars);


