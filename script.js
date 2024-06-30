function random(max) {
    return Math.floor(Math.random() * max);
}

function random_array(size) {
    let array = [];

    for (let i = 1; i <= size; i++)
        array.push(i);

    for (let i = 0; i < 100; i++) {
        let a = random(size);
        let b = random(size);
        let temp = array[a];
        if (a == b)
            continue;
        array[a] = array[b]
        array[b] = temp;
    }
    return array;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let count = 12;
let array = random_array(count);

for (let i = 0; i < count; i++) {
    let span = $('<span>').addClass('blocks');
    let size = (10 * array[i]) + 'px';

    span.css('width', size);
    span.css('height', size);
    span.css('animation-delay', random(20) + 's');
    span.css('left', (100 / count) * i + '%');
    span.css('bottom', -10 * count + 'px')
    $('.floating').first().append(span);
}

async function typing(target, msg, delay=150) {
    for (let i = 0; i < msg.length; i++) {
        //console.log('typing ... ' + msg[i]);
        target.append(msg[i]);
        await sleep(delay);
    }
}

async function deleting(target, len, delay=120) {
    for (let i = 0; i < len; i++) {
        let msg = target.text();
        //console.log('deleting ... ' + msg.slice(-1));
        target.text(msg.slice(0, -1));
        await sleep(delay);
    }
}

async function loop() {
    const msg = [
        'a journey.',
        'tough.',
        'a challenge.',
        'love <3'
    ];
    let target = $('#msg');
    let i = 0;

    await typing(target, 'Life is ');

    while (true) {
        //console.log('handling ... ' + msg[i]);
        await sleep(1500);
        await typing(target, msg[i]);
        await sleep(2500);
        await deleting(target, msg[i].length);
        if (++i == msg.length)
            i = 0;
    }
}

loop();
