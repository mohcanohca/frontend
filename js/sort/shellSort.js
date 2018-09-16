function shellSort(arr) {
    var len = arr.length;
    var tmp, gap = 1;
    while (gap < len / 3) {
        gap = 3 * gap + 1;
    }

    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            var temp = arr[gap];//在本序列组中待插入元素
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }

    }
}