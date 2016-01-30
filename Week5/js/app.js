$(function(){
	var app = {
		init: function() {
			app.init_effect(); // ฟังชั่นอ่านตัวด้านใน ตามชื่อเลย
			app.init_event(); //
		},
		init_effect: function() {
			$("#head_tagline").height(200); //#อ่าน id  .อ่าน class
			$("#head_tagline>h1").hide().fadeIn(700);   //อ่าน headtag h1
			$("#head_tagline>p:first").hide().delay(700).fadeIn(700);
			$("#head_tagline>p:last").hide();
			$("#head_tagline>a").hide().delay(1400).fadeIn(700);
		},
		init_event: function() {
		$("#head_tagline>a:first").on("click", function(){
		$("#head_tagline>p:last").fadeIn(700);	
		$("#head_tagline").height(300);
		});
			$("#head_tagline>a:last").on("click", function(){
		$("#head_tagline>p:last").hide(700);	
		});
		
	
		}
		
	};
	app.init();
});
