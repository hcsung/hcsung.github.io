new FloatingBlocks(document.getElementsByClassName('floating-blocks')[0]);

let writer = new TypeWriter(document.getElementById('msg'));

writer.type('Life is ');
writer.loop([
    'an adventure,',
    'rugged.',
    'a challenge,',
    'tough.',
    'a journey,',
    'love <3'
]);
