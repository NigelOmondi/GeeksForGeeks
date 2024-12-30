// Map: Maps store key-value pairs where keys can be any data type.

// A JavaScript Map holds key-value pairs and is similar to a Hash Map or Dictionary in other languages.

//Preserves the original insertion order.

// It supports any type, including objects and primitives, as keys or values. 
// This feature allows for efficient data retrieval and manipulation.

// JavaScript Maps internally use Hashing that makes time complexities of operations like search, insert 
// and delete constant or O(1) on average. 
// It is useful for operations like counting frequencies, maintaining dictionaries, and storing key-based objects.

// Only Unique Keys are allowed, if we insert the same key with a different value, it overwrites the previous one.

// It is always recommended to use Maps over Objects when we have frequent insert and delete operations 
// as maps perform better.


const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a')); // 1

let m = new Map([
    ["k1", "v1"],
    ["k2", "v2"],
    ["k3", "v3"]
]);
console.log(m); // Map(3) { 'k1' => 'v1', 'k2' => 'v2', 'k3' => 'v3' }

let n = new Map();
n.set("k1", "v1");
n.set("k2", "v2");
n.set("k3", "v3");

// This will overwrite the
// previous key value pair as
// key is already present
n.set("k3", "v4");

console.log(n); // Map(3) { 'k1' => 'v1', 'k2' => 'v2', 'k3' => 'v4' }

// Methods / Properties of JavaScript Map
// ---------------------------------------
// set(key, val) : Adds or updates an element with a specified key and value.
// get(key) : Returns the value associated with the specified key.
// has(key) : Returns a boolean indicating whether an element with the specified key exists.
// delete(key) : Removes the element with the specified key.
// clear(): Removes all elements from the Map.
// size: Returns the number of key-value pairs in the Map.

let x = new Map();
x.set("k1", "v1");
x.set("k2", "v2");
x.set("k3", "v3")
    .set("k4", "v4")
    .set("k5", "v5");

console.log("m has k4 ? " + x.has("k4")); // true
console.log("m has k6 ? " + x.has("k6")); // false

console.log("value for k4 " + x.get("k4")); // v4
console.log("value for k6 " + x.get("k6")); // undefined

console.log("delete k4 " + x.delete("k4")); // true
console.log("delete k6 " + x.delete("k6")); // false

x.clear(); // Removes all elements from the Map.
console.log(x); // Map(0) {}

// Map can also store objects as keys.
const map2 = new Map();
const obj1 = {};
map2.set(obj1, 1);
console.log(map2.get(obj1)); // 1

// Map can also store functions as keys.
const map3 = new Map();
const func = () => {};
map3.set(func, 1);
console.log(map3.get(func)); // 1

// Map can also store arrays as keys.
const map4 = new Map();
const arr = [];
map4.set(arr, 1);
console.log(map4.get(arr)); // 1



// WeakMap: WeakMaps are similar to Maps, but they only store key-value pairs where the key is an object.
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'hello');
console.log(weakMap.get(obj)); // hello


