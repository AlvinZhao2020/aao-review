let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add('heelo');
mySet.add({a:1})

let has = mySet.has(1)
let arr = Array.from(mySet)

mySet.delete(1)

// keys values 
//  set to array , array to set
const myArr = [...mySet];
const myArr2 = Array.from(mySet)

const mySet2 = new Set([1,2,3,4,5])
const mySet3 = new Set([1,1,1,1,1])

// qiujiaoji qiuchaji

let jiaoJi = new Set([...mySet2].filter(item=>mySet3.has(item)))
let chaJi = new Set([...mySet3].filter(item=>!mySet2.has(item)))