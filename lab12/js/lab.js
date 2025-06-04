// lab.js this lab is about arrays and objects
// Author: Ty Brown and Zeya Hazelman
// Date: May 20 2025
/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
*/

function sortNameInto(num){
  

  let remainer=num%4;
  
  
  
  if(remainer==0){
    
    answer="you are house Tyrell"
  }
  else if(remainer==1){
    
    answer="you are house Stark"
  }
  else if(remainer==2){
    
    answer="you are hous Baratheon"
  }
  
  else if (remainer==3){
    
    answer="you are house Targaryen"
  }
  
  
  return answer;
  
}



$("#button").click(
  function(){
    
  let name=$("#factor1").val();
  console.log(name); 
  let num=name.length;
    console.log(num);
    
 
    if(num>20)  {
      $("#output").html("too much");
      
    
    }
    else if(num>0) {
      let result=sortNameInto(num);
      $("#output").html(result);
      
    }
    else {
      
      $("#output").html("please say something");
    }
    
    
  }
)