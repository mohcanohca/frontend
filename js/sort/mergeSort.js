/**
 * Created by Lenovo on 2018/3/23.
 */

/*
归并排序
思路：
1、将长度为n的子序列分成两个长度为n/2的子序列
2、对这两个子序列分别采用归并排序
3、将两个合排序好的子序列合并成一个有序序列
 */
function mergeSort(arr) {
    var len = arr.length;
    if (len < 2) return arr;

    var mid = Math.floor(len / 2);
    var left = arr.slice(0, mid),
        right = arr.slice(mid, len);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

(function () {
    var nums, result;
    while (nums = readline().split(' ')) {
        result = mergeSort(nums);
        print(result);
    }
})();
