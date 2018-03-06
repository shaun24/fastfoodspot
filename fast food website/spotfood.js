
var menuItems = {
    twoPiece: document.getElementById("twoCombo"),
    breast: document.getElementById("cbCombo"),
    threePiece: document.getElementById("threeCombo"),
    dinnerPlate: document.getElementById("dinnerPlate")

}

var valueHolder = 0;

// function setPrice(){
// var add = menuItems.twoPiece.value + menuItems.threePiece.value;
// var combine = parseInt(add);

// console.log(combine)

// }

// twoCombo.onclick = function() {
// var 
// }

// function currencyAdd() {

// var valueHolder = valueHolder + value;
// var value = menuItems.value
// $("#twoCombo").click(function(){

//   $("#dollar").text(valueHolder);
//   console.log(valueHolder);
// })
// }

// currencyAdd();

var theTotal = 0;
$('button').click(function(){
   theTotal = Number(theTotal) + Number($(this).val());
   theTotal.toPrecision(2);
   taxAdd = (theTotal * .08);
   totalAmount = theTotal + taxAdd;
    $('#dollar').text(theTotal);
    $('#tax').text(taxAdd);
    $('#total').text(totalAmount);        
});

$('#dollar').text(theTotal);   
$('#tax').text(taxAdd);
$('#total').text(totalAmount); 