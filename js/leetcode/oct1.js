var freqAlphabets = function (s) {
  str = "abcdefghijklmnopqrstuvwxyz";
  let stack = s.split("");
  let res = [];
  while (stack.length > 0) {
    let char = stack.pop();
    if (char === "#") {
      char = stack[stack.length - 2] + stack[stack.length - 1];
      stack.pop();
      stack.pop();
    }
    res.unshift(str[char - 1]);
  }
  return res.join("");
};
