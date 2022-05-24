function solve(n, k) {
    let arr = [1]
    let next;
    let sum = 0;

    for (let i = 0; i < n - 1; i++) {
        let counter = 0;

        for (let j = arr.length - 1; j >= 0; j--) {
            sum += arr[j];
            counter++;
            if (j <= 0) {
                arr[arr.length] = sum;
                sum = 0;
                break;
            }

            if (counter == k) {
                arr[arr.length] = sum;
                sum = 0;
                break;
            }

        }
    }
    return arr;
}
