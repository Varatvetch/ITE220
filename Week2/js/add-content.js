//var price;
//var quantity;
//var total;
				//new Date().getHours()
//price = 5000;
//quantity = 14;
//total =price * quantity;

//document.write("Total is"+total); 
//var totalPriceEle = document.getElementById("totalPrice");
//totalPriceEle.textContent = "$" + total;

var products =["T-Shirt", "Notebook", "Wristband"];
var price = [10, 5, 1];
var total = 0;
var total2 = 0;

var productList = document.getElementById("productList");//ชื่อตัวเชื่อม
productList.innerHTML += "<li>" +products[0] + ": $" + price[0]+"</li>";

var productList = document.getElementById("productList");
productList.innerHTML += "<li>" +products[1] + ": $" + price[1]+"</li>";

var productList = document.getElementById("productList");
productList.innerHTML += "<li>" +products[2] + ": $" + price[2]+"</li>";

total = (price[0]+price[1]+price[2])*(80/100);

var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent = "$" + total;

