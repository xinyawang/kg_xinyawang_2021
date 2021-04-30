
var arguments = process.argv;

var dataList = [];

//console.log(arguments.length)
if (arguments.length < 3) {
    console.log("The arguments is invalid!");
    return;
}
for (var i = 2; i < arguments.length; i++) {
    dataList.push(arguments[i])
}

var resultList = [];
for (var i = 0; i < dataList.length; i++) {
    //console.log(dataList[i])
    var intValue = dataList[i].toString();
    var strValue = "";
    //console.log(intValue.length);
    for (var j = 0; j < intValue.length; j++) {
        //console.log(intValue.charAt(j));
        if (intValue.charAt(j) == '0')
            strValue = strValue + "Zero";
        else if (intValue.charAt(j) == '1')
            strValue = strValue + "One";
        else if (intValue.charAt(j) == '2')
            strValue = strValue + "Two";
        else if (intValue.charAt(j) == '3')
            strValue = strValue + "Three";
        else if (intValue.charAt(j) == '4')
            strValue = strValue + "Four";
        else if (intValue.charAt(j) == '5')
            strValue = strValue + "Five";
        else if (intValue.charAt(j) == '6')
            strValue = strValue + "Six";
        else if (intValue.charAt(j) == '7')
            strValue = strValue + "Seven";
        else if (intValue.charAt(j) == '8')
            strValue = strValue + "Eight";
        else if (intValue.charAt(j) == '9')
            strValue = strValue + "Nine";
        else
            strValue = strValue + intValue.charAt(j);
    }
    resultList.push(strValue)
}

var outputStr = "";
for (var i = 0; i < resultList.length - 1; i++) {
    outputStr = outputStr + resultList[i] + ","
}
if (resultList.length > 0)
    outputStr = outputStr + resultList[resultList.length - 1];

console.log(outputStr);