function findBiggestFraction(a, b){    
    // Ternary if statement
    a>b ? console.log("a: ", a) : console.log("b: " + b);

    // Normal if statement
    if(a > b){
        console.log("a: " + a);
      } else{
          console.log("b: " + b);
      }  
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction(firstFraction, secondFraction);
findBiggestFraction(7/16, 13/25);