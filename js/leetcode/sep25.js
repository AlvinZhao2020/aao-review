const largestTimeFromDigits = function (A) {

    A.sort((a, b) => a - b);

    let hourTens = 0;
    let hourOnes = 0;

    const twoIndex = A.indexOf(2);

    // valid to start hour with 2
    if (twoIndex > -1 && A[0] < 3 && A[1] < 4 && A[2] < 6) {
        hourTens = 2;
        A.splice(twoIndex, 1);
        let i = A.length - 1;
        while (A[i] > 3) {
            i -= 1;
        }
        hourOnes = A[i];
        A.splice(i, 1);

        // valid to start hour with 1 or 0
    } else if (A[0] < 2 && A[1] < 6) {
        let i = A.length - 1;
        while (A[i] > 1) {
            i -= 1;
        }
        hourTens = A[i];
        A.splice(i, 1);
        hourOnes = A.pop();
        // input is invalid
    } else {
        return '';
    }
    // determine minutes
    let i = A.length - 1;
    while (A[i] > 5) {
        i -= 1;
    }
    const minTens = A[i];
    A.splice(i, 1);
    const minOnes = A[0];
    return '' + hourTens + hourOnes + ':' + minTens + minOnes;
};