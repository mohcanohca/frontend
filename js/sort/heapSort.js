/*
堆排序
思路：左右
1.首先根据长度为n的无序数组构建堆。若是升序排序构建大顶堆；若是降序排序构建小顶堆。此处只讨论大顶堆情况
2.将堆顶元素与最后一个元素交换，排除最后一个元素，调整堆使其剩余n-1个元素符合大顶堆
3.循环第2步操作
 */
var len;

//构建大顶堆
function buildHeap(arr) {
    for (var i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, i);
    }
}

//调整堆
function heapify(arr, i) {
    var largest = i;
    if ((2 * i + 1) < len && arr[2 * i + 1] > arr[i]) {
        largest = 2 * i + 1;
    }
    if ((2 * i + 2) < len && arr[2 * i + 2] > arr[largest]) {
        largest = 2 * i + 2;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    len = arr.length;
    buildHeap(arr);

    console.log(arr);
    for (var i = len - 1; i >= 0; i--) {
        swap(arr, 0, len - 1);
        len--;
        heapify(arr, 0);

    }
}

var arr = [3, 5, 1, 2, 6, 8, 10];
heapSort(arr);

