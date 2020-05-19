var buttons = document.getElementsByClassName("button");
var disp = document.getElementById("display");

var opd1 = 0;
var opd2 = null;
var operator = null;

function isOperator(value){
    return value == "+" || value == "-" || value == "*" || value == "/" ;
}

for(var i=0;i<buttons.length;i++){
  buttons[i].addEventListener('click',function(){

      var value = this.getAttribute('data-value');
      var text = disp.textContent.trim();
      
       if(isOperator(value)){
           operator = value;
           opd1 = parseFloat(text);
           disp.textContent = "";
       }else if(value == "ac"){
           disp.textContent = "";
       }else if(value == "sign"){
           opd1 = parseFloat(text);
           opd1 = -1 * opd1;
           disp.textContent = opd1;
       }else if(value == "%"){
           opd1 = parseFloat(text);
           opd1 = opd1/100;
           disp.textContent = opd1; 
       }else if(value == "."){
           if(text.length && !text.includes(".")){
               disp.textContent  = text + ".";
           }
       }else if(value == "="){
           opd2 = parseFloat(text);
           var result = eval(opd1 + " " + operator + " "+opd2);
           if(result){
               disp.textContent = result;
               opd1 = result;
               opd2 = null;
               operator = null;
           }
       }else{
           disp.textContent += value;
       }
  });
}
