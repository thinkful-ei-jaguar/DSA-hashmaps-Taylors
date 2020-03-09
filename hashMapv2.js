class _Node {
  constructor(value, next) {
      this.value = value;
      this.next = next;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
        this.insertFirst(item);
    }
    else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
    }
  }

  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
        /* Return null if it's the end of the list 
           and the item is not on the list */
        if (currNode.next === null) {
            return null;
        }
        else {
            // Otherwise, keep looking 
            currNode = currNode.next;
        }
    }
    // Found it
    return currNode;
  }

  remove(item){ 
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
        this.head = this.head.next;
        return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
        // Save the previous node 
        previousNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Item not found');
        return;
    }
    previousNode.next = currNode.next;
  }
  insertBefore(newItem, oldItem) {
    // If the list is empty
    if (!oldItem) {
      return this.insertFirst(newItem);
    }
    let tempNode = this.head;
    let oldNode = this.find(oldItem)
    let newNode = new _Node(newItem, oldNode)
    while(tempNode.next !== null){
      if(tempNode.next.value === oldNode.value) {
        break;
      }
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
  }
  insertAfter(newItem, oldItem) {
    let oldNode = this.find(oldItem)
    let newNode = new _Node(newItem, oldNode.next)
    oldNode.next = newNode
  }
  insertAt(newItem, pos) {
    let tempNode = this.head;
    for(let i = 1; i<pos; i++){
      if(!tempNode){
        return 'Postion out of bounds'
      }
      tempNode = tempNode.next
    }
    this.insertBefore(newItem, tempNode.value)
  }
  loop(newItem) {
    let tempNode = this.head;
    while (tempNode.next !== null) {
        tempNode = tempNode.next;
    }
    tempNode.next = new _Node(newItem, this.head);
  }
}

class HashMap {
  constructor(initialCapacity = 8) {
      this.length = 0;
      this._hashTable = [];
      this._capacity = initialCapacity;
      this._deleted = 0;
  }

  get(key) {
      const index = this._findSlot(key);
      if (this._hashTable[index] === undefined) {
          throw new Error('Key error');
      }
      return this._hashTable[index].value;
  }

  static _hashString (string) {
      let hash = 5381;
      for (let i = 0; i < string.length; i++) {
          hash = (hash << 5) + hash + string.charCodeAt(i);
          hash = hash & hash;
      }
      return hash >>> 0;
  }

  set(key, value){
      const loadRatio = (this.length + this._deleted + 1) / this._capacity;
      if (loadRatio > HashMap.MAX_LOAD_RATIO) {
          this._resize(this._capacity * HashMap.SIZE_RATIO);
      }
      //Find the slot where this key should be in


      let index = this._findSlot(key);
      //let index = 2;
      let pair = {key, value}
      if(!this._hashTable[index]){
          this.length++;
      }
      if(this._hashTable[index] !== undefined){
        this._hashTable[index].insertLast(pair)
      } else {
        let ll = new LinkedList()
        ll.insertLast(pair)
        const newValue = ll
  
        this._hashTable[index] = newValue;
      }

      // this._hashTable[index] = {
      //     key,
      //     value: newValue,
      //     DELETED: false
      // }; 

      // if(this.get(key)){
      //   key.insertLast(value)
      // } else {
      //   const key = new LinkedList();
      //   const index = this._findSlot(key);
      //   if(!this._hashTable[index]){
      //       this.length++;
      //   }
      //   value = list.insertFirst(value)
      //   this._hashTable[index] = {
      //       key,
      //       value,
      //       DELETED: false
      //   };
      // }
  }

  delete(key) {
      const index = this._findSlot(key);
      const slot = this._hashTable[index];
      if (slot === undefined) {
          throw new Error('Key error');
      }
      slot.DELETED = true;
      this.length--;
      this._deleted++;
  }

  _findSlot(key) {
      const hash = HashMap._hashString(key);
      const start = hash % this._capacity;
      const index = start % this._capacity;
      console.log(key,':',index)
      return index;

      // for (let i=start; i<start + this._capacity; i++) {
      //     const index = i % this._capacity;
      //     console.log(key,':', index)
      //     const slot = this._hashTable[index];
      //     if (slot === undefined || (slot.key === key && !slot.DELETED)) {
      //         return index;
      //     }
      // }
  }

  _resize(size) {
      const oldSlots = this._hashTable;
      this._capacity = size;
      // Reset the length - it will get rebuilt as you add the items back
      this.length = 0;
      this._hashTable = [];
      this.deleted = 0;

      for (const slot of oldSlots) {
          if (slot !== undefined) {
              this.set(slot.key, slot.value);
          }
      }
  }
}

function  main() {
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
  
  //return lotr.get('RingBearer');
  return lotr;
}
console.log(main());