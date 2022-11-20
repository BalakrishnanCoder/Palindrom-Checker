

// take a string from the user  
document.getElementById('check_btn').onclick =
function check(){
    var input = document.getElementById('input').value;  
    console.log(input);
    document.getElementById('result').style.visibility = 'visible';
     
// convert the string into an array using the string.split() function  
const arrValue = input.split (''); //   
  
// use reverse() method to reverse the array values  
const reveArrVal = arrValue.reverse();   
  
// use join() method to group the array values into the string  
const revString = reveArrVal.join('');  
  
if (input == revString) // if string condition is equal to the revString  
{  
    result.innerText = "Ya :)  it's a Palindrom"; // print the Palindrome   
}  
else {  
    result.innerText = "OOPS!  it's not a Palindrom";// if the condition is not true.';  
}  
}
   
    
