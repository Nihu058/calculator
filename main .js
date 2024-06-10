let input = document.getElementById(".display");
let buttons =document.querySelectorAll( "button");
const specialchars =["%", "*","-","+","="];
let output="";
// define the funcation to calculate based on button clicked.
const calculate =(btnvaluse) =>{
    if(btnvaluse==="="&& btnvaluse !==""){
        //IF OUTPUT HAS % REPLACE WITH /100 BEFORE EVLUATING
        output= eval(output.replace("%","/100"));

    }
    else if (btnvaluse ==="AC"){
        output=""
    }else if(btnvaluse ==="DEL"){
        output=""
     // if DEL button is click , remove the last  charcter from the output.
     output = output.toString().slice(0, -1);
    }else{
    //if output is empty and button is specialchar then return
    if( output ==="" && specialchars.includes(btnvaluse))return;
    output += btnvaluse;
    }
    display.value = output;

};
// add event listener to buttons, call calculate() on click
buttons.forEach((button) => {
     button.addEventListener("click",(e) => calculate (e.target.dataset.value));
});