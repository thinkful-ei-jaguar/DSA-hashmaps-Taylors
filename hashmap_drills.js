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

main()