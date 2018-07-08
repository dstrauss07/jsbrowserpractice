var userName = document.getElementById("user-name"),
    makeButton = document.getElementById("make-sentence"),
    clearButton = document.getElementById("clear-button"),
    resultsArea= document.getElementById("sentences"),
    phrases1 = ["Once upon a time",
"In a small village by the sea",
"In a world, dominated by elves",
"it was the best of the times it was the worst of times",
"In a galaxy far far away"],

    phrases2 = ["lived someone named",
"a horrible man named",
"a hideous beast named",
"a beautiful princess named",
"a dark and evil Sorcerer,",
"the last man on earth called"],
phrases3 = ["who ate a ",
"jumped off a ",
"wanted to rule the ",
"had a ",
"swam into a ",
"loved "],
phrases4 = ["dragon ",
"sandwich",
"cliff",
"butthole",
"world",
"pub"];


var getPhrase = function getPhrase(wordList){
    var randy = getRandomNumber(0,wordList.length - 1);
    return wordList[randy];
}

makeButton.addEventListener("click",function(){
    var results= getPhrase(phrases1);
    results += " " +  getPhrase(phrases2);
    results += " " + userName.value;
    results += " " +  getPhrase(phrases3);
    results += " " +  getPhrase(phrases4) + ".";
    resultsArea.innerHTML += '<p class="random-sentence">' + results + "</p>";
});

clearButton.addEventListener("click",function(){
    resultsArea.innerHTML= "";
    userName.value = "";
});

var getRandomNumber = function getRandomNumber(min, max){
    min  = Math.ceil(min);
    max = Math.floor(max);
    var randy = Math.random();
   /* console.log(min);
    console.log(max);
    console.log(randy);
    console.log(max-min);
    console.log(max-min+1);
    console.log(randy * (max-min+1));
    console.log(randy * (max-min +1)+min);
    console.log(Math.floor(randy * (max-min +1)+min)); */
    return Math.floor(randy * (max-min +1)+min);
}