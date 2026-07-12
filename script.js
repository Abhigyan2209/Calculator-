let display = document.getElementById("display");

let buttons = document.querySelectorAll(".buttons button");

let historyList = document.getElementById("historyList");

let themeBtn = document.getElementById("themeBtn");



// calculator

buttons.forEach(btn=>{


btn.addEventListener("click",()=>{


let value = btn.innerText;



if(value=="☀️ Light"){
return;
}



if(value=="C"){

display.value="";

}


else if(value=="⌫"){

display.value =
display.value.slice(0,-1);

}



else if(value=="="){


try{


let exp = display.value;


exp = exp.replace(/(\d+)%/g,"($1/100)");


let ans = eval(exp);


display.value=ans;


addHistory(exp+" = "+ans);


}

catch{

display.value="Error";

}



}



else{


let last = display.value.slice(-1);


let operators = ["+","*","/","%"];


let numbers = display.value.split(/[+\-*\/%()]/);

let lastNumber = numbers[numbers.length-1];



// first operator not allowed except -

if(display.value=="" && operators.includes(value)){

return;

}



// avoid double operators

if(operators.includes(last) && operators.includes(value)){

return;

}



// 10 digit limit

if(!operators.includes(value) && value!="-" && lastNumber.length>=10){

return;

}


display.value += value;


}



});


});




// history

function addHistory(text){


if(historyList.children[0].innerText=="No calculations yet"){

historyList.innerHTML="";

}


let li=document.createElement("li");


li.innerText=text;


historyList.prepend(li);



if(historyList.children.length>10){

historyList.removeChild(historyList.lastChild);

}


}




// dark light mode

themeBtn.onclick=function(){


document.body.classList.toggle("light");


if(document.body.classList.contains("light")){

themeBtn.innerText="🌙 Dark";

}

else{

themeBtn.innerText="☀️ Light";

}


}