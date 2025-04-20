function asyncSort(arr) {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    const temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
        resolve({
            data: arr,
            time: Date.now() - start
        });
    });
}

function formatResult(index, size, time) {
    const p = document.createElement("p");
    p.textContent = "Array " + index + " ordinato in " + time + " ms. Dimensione: " + size;
    return p;
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.textContent = "Sorting...";
    for (let i = 1; i <= 6; i++) {
        const array = [];
        for (let n = 0; n < 10_000; n++) {
            array.push(Math.random() * 10_000);
        }
        asyncSort(array).then((result) => {
            document.body.appendChild(formatResult(i, result.data.length, result.time));
        });
    }
});