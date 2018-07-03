var enterText = document.getElementById("enter-text"),
howdyButton = document.getElementById("howdy"),
whatButton = document.getElementById("what"),
byeButton = document.getElementById("bye"),
getButton = document.getElementById("get"),
textArea = document.getElementById("text-area");

howdyButton.addEventListener("click",function(){
var text = enterText.value;
textArea.innerText = "Howdy " + text;
});

whatButton.addEventListener("click",function(){
    var text = enterText.value;
    textArea.innerText = "What You Want " + text + "?";
    });

byeButton.addEventListener("click",function(){
        var text = enterText.value;
        textArea.innerText = "Bye Bye " + text;
        });

getButton.addEventListener("click",function(){
            var text = enterText.value;
            textArea.innerText = "Get Out " + text + "!";
            });