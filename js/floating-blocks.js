class FloatingBlocks {

    count = 12;

    constructor(target) {
        let temp = this.count;
        let size = 16; // px

        this.array = [];
        while (--temp >= 0) {
            this.array.push(size);
            if (temp % 2)
                size += 16;
        }

        this.shake();
        this.draw(target);
    }

    random(max) {
        return Math.floor(Math.random() * max);
    }

    shake() {
        // randomize the array
        for (let i = 0; i < 100; i++) {
            let a = this.random(this.count);
            let b = this.random(this.count);
            let temp = this.array[a];
            if (a == b)
                continue;
            this.array[a] = this.array[b]
            this.array[b] = temp;
        }
    }

    draw(target) {
        for (let i = 0; i < this.count; i++) {
            let span = document.createElement('span');
            let size = this.array[i];

            span.classList.add('blocks');
            span.style.width = size + 'px';
            span.style.height = size + 'px';
            span.style.animationDelay = this.random(20) + 's';
            span.style.left = (100 / this.count) * i + '%';
            span.style.bottom = -1 * size + 'px';

            target.appendChild(span);
        }
    }
}
