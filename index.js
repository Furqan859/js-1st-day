var b = document.getElementById('countdown');
var i = document.getElementById('background-image');


var a = b.innerHTML;


setInterval(function () {


   a = a > 0 ? a - 1 : 0;

   b.innerHTML = a;
   var x = a % 2 === 0 ? './pictures/1.jpg' : './pictures/2.jpg'
   i.src = x;
}, 1000);




























// var countdownElement = document.getElementById('countdown');
// var backImageElement = document.getElementById('bckground-image');

// var initialCountdownVal=countdownElement.innerHTML;


// setInterval(function() {
//     initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal-1:0;

//     CountdownVal=countdownElement.innerHTML
//     countdownElement.innerHTML = initialCountdownVal;
//    var  backImagePath = initialCountdownVal %2 === 0 ? './pictures/sign-up-straw.jpg': './pictures/strawberries.jpg'

//    backImageElement.src = backImagePath;
//    console.log('setInterval')
// } , 1000);