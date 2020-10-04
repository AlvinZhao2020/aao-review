// leetcode 3
const findSubString = (str)=>{
    let res = 0
    for(let i = 0; i< str.length;i++){
        let sub = str[i]
        for(let j = i+1; j<str.length;j++){
            if(sub.includes(str[j])){
                break ;
            }else{
                sub += str[j]
            }
        }
        if(sub.length> res){
            res = sub.length
        }
    }
    return res

}
console.log(findSubString('abcbca'))
console.log(findSubString("aaaaa"));
console.log(findSubString("abcddddefgh"));
console.log(findSubString('abcdefghijk'));
console.log(findSubString("abcdefghij"));