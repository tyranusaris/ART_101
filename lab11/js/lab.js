// lab.js this lab is about arrays and objects
// Author: Ty Brown and Zeya Hazelman
// Date: May 20 2025
/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
*/


// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){

// get value of input field
const userName = $("#userinput").val();

// now let's sort it
userNameSorted = sortString(userName);

// append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

});
