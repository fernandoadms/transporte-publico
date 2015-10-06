/////////////////////////////////////////////////////////////////////////////////////////////////////////
//  CALCULATE SPENT DAY AND MONTH
/////////////////////////////////////////////////////////////////////////////////////////////////////////
var spendingOnTransport = function() {
    var tax = 3.5;
    var subway = document.getElementById("subway").value;
    var bus = document.getElementById("bus").value;
    var spentDay = (subway * tax) + (bus * tax);
    var spentMonth = spentDay * 22;
    // return spentMonth;
    console.log(spentMonth);
};