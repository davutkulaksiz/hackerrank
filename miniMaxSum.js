const arr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;

    arr = arr.sort()

    for(let i = 0; i < 4; i++) {
        minSum += arr[i];
    }
    for(let i = 1; i < 5; i++) {
        maxSum += arr[i];
    }
    console.log(minSum, maxSum)
}

miniMaxSum(arr);