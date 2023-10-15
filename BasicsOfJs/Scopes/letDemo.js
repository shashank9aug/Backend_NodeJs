{
    let x = 4
    console.log(x);
}

// console.log(x);

// 4
// C:\Users\Shashank Shekhar\Desktop\Backend_NodeJs
// \BasicsOfJs\Scopes\letDemo.js:6
// console.log(x);


function fun(){
    // console.log(y);
    /**
     *  console.log(y);
            ^
        ReferenceError: Cannot access 'y' before initialization
     */

    let y = 10;
    console.log(y);
}

fun();
// console.log(y)
// ReferenceError: y is not defined



