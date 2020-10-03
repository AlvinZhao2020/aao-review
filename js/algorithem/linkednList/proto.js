const obj = {};
const func = () =>{};
const arr = [];

// instanceof  means can be find in the prototype linkedlist

console.log(arr instanceof Array)
console.log(arr instanceof Object)
Object.prototype.x = 'x'
console.log(arr.x)
console.log(Array.x)

// myInstanceOf interview question
const myInstanceOf = (obj,target) =>{
    let p = obj
    while(p){
        if (p.__proto__ === target.prototype){
            return true;
        }
        p = p.__proto__;
    }
    return false
}

console.log(myInstanceOf(arr,Object))