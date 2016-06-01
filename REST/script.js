var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + "532c2aaec4320d5794b1f66b643e48302499e647";
var userId = "HananCavalcante";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

//getYourRepos(userId);
//listBranches("HananCavalcante", "REU");
//createRepo("HananCavalcante");
//createIssue("HananCavalcante", "REU");

editRepo("HananCavalcante", "REU");

function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}

function listBranches(owner,repo)
{
	var options = {
		url: urlRoot + '/repos/' + owner+ "/" +repo +"/branches" ,
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});
}
	function createRepo(owner)
{
	var options = {
		url: urlRoot + "/user/repos",
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
			"name": "teste",
			"has_issues": "true"
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
			console.log(body);	
	});
	
}

function createIssue(owner,repo)
{
	var options = {
		url: urlRoot + '/repos/' + owner+ "/" +repo +"/issues" ,
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
			"title": "teste issue",
			
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
			console.log(body);	
	});
}

function editRepo(owner,repo)
{
	var options = {
		url: urlRoot + '/repos/' + owner+ "/" +repo,
		method: 'PATCH',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
			"name":repo,
			"description": "Testing edit",		
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
			console.log(body);	
	});

}

