function bubbleSort() {
    const arr = [7, 4, 6, 2, 3, 1]
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = tmp
            }
        }
    }
    console.log(arr)
}

bubbleSort()
