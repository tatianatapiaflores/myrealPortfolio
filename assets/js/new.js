function newStyle() {
	let Color = '';
	let Font = '';
	let x = Math.floor(Math.random()*4);
	switch (x){
		case 0: 
		    Color = 'blue';
		    Font = 'Times New Roman';
		break;
		case 1:
			Color = 'red';
			Font = 'Georgia';
		break;
		case 2:
			Color = 'purple';
			Font = 'Impact';
		break;
		case 3:
			Color = 'green';
			Font = 'Courier New';
		break;
	}
		var elem = document.getElementById('myTitle');
		elem.style.color = Color;
		elem.style.fontFamily = Font;
	};