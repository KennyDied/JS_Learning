document.getElementById('entry').onclick = function () {
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;
	let out = document.getElementById('out');
	var snd = new Audio("audio/bababooey-sound-effect.mp3");

	if (login === 'Danila' && password === '12211234' || login === 'Olesya' && password === '1928') {
		out.innerHTML = 'Welcome';
	}
	else {
		out.innerHTML = 'Bababoi';
		snd.play();
		snd.currentTime=0;
	}
}