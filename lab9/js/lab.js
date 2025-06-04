// lab.js this lab is about arrays and objects
// Author: Ty Brown and Zeya Hazelman
// Date: May 8 2025
/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
Requirements: jQuery must be loaded for this script to work.
*/

//append buttons

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

$("#problems").append("<button id='button-problems'>Make Special</button>");

$("#reflection").append("<button id='button-reflection'>Make Special</button>");


$("#button-challenge").click(function(){

$("#challenge").toggleClass("special");

});


$("#button-problems").click(function(){
  
$("#problems").toggleClass("special");
  
});


$("#button-reflection").click(function(){

$("#reflection").toggleClass("special");
   