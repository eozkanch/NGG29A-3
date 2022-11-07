/*Exercise 1 (p5js Editor)
JS | Part 1 | Exercises
Write code that multiplies two numbers (e.g., 11 and 26) without using the
multiplication operator.
At the end, write a console.log() that displays the result. */




let number1=11, number2=26, result=0, i;

for(i=1; i<=number2; i++)
{
  
  result=result+number1;
}

console.log(number1+"x"+number2+"="+result);






/*Exercise 2 (p5js Editor)
JS | Part 1 | Exercises
Write code, that tells whether you like certain fruits (e.g., Banana, Apple, Kiwi, Avocado,
Ananas, ...) and prints “I like <fruit>! :)” or “I don’t like <fruit>! :(” to the console,
depending on the result.
Do this using to different structures!*/






let fruit = prompt("Please enter your favorite fruit name.");

switch (fruit.toUpperCase()){
  case 'BANANA':
    console.log( "I like "+fruit+"!:)" );
    break;
  case 'APPLE':
    console.log( "I like "+fruit+"!:)" );
    break;
  case 'KIWI':
    console.log( "I like "+fruit+"!:)" );
    break;
   case 'AVOCADO':
    console.log( "I like "+fruit+"!:)" ); 
    break;
 case 'ANANAS':
    console.log( "I like "+fruit+"!:)" ); 
    break;
    default:
     console.log( "I don't like "+fruit+"!:(" ); 



/*Exercise 3 (p5js - Editor)
JS | Part 1 | Exercises
Evaluate a number on whether it is ... :
o ... even and greater than zero -> “<number> is even and greater than 0”
o ... even and smaller than zero -> “<number> is even and smaller than 0”
o ... uneven and greater than zero -> “<number> is uneven and greater than 0”
o ... uneven and smaller than zero -> “<number> is uneven and smaller than 0”
o ... zero -> “It’s a 0”*/



let number = prompt("Please enter a number!");


 if(number>0&& number%2==0){
  console.log(number+" is even and greater than 0")}

else if (number<0&& number%2==0){
  console.log(number+" is even and smaller than 0")}

else if (number>0&& number%2!=0){
  console.log(number+" is uneven and greater than 0")}

  else if (number<0&& number%2!=0){
  console.log(number+" is uneven and smaller than 0")}

else {
  console.log("It’s a 0")}
}
