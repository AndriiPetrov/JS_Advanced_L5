var Module = {};

Module.createHandler = function(element, event, handler, capture){
    if(window.addEventListener){
        element.addEventListener(event, handler, capture);
    }
    else if(window.attachEvent){
        element.attachEvent("on"+element,event);
    }
}

Module.createHandler(window, "load", handler, false);

function handler(){
    alert("Hello");
}