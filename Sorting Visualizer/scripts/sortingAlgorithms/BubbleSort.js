async function bubbleSort(arr) {
    const N = arr.length;

    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - 1 - i; j++) {
            // Highlight the jth and j+1th elements as the current elements being compared
            chart.paintBar(j, "red");
            chart.paintBar(j + 1, "red");

            // Swap if the current element is greater than the next element
            if (arr[j] > arr[j + 1]) {
                // Swap the bars in the visual representation
                await chart.swap(j, j + 1);

                // Swap the elements in the actual array
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

            // Remove the highlight from the selected bars
            chart.paintBar(j, chart.colorBarDefault);
            chart.paintBar(j + 1, chart.colorBarDefault);

            // Add a small delay to visualize the sorting process step by step
            await delay(chart.iterationDelay);
        }
    }

    // Highlight the last element after the sorting is complete
    chart.paintBar(0, "red");
}
