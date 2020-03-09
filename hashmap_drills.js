const HashMap = require('./hashmaps')

function main() {
    let lotr = new HashMap()

    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    lotr.set('Hobbit', 'Bilbo')
    lotr.set('Hobbit', 'Frodo')
    lotr.set('Wizard', 'Gandolf')
    lotr.set('Human', 'Aragorn')
    lotr.set('Elf', 'Legolas')
    lotr.set('Maiar', 'The Necromancer')
    lotr.set('Maiar', 'Sauron')
    lotr.set('RingBearer', 'Gollum')
    lotr.set('LadyOfLight', 'Galadriel')
    lotr.set('HalfElven', 'Arwen')
    lotr.set('Ent', 'Treebeard')
    lotr.set('Smeagol', 'Precious')

    //console.log(lotr.get('Maiar')) Sauron overrode The Necromancer
    //console.log(lotr.get('Hobbit')) Frodo overrode Bilbo
    //console.log(lotr.get('Ent')) returns 'Precious'
    //console.log(lotr.get('Smeagol')) returns 'Precious' also?

    return console.log(lotr)
}

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

//WhatDoesThisDo()
console.log(10%9)

//main()

/**
 * 2. first console log will return 20 as a value, and the second will reurn 10, this is due to duplicate overwritting the valuers of eachother. Which ever key gets set afterwards will be the ultimate set.
 * 
 * 3. a) arr = [22,88,undefined,undefined,14,15,28,17,59,31,10]
 *    b) arr=[undefined,28,20,12,undefined,5, 15,undefined,17]
 *                     |19|                  |13|
 *                     |10|
 * 
 */