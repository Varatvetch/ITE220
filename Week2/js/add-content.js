var price;
var quantity;
var total;

price = 5000;
quantity = 14;
total =price * quantity;

//document.write("Total is"+total); 
var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent = "$" + total;