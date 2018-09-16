/**
 * Created by Lenovo on 2018/3/23.
 */

function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;

}

//分区
function partition(arr, left, right) {
    var pivot = right,//以右边的元素为基准
        index = left - 1;
    for (var i = left; i < right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, ++index);
        }
    }
    swap(arr, index + 1, pivot);//将基准放到对应的位置
    return index + 1;
}


function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function partition2(arr, left, right) {
    let pivot = right;//以区间最右边为基准
    let index = left;//从区间最左侧开始放元素
    for (let i = left; i < right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index++);//将元素添加到较小元素集合中
        }
    }
    swap(arr, index, pivot);
    return index;

}

function quick_sort(arr, left, right) {
    let len = arr.length;
    let partionIndex;
    left = typeof left !== 'number' ? 0 : left;
    right = typeof right !== 'number' ? len - 1 : right;
    if (left < right) {
        partionIndex = partition2(arr, left, right);
        quick_sort(arr, left, partionIndex - 1);
        quick_sort(arr, partionIndex + 1, right);
    }
    return arr;
};


var arr = [1, 10,3, 4, 2, 6, 5];
// quickSort(arr);
quick_sort(arr);
// print(arr);
console.log(arr)