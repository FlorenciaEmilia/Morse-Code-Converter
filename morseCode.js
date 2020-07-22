let formInput = document.getElementById('morse-form');
formInput.addEventListener('submit', translateText);

let textInput = document.getElementById('regularText');
let textOutput = document.getElementById('translation');
let submitBtn = document.getElementById('submit');

let morseCode = {
	A: {
		code: '.-',
		sound: 'sounds/a.wav'
	},
	B: {
		code: '-...',
		sound: 'sounds/b.wav'
	},
	C: {
		code: '-.-.',
		sound: 'sounds/c.wav'
	},
	D: {
		code: '-..',
		sound: 'sounds/d.wav'
	},
	E: {
		code: '.',
		sound: 'sounds/e.wav'
	},
	F: {
		code: '..-.',
		sound: 'sounds/f.wav'
	},
	G: {
		code: '--.',
		sound: 'sounds/g.wav'
	},
	H: {
		code: '....',
		sound: 'sounds/h.wav'
	},
	I: {
		code: '..',
		sound: 'sounds/i.wav'
	},
	J: {
		code: '.---',
		sound: 'sounds/j.wav'
	},
	K: {
		code: '-.-',
		sound: 'sounds/k.wav'
	},
	L: {
		code: '.-..',
		sound: 'sounds/l.wav'
	},
	M: {
		code: '--',
		sound: 'sounds/m.wav'
	},
	N: {
		code: '-.',
		sound: 'sounds/n.wav'
	},
	O: {
		code: '---',
		sound: 'sounds/o.wav'
	},
	P: {
		code: '.--.',
		sound: 'sounds/p.wav'
	},
	Q: {
		code: '--.-',
		sound: 'sounds/q.wav'
	},
	R: {
		code: '.-.',
		sound: 'sounds/r.wav'
	},
	S: {
		code: '...',
		sound: 'sounds/s.wav'
	},
	T: {
		code: '-',
		sound: 'sounds/t.wav'
	},
	U: {
		code: '..-',
		sound: 'sounds/u.wav'
	},
	V: {
		code: '...-',
		sound: 'sounds/v.wav'
	},
	W: {
		code: '.--',
		sound: 'sounds/w.wav'
	},
	X: {
		code: '-..-',
		sound: 'sounds/x.wav'
	},
	Y: {
		code: '-.--',
		sound: 'sounds/y.wav'
	},
	Z: {
		code: '--..',
		sound: 'sounds/z.wav'
	},
	' ': {
		code: ' '
	}
};

function translateText(e) {
	e.preventDefault();
	console.log(e);
	submitBtn.disabled = true;

	let mainArr = textInput.value.toUpperCase().split('');
	textOutput.innerHTML = mainArr.map((x) => morseCode[x].code).join(' | ');

	let audio = new Audio();
	let playlist = mainArr.map((x) => morseCode[x].sound);
	let i = 1;

	audio.addEventListener(
		'ended',
		function() {
			if (i < playlist.length) {
				console.log(i);
				audio.src = playlist[i];
				audio.play();
			}
			i++;
			if (i === playlist.length - 1) {
				setTimeout(function() {
					submitBtn.disabled = false;
				}, 3000);
			}
		},
		true
	);
	audio.volume = 0.3;
	audio.loop = false;
	audio.src = playlist[0];
	audio.play();
}
