var maxProduct = function (nums) {
    let res = 0
    nums.forEach((n1, i1) => {
        nums.forEach((n2, i2) => {
            if (i1 !== i2 && (n1 - 1) * (n2 - 1) > res) {
                res = (n1 - 1) * (n2 - 1)
            }
        })
    })
    return res
};