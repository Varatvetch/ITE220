var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	location: window.location.pathname,
	width: window.innerWidth,
	height: window.innerHeight,
	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;
		ele = document.getElementById("sy");
		ele.value = this.screenY;
		ele = document.getElementById("ss");
		ele.value = this.width;
		ele = document.getElementById("sg");
		ele.value = this.height;
	}
};

myWindow.render();