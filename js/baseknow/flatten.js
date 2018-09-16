/**
 * Created by Lenovo on 2018/4/8.
 */
/*
 实现一个flatten函数，将一个嵌套多层的数组 array（数组） (嵌套可以是任何层数)转换为只有一层的数组，数组中元素仅基本类型的元素或数组，不存在循环引用的情况。
 */

//方法一：使用类型判断instanceof，若是数组，递归转换
function flatten(arr) {
    var result = [];

    function _flat(arr) {
        if (arr.length == 0) {
            return;
        }
        for (var i in arr) {
            if (arr[i] instanceof Array) {
                _flat(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }

    }

    _flat(arr);
    return result;
}
var arr = [1, [2], [3, [[4]]]];

//方法二：使用Array.prototype.reduce()方法
function flatten2(arr) {
    return arr.reduce(function (initArr, cur) {
        return initArr.concat(Array.isArray(cur) ? flatten2(cur) : cur);
    }, []);
}
var arr2 = flatten2(arr)
console.log(arr2)