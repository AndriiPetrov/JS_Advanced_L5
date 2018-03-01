var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");

var sum = document.getElementById("+");
var sub = document.getElementById("-");
var mul = document.getElementById("*");
var div = document.getElementById("/");

pattern = /\d/;

text1.addEventListener("keypress", function(e){
    var str = String.fromCharCode(e.charCode);
    if(!pattern.test(str)){
        e.preventDefault();
    }
});

text2.addEventListener("keypress", function(e){
    var str = String.fromCharCode(e.charCode);
    if(!pattern.test(str)){
        e.preventDefault();
    }
}, false);

// text1.addEventListener("keypress", function(e){
//     if (String.fromCharCode(e.charCode) != '0'
//         && String.fromCharCode(e.charCode) != '1'
//         && String.fromCharCode(e.charCode) != '2'
//         && String.fromCharCode(e.charCode) != '3'
//         && String.fromCharCode(e.charCode) != '4'
//         && String.fromCharCode(e.charCode) != '5'
//         && String.fromCharCode(e.charCode) != '6'
//         && String.fromCharCode(e.charCode) != '7'
//         && String.fromCharCode(e.charCode) != '8'
//         && String.fromCharCode(e.charCode) != '9')
//         e.preventDefault();
    
// },false)

// text2.addEventListener("keypress", function(e){
//     if (String.fromCharCode(e.charCode) != '0'
//         && String.fromCharCode(e.charCode) != '1'
//         && String.fromCharCode(e.charCode) != '2'
//         && String.fromCharCode(e.charCode) != '3'
//         && String.fromCharCode(e.charCode) != '4'
//         && String.fromCharCode(e.charCode) != '5'
//         && String.fromCharCode(e.charCode) != '6'
//         && String.fromCharCode(e.charCode) != '7'
//         && String.fromCharCode(e.charCode) != '8'
//         && String.fromCharCode(e.charCode) != '9')
//         e.preventDefault();
    
// },false)

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