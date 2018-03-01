var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");

var sum = document.getElementById("+");
var sub = document.getElementById("-");
var mul = document.getElementById("*");
var div = document.getElementById("/");

sum.onclick = function(){
    text3.value = parseFloat(text1.value) + parseFloat(text2.value);
};

sub.onclick = function(){
    text3.value = parseFloat(text1.value) - parseFloat(text2.value);
};

mul.onclick = function(){
    text3.value = parseFloat(text1.value) * parseFloat(text2.value);
};

div.onclick = function(){
    if(parseFloat(text2.value) == 0){
        alert("na 0 delite nelza")
    }
    else{
        text3.value = parseFloat(text1.value) / parseFloat(text2.value);
    }
}

sum.addEventListener("click", function(){
    text3.value = parseFloat(text1.value) + parseFloat(text2.value);
},false);

sub.addEventListener("click", function(){
    text3.value =parseFloat(text1.value) - parseFloat(text2.value);
},false);

mul.addEventListener("click", function(){
    text3.value = parseFloat(text1.value) * parseFlat(text2.value);
}, false);

div.addEventListener("click", function(){
    if(parseFloat(text2.value)==0){
        alert("na 0 delit nelza");
    }
    else{
        text3.value = parseFloat(text1.value) / parseFloat(text2.value);
    }
}, false);