async function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = inputArr[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while (j >= 0 && current < inputArr[j]) {
            inputArr[j + 1] = inputArr[j];
            chart.paintBar(j + 1, chart.colorBarSelect);
            chart.paintBar(j, chart.colorBarSelect);
            await chart.swap(j + 1, j);
            if (j > 0) playSound(frequency * j);
            await delay(chart.iterationDelay);
            chart.paintBar(j + 1, chart.colorBarDefault);
            chart.paintBar(j, chart.colorBarDefault);
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}