// Set: Sets store unique values of any data type.
const set = new Set([1, 2, 3, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

// Sets internally use a hash table which makes search, insert and delete operations faster than arrays. 
// Please note that a hash table data structure allows these operations to be performed on average in constant time.
// Set maintains insertion of items. When we access items, we get them in the same order as inserted.
// Only Unique Keys are allowed, if we insert the same key with a different value, it overwrites the previous one.
// A set can be created either empty or by providing an iterable like array or string.

// using an array
let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1); // Set(3) { 10, 30, 40 }
let s2 = new Set(["gfg", "gfg", "geeks"]);
console.log(s2); // Set(2) { 'gfg', 'geeks' }

// using string
let s3 = new Set("fooooooood");
console.log(s3); // Set(3) { 'f', 'o', 'd' }

// an empty set
let s4 = new Set();
console.log(s4); // Set(0) {}

// Set add()
let s = new Set();

s.add(10);
s.add(20);

// As this method returns
// the set object hence chaining 
// of add method can be done.
s.add(30).add(40).add(50);

console.log(s); // Set(5) { 10, 20, 30, 40, 50 }

console.log(s.size); // 5


// Set delete()
let se = new Set("foooodiiiieee");

// deleting e from the set
// it prints true
console.log(se.delete('e')); // true

console.log(se); // Set(4) { 'f', 'o', 'd', 'i' }

// deleting an element which is 
// not in the set
// prints false
console.log(se.delete('g')); // false


// Set clear()
let t = new Set([10, 20, 30, 40, 50]);

console.log(t); // Set(5) { 10, 20, 30, 40, 50 }

t.clear(); // Removes all elements from the Set.

console.log(t); // Set(0) {}


// Set entries()
let c = new Set();

c.add(50);
c.add(30);
c.add(40);
c.add(20);
c.add(10);

// using entries to get iterator
let e = c.entries();
console.log(e); // SetIterator { [ 50, 50 ], [ 30, 30 ], [ 40, 40 ], [ 20, 20 ], [ 10, 10 ] }

// each iterator is array of [value, value]
console.log(e.next().value); // [ 50, 50 ]

console.log(e.next().value); // [ 30, 30 ]

console.log(e.next().value); // [ 40, 40 ]

// Set has()
let w = new Set();

// adding element to the set
w.add(50);
w.add(30);
            
console.log(w.has(50)); // true

console.log(w.has(10)); // false


// Set values()
let v = new Set();

v.add(50);
v.add(30);

// using values to get iterator
let i = v.values();
console.log(i); // SetIterator { 50, 30 }

let y = new Set(['a', 'b', 'c']);
console.log(y.values()); // SetIterator { 'a', 'b', 'c' }

// Set keys()
let ykeys = y.keys();
console.log(ykeys); // SetIterator { 'a', 'b', 'c' }

// Set forEach()
let z = new Set([10, 20, 30, 40, 50]);

z.forEach((value, key) => {
    console.log(key + " " + value); // 10 10, 20 20, 30 30, 40 40, 50 50
});

const mySet = new Set([1, 2, 3, 4]);

// Using forEach to iterate over the Set
mySet.forEach((value) => {
  console.log(value); // 1, 2, 3, 4
});


// WeakSet: WeakSets are similar to Sets, but they only store unique objects.
const weakSet = new WeakSet();
const obj2 = {};
weakSet.add(obj2);
console.log(weakSet.has(obj2)); // true

//  Set prototype[@@iterator]()
let newset = new Set(["a","b","c"]);

let it = newset[Symbol.iterator]();
console.log(it); // SetIterator { 'a', 'b', 'c' }

console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'b', done: false }
console.log(it.next()); // { value: 'c', done: false }
console.log(it.next()); // { value: undefined, done: true }

// Check for a subset
Set.prototype.subSet = function(otherSet)
{
    // if size of this set is greater
    // than otherSet then it can't be 
    //  a subset
    if(this.size > otherSet.size)
        return false;
    else
    {
        for(let elem of this)
        {
            // if any of the element of 
            // this is not present in the
            // otherset then return false
            if(!otherSet.has(elem))
                return false;
        }
        return true;
    }
}

// using the subSet function

// Declaring different sets
let setA = new Set([10, 20, 30]);
let setB = new Set([50, 60, 10, 20, 30, 40]);
let setC = new Set([10, 30, 40, 50]);

// prints true
console.log(setA.subSet(setB));

// prints false
console.log(setA.subSet(setC));

// prints true
console.log(setC.subSet(setB));


// Union of two sets
Set.prototype.union = function(otherSet)
{
    // creating new set to store union
    let res = new Set();

    // iterate over the values and add 
    // it to unionSet
    for (let x of this)
    {
        res.add(x);
    }

    // iterate over the values and add it to 
    // the unionSet
    for(let x of otherSet)
        res.add(x);

    // return the values of unionSet
    return res;
}

// using the union function
// Declaring values for set1 and set2
let set1 = new Set([10, 20, 30, 40, 50]);
let set2 = new Set([40, 50, 60, 70, 80]);  
let res = set1.union(set2);
console.log(res.values());


// Intersection of two sets
Set.prototype.intersection = function(otherSet)
{
    // creating new set to store intersection
    let result = new Set();

    // Iterate over the values 
    for(let x of otherSet)
    {
        // if the other set contains a 
        // similar value as of value[i]
        // then add it to intersectionSet
        if(this.has(x))
            res.add(x);
    }
    return result;                
}

// using intersection function
// Declaring values for set1 and set2
let se1 = new Set([10, 20, 30, 40, 50]);
let se2 = new Set([40, 50, 60, 70, 80]);  
let result = se1.intersection(se2);

console.log(result.values());