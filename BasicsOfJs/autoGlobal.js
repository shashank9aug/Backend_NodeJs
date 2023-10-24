var name = "shashank";

function fun(){
    var name = "shekhar";

// console.log(name,secondName); //shekhar errorconsole.log(name,secondName); //shekhar
// ^
// ReferenceError: secondName is not defined
    
    secondName = "ssss";
    console.log(name,secondName); //shekhar ssss

    // secondName = "ssss";
/*
console.log(name,secondName); //shekhar ssss
                    ^
ReferenceError: secondName is not defined
*/
}

function gun(){
    console.log(subject); //undefined -> scope has been declared while parsing the code but value undefined.
    var subject = "maths";
    console.log(subject); //maths
    fun();
}

console.log(name); //shashank
gun();

/**
shashank
undefined
shashank

*/




