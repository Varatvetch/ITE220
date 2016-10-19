var menuState = {
	 create: function() { 
	 if (!game.device.desktop) {
game.input.onDown.add(this.start, this);
}
	 game. add.image(0,0, 'background');
	// var nameLabel = game.add.text(game.width/2, 80, 'Super Coin Box', { font: '50px Arial', fill: '#ffffff'});
	// nameLabel.anchor.setTo(0.5, 0.5);
	 

	
	 var scoreLabel = game.add.text(game.width/2, game.height/2, 'Score ' + game.global.score, { font: '25px Arial', fill: '#ffffff'});
	 scoreLabel.anchor.setTo(0.5, 0.5);
	 
	 var text;
if (game.device.desktop) {
text = 'press the up arrow key to start';
}
else {
text = 'touch the screen to start';
}
var startLabel = game.add.text(game.width/2, game.height-80, text, { font: '25px Arial', fill: '#ffffff' }); startLabel.anchor.setTo(0.5, 0.5);
	game.add.tween(startLabel).to({angle: -2}, 500) .to({angle: 2}, 1000).to({angle: 0}, 500).loop().start();
	 
	 var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	 upKey.onDown.add(this.start, this);
	 
	 
	var nameLabel = game.add.text(game.width/2, -50, 'Super Coin Box', { font: '50px Arail', fill: '#ffffff'});
	 nameLabel.anchor.setTo(0.5, 0.5);
	 var tween = game.add.tween(nameLabel);
	 tween.to({y: 80}, 1000);
	 tween.start();
	  game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
	
	var tween = game.add.tween(startLabel);
	tween.to({angle: -2}, 500);
	tween.to ({angle: 0}, 500);
	tween.loop();
	tween.start();
	 },
	 start: function(){
		 if (!game.device.desktop && game.input.y < 50 && game.input.x < 60) {
// It means we want to mute the game, so we don't start the game
return;
}
		 game.state.start('play');
	 },
};