const express = require("express");
const requests = express();
var http = require('http');                      //added p to http
var myips;                                      //created var myips
var myname = "Here is my ip address";           //changed from a function 
  async function callHttpbin() {                //added n to callHttpbin
    let promise = new Promise((resolve, reject) => {
      http.get(
       'http://httpbin.org/ip',
       function(response) {
        var str="";
        response.setEncoding('utf8');
        response.on('data', function(data){
        str += data;
       });
       response.on('end', function() {
        var result = JSON.parse(str);
        myips = result.origin;
        resolve()
       });
       }
      );
  });
  
  let result = await promise;
  result;
  }

executeAsyncTask()                      // execute function
  async function executeAsyncTask(){  //added async
    await callHttpbin()                 //execute callHttpbin with await
    const valueA = myips;               //changed valueA to variable myips
    const valueB = myname;              //changed valueB to variable myname
    console.log(valueB+" "+valueA)} //added }

  module.exports = requests;