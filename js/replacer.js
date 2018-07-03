var textBox =       document.getElementById("enter-text"),
    printButton =   document.getElementById("print-button"),
    clearButton =   document.getElementById("clear-button"),
    printArea =     document.getElementById("stuff-here");

printButton.addEventListener("click", function(){
  var text = textBox.value;
    printArea.innerText += "\n" + text;
});

clearButton.addEventListener("click",function(){
    printArea.innerHTML= "";

});



/* function pressEnter(){
 var enteredText = document.getElementById("enterText").value;
     document.getElementById("stuffHere").innerHTML = enteredText;
}


function clearStuff(){
     document.getElementById("stuffHere").innerHTML = "";
} */

