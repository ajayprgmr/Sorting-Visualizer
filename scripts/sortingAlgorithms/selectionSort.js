async function selectionSort(arr) {
    const N = arr.length;

    // Iterate over the array from the first element to the second-to-last element
    for (let i = 0; i < N - 1; i++) {
        // Highlight the ith element as the current element
        chart.paintBar(i, "red");

        // Assume the current element is the minimum element
        let minIndex = i;

        // Start a second loop to find the index of the minimum element in the remaining unsorted part of the array
        for (let j = i + 1; j < N; j++) {
            // Find the index of the minimum element in the remaining array
            // If the current element is smaller than the assumed minimum, update the minIndex
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // If the minIndex is different from the current index (i), it means we found a smaller element
        // Swap the minimum element with the current element
        if (minIndex !== i) {
            // Highlight the bars being compared
            chart.paintBar(minIndex, chart.colorBarSelect);

            // Swap the bars in the visual representation
            await chart.swap(i, minIndex);

            // Remove the highlight from the selected bars
            chart.paintBar(i, chart.colorBarDefault);
            chart.paintBar(minIndex, chart.colorBarDefault);

            // Swap the elements in the actual array
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        // Reset the color of the ith element back to the default color
        chart.paintBar(i, chart.colorBarDefault);

        // Add a small delay to visualize the sorting process step by step
        await delay(chart.iterationDelay);
    }

    // Highlight the last element after the sorting is complete
    chart.paintBar(N - 1, "red");
}
