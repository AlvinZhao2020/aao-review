// const stack =[];
// stack.push(1);
// stack.push(2);
// const item1 = stack.pop();
// const item2 = stack.pop();

// var isValid = function (s) {
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
//       stack.push(s[i]);
//     } else {
//       if (
//         (s[i] == ")" && stack[stack.length - 1] == "(") ||
//         (s[i] == "]" && stack[stack.length - 1] == "[") ||
//         (s[i] == "}" && stack[stack.length - 1] == "{")
//       ) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };

// console.log(isValid('()'))
// console.log(isValid("{[()]}"));
// console.log(isValid("()[]"));
// console.log(isValid("([)]"));

class Stack {
  constructor(data=[]){
    this.box = data
  }
}


Stack.prototype.push = (n)=>{
   this.box.push(n)
}

Stack.prototype.pop = ()=>(
  this.box.pop()
)

Stack.prototype.peek = ()=>{
  if(this.box.length === 0){
    return null
  }else{
    return this.box[length-1]
  }
}

const tenToBi =(n)=>{
   let res = []
   while(n!== 0){
      res.unshift(n%2);
      n = Math.floor(n/2)
   }
   return res.join('')
}

console.log(tenToBi(100))