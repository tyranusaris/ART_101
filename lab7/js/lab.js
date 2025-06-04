// lab.js this lab is about arrays and objects
// Author: Ty Brown and Zeya Hazelman
// Date: April 28 2025

//Create an function
function sortUserName () {
  var userName = window.prompt("Type your name for magic!");
  console.log("userName =", userName);
  //split string into array
  var nameArray = userName.split(" ");
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log ("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log ("nameSorted =", nameSorted);
  //return the name
  return nameSorted;
}

//output
document.writeln("Voila! Here is your magic name: ",
  sortUserName(), "</br>");