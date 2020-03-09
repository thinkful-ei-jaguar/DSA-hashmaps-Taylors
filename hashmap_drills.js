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

 const testString1 = 'google';
 const testString2 = 'google all that you think can think of';

 //g-o-o-g-l-e  => put into hash map
 //if HashMap .has [i] do nothing
 //if map doesn't have [i], insert into HashMap

 function removeDuplicates (str) {
    let characterMap = new Map()
    for (i=0; i < str.length; i ++) {
            characterMap.set(str[i], str[i])
    }
    let results = ''
    characterMap.forEach(value => {
        results += value
    });
    return results
 }

 //console.log(removeDuplicates(testString2))
let str1 = 'acecarr'
let str2 = 'north'
let str3 = 'aassddff'

 const palindrome = (str) => {
    let pal = new Map();
    let duplicates = 0;
    
    for(let i =0; i<str.length; i++) {
        if(pal.has(str[i])){
            duplicates++
        }
        pal.set(str[i])
    }
 
    if (duplicates === Math.floor(str.length/2)) {
        return true         
    }
    return false;
 }

 //console.log(palindrome(str3));

 const wordArray = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
 //expected result [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]

 function anagrams(arr) {
    let tempHash = new Map();
    for (let i = 0; i < arr.length; i++){
        const abcString = arr[i].split('').sort().join('')
        let samsiesArray = []
        arr.forEach(word => {
            if(abcString === word.split('').sort().join('')){
                samsiesArray.push(word)
            }
        })
        tempHash.set(abcString, samsiesArray)
    }    
    finalArray = []
    tempHash.forEach(value => {
        finalArray.push(value)
    })
        
    return finalArray
 }

 console.log(anagrams(wordArray))