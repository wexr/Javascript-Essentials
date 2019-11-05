// const MYCONSTANT = 5;
// console.log(MYCONSTANT);
// MYCONSTANT = 6;

function logScope(){
    var localVar = 2;
    
    if(localVar){
        // block variable (let)
        let localVar = "I'm different";
        console.log("nested localVar: ", localVar);
        
    }
    

    console.log("logscope localVar: ", localVar);
    
}

logScope();