var val = "globalScope";

function fun(){
    var val = "insidefunction";
    text2 = "findscope";
    console.log(val);
    console.log(text2);
}

fun();
console.log(val);
console.log(text2);