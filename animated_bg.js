class AnimatedBackground {

	delay = [];
	duration = [];
	left = [];

	constructor(count) {

		// count: number of squares

		let diff =  100 / count;

		// initialize
		for (let i = 0; i < count; i++) {
			this.delay.push((i * 2) % 25);
			this.duration.push((i * 3) % 25 + 25);
			this.left.push(i * diff - 5);
		}

		// randomize
		this.delay = this.shake(this.delay, count);
		this.duration = this.shake(this.duration, count);
		this.left = this.shake(this.left, count);

		this.draw(count);
		this.adjust();

		window.addEventListener('orientationchange', this.adjust);
		window.addEventListener('resize', this.adjust);
	}

	rand(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	shake(arr, count) {
		for (let i = 0; i < 3 * count; i++) {
			let a = this.rand(0, arr.length);
			let b = this.rand(0, arr.length);
			let temp = arr[a];
			arr[a] = arr[b];
			arr[b] = temp;
		}
		return arr;
	}

	draw(count) {

		let ul = document.createElement('ul');
		let size = 1;

		for (let i = 0; i < count; i++) {
			let li = document.createElement('li');
			size += (i % 2);
			size = size % 8;
			li.style.width = size + 'rem';
			li.style.height = size + 'rem';
			li.style.bottom = -size + 'rem';
			li.style.animationDelay = this.delay[i] + 's';
			li.style.animationDuration = this.duration[i] + 's';
			li.style.left = this.left[i] + '%';
			ul.appendChild(li);
		}
		ul.classList.add('bg');
		document.body.appendChild(ul);
	}

	adjust() {
		let h = -Math.floor(window.innerHeight) + 'px';
		document.querySelector(':root').style.setProperty('--tranY', h);
	}
}

new AnimatedBackground(12);
