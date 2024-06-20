class TypeWriter {

    constructor(paper) {
        this.paper = paper;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async type(text) {
        for (let i = 0; i < text.length; i++) {
            this.paper.textContent += text[i];
            await this.sleep(150);
        }
    }

    async back(text) {
        for (let i = 0; i < text.length; i++) {
            this.paper.textContent = this.paper.textContent.slice(0, -1);
            await this.sleep(120);
        }
    }

    async loop(lines) {
        let i = 0;
        while (i < lines.length) {
            await this.sleep(1500);
            await this.type(lines[i]);
            await this.sleep(2500);
            await this.back(lines[i]);
            if (++i == lines.length)
                i = 0;
        }
    }
}
