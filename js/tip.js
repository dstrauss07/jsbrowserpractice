var billAmount = document.getElementById("bill-amount"),
    customTip = document.getElementById("tip-percentage"),
    customTipButton = document.getElementById("custom-tip"),
    fifteenPer = document.getElementById("fifteen-percent"),
    twentyPer = document.getElementById("twenty-percent"),
    twentyfivePer = document.getElementById("twentyfive-percent"),
    tipTotal = document.getElementById("tip-total"),
    billTotal= document.getElementById("bill-total");


    customTipButton.addEventListener("click", function(){
        var checkAmount = parseFloat(billAmount.value),
            tipPercentage = parseFloat(customTip.value)/100,
            tipAmountCustom = checkAmount *tipPercentage,
            totalAmount= checkAmount + tipAmountCustom;
            tipTotal.innerHTML = tipAmountCustom;
            billTotal.innerHTML = totalAmount;
    });


    fifteenPer.addEventListener("click",function(){
            tipCalc(fifteenPer);
    });
    twentyPer.addEventListener("click",function(){
        tipCalc(twentyPer);
    });
    twentyfivePer.addEventListener("click",function(){
        tipCalc(twentyfivePer);
    });

    var tipCalc = function tipCalc(button){
        var bill = billAmount.value;
        tipAmount = bill * button.value;
        tipTotal.innerHTML = tipAmount;
        billTotal.innerHTML = (1 * tipAmount) + (1 * bill);
    }