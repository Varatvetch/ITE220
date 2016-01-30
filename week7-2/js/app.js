//Alvin สอนนิดหน่อย
$(function(){
	selectedUnit = "";
 $(".cel").on("click", function(){
var reqUnit = $(".cel").html().toLowerCase();
selectedUnit = '&units=imperial';
}); 

$(".far").on("click", function(){
var reqUnit2 = $(".far").html().toLowerCase();
selectedUnit = '&units=metric';
});
//work
	$("a.city").on("click", function(e){ 
		e.preventDefault();
		var city = this.text.toLowerCase();	
			$.ajax({
				type: 'GET',
				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + selectedUnit + '&appid=3f12973bb7728cdbf393cd226bcd293f',
				
				success: function(data){ 						
					console.log(data.name);
					$("#result").html(data.name + ": " + data.main.temp);
					},
						complete: function(){ 
} 			
				});
	});
});