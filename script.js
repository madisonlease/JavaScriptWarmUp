//isOldEnoughToVote
function isOldEnoughToVote(age) {
    if (age>=18){
        return true;
    }else{
        return false;
    }
}

//getProperty
function getProperty(obj, key) {
    if (key==""){
        return "undefined";
    }else{
        return obj.key;
    }
}

//addProperty
function addProperty(obj, key) {
    obj[key]=true;
}

//removeProperty
function removeProperty(obj, key) {
    delete obj[key];
}

//isEven
function isEven(num) {
    if(num%2===0){
        return true;
    }else{
        return false;
    }
}

//isOdd
function isOdd(num) {
    if(num%2===0){
        return false;
    }else{
        return true;
    }
}

//addToFront
function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}

//addToBack
function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

//joinArrays
function joinArrays(arr1, arr2) {
    for (var i=0; i<arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

//getAllWords
function getAllWords(str) {
    if (str===""){
        arr=[];
    }else{
        arr=str.split(" ");
    }
    return arr;
}

//extend
function extend(obj1, obj2) {
    for (var key in obj2){
        if (!obj1.hasOwnProperty(key)){
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

//removeStringValues
function removeStringValues(obj) {
    for (var key in obj){
        if (typeof obj[key]==="string"){
            delete obj[key];
        }
    }
}

//getIndexOf
function getIndexOf(char, str) {
    for (var i=0; i<str.length; i++){
        if (i===str.length-1 && str[i]!==char){
            return -1;
        }else if (str[i]==char){
            return i;
        }
    }
}

//keep
function keep(array, keeper) {
    output=[];
    for (var i=0; i<array.length; i++){
        if (array[i]==keeper){
            output.push(keeper);
        }
    }
    return output;
}

//getLargestElementAtProperty
function getLargestElementAtProperty(obj, key) {
    if (obj[key]!=="" && Array.isArray(obj[key]) && obj[key].length!==0){
        var arr=obj[key];
        var largestNum=0;
        for (var i=0; i<obj[key].length; i++){
            if (obj[key][i]>largestNum){
                largestNum=obj[key][i];
            }
        }
        return largestNum;
    }else{
        return undefined;
    }
}


//calculateBillTotal
function calculateBillTotal(preTaxAndTipAmount) {
    var tax = preTaxAndTipAmount*.095;
    var tip = preTaxAndTipAmount*.15
    return preTaxAndTipAmount + tax + tip;
}

//sumDigits
function sumDigits(num) {

    var numString = num.toString();
    var sum = 0;

    if (num>=0){
        for (var i=0; i<numString.length; i++){
            sum += parseInt(numString[i]);
        }
        return sum;
    }else{
        sum-=parseInt(numString[1]);
        for (var i=2; i<numString.length; i++){
            sum += parseInt(numString[i]);
        }
        return sum;
    }
}

//Object To Array [Part 2] (listAllValues)
function listAllValues(obj) {
    var arr=[]
    for (var key in obj){
        arr.push(obj[key]);
    }
    return arr;
}

//detectOutlierValue
function detectOutlierValue(string){
    arr=string.split(" ");
    var evens = 0;
    var odds = 0;
    for (var i=0; i<arr.length; i++){
        if (parseInt(arr[i])%2===0){
            evens++;
        }else{
            odds++;
        }
    }
    if (odds > evens){
        for (var m=0; m<arr.length; m++){
            if (parseInt(arr[m])%2===0){
                return m+1;
            }
        }
    }else{
        for (var g=0; g<arr.length; g++){
            if (parseInt(arr[g])%2!==0){
                return g+1;
            }
        }
    }
}


//search with Divide and Conquer
function search(array, value) {

    var start=0;
    var stop= array.length-1;
    var mid=Math.floor((start+stop)/2);

    while (array[mid] !== value && start < stop){

        if (value < array[mid]){
            stop=mid;
        }else{
            start=mid;
        }

        mid=Math.floor((start+stop)/2);

    }

    return (array[mid]!==value) ? null:mid;

}

