// uniq
const arr = [1,1,2,2]
let arr2 = [...new Set(arr)]
// includes use .has()
const set = new Set(arr)
const has = set.has(1);
// jiao ji to arr then filter()
const set2 = new Set([2,3])
const set3 = new Set([...set].filter(item=>set2.has(item)))
