// IF STATEMENTS = If a condition is true, execute some code
//                 if not, do something else

        //EXAMPLE 1;
/*let age = 10;

if (age >= 18){
    console.log("You are old enough to access the site");
}

else{
    console.log("You must be 18+ to enter this site");
}
    */

      //EXAMPLE 2;

/*let time = 20;

if(time < 12){
    console.log("Good Morning");
}

else{
    console.log("Good afternoon");
}
    */

    //EXAMPLE 3 - With booleans
/*let isStudent = true;

if (isStudent){
    console.log("You are a student");
}

else {
    console.log("You are not a student");
}
    */

//     EXAMPLE 4 -WITH NESTSED IF 

/*let age = 18;
let hasLicense = true;

if(age >= 16){
    console.log( "You are old enough to drive ")


if(hasLicense){
    console.log("You have you license");
}
else{
    console.log("Get your license ");
}
}

else{
    console.log("You must be 16+ plus to have a license")
}
*/

//       EXAMPLE 5- ELSE IF STATEMENTS

const mytxt = document.getElementById("mytxt");
const mybtn = document.getElementById("mybtn");
const resultElement = document.getElementById("resultElement");


let age;

mybtn.onclick = function(){

    age = mytxt.value;
    age = Number(age);


if (age >=100){
    resultElement.textContent= `Are you Methusela sweetheart??`
}

else if(age >= 18){
    resultElement.textContent=`You are old enough to access the site`

}

else if (age < 0){
    resultElement.textContent= `That's definetly not your age`
}

else{
    resultElement.textContent= `Wait until it is your age`
}
}





