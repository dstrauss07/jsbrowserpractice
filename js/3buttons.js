var enterText = document.getElementById("enter-text"),
howdyButton = document.getElementById("howdy"),
whatButton = document.getElementById("what"),
byeButton = document.getElementById("bye"),
getButton = document.getElementById("get"),
textArea = document.getElementById("text-area");

howdyButton.addEventListener("click",function(){
    greet(howdyButton)
});


whatButton.addEventListener("click",function(){
    greet(whatButton)
});

byeButton.addEventListener("click",function(){
    greet(byeButton)
            });


getButton.addEventListener("click",function(){
         greet(getButton)
            });

var greet = function greet(button){
    var text= enterText.value;
    textArea.innerHTML = button.value + " " +text + "!";
};