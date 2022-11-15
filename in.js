function bir(){

    let element=document.getElementById('Text');

    let value=element.innerHTML;

    ++value ;
    console.log(value);
    document.getElementById('Text').innerHTML=value;

}


function show(){


    document.getElementById("increment1").style.height="100px"
    document.getElementById("increment1").style.display="block"
    document.getElementById("show").style.display="none"


}

function hide(){


    document.getElementById("increment1").style.height="0px"
    document.getElementById("increment1").style.display="none"
    document.getElementById("show").style.display="inline"


}

function circle(){
let n=prompt("Please enter the half diameter of the circle you want to calculate in meters.")
let pi=3.14;
let r=(n*n*pi)
console.log(r + "square meters")
alert(r + "  square meters")
}


function b(){
    let b;
    let num1=prompt("Please enter first number");
    
    let num2=prompt("Please enter second number");
    let lN = (num1 < num2) ? num1 : num2;
    
    for(let i = lN; i > 0; i--){
        if((num1%i == 0) && (num2%i == 0)){
            b = i;
            break;
        }
    }



    console.log("greatest common multiple of: " + b );
    alert("greatest common multiple of: " + b );
}

function l(){
   
    let num1=prompt("Please enter first number");
    let l;
    let b;
    let num2=prompt("Please enter second number");
    let lN = (num1 < num2) ? num1 : num2;
    
    for(let i = lN; i > 0; i--){
        if((num1%i == 0) && (num2%i == 0)){
            b = i;
            break;
        }
    }

    l = (num1 * num2) /b;

    console.log("least common multiple : " + l )
    alert("least common multiple : " + l );
    
}