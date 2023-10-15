var text  = "globalText";

function fun(){
    var text = "functionText";
    console.log(text);
}

console.log(text);  //globalText
fun();    //functionText
console.log(text);  //globalText

/*
globalText
functionText
globalText
*/
