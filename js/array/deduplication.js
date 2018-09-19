//数组去重

//双层循环
function unique_doubleCircle(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (arr[i] === res[j]) {
                break;
            }
        }
        if (j === resLen) {
            res.push(arr[i]);
        }
    }
    return res;
}


//indexOf
function unique_indexOf(arr) {
    var res = [];
    for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
        var current = arr[i];
        if (res.indexOf(current) === -1) {
            res.push(current);
        }
    }
    return res;
}

//filter优化后的indexOf去重
function unique_indexOf_filter(arr) {
    var res = arr.filter(function (item, index, array) {
        //若是重复元素，indexOf返回的是第一次出现时的下标，返回值就变成了false，被过滤掉
        return array.indexOf(item) === index;
    });
}

//排序后去重：判断当前元素是否与上一个元素相同
function unique_sort(arr) {
    var res = [];
    var sortedArray = arr.concat().sort();
    var pre;
    for (var i = 0, len = arr.length; i < len; i++) {
        if (!i || pre !== sortedArray[i]) {
            res.push(arr[i]);
        }

        pre = arr[i];
    }
}
//filter优化后的sort去重
function unique_sort_filter(arr) {
    return arr.concat().sort().filter(function (item, index, arr) {
        return !index || item !== arr[index - 1];
    })
}

//Object键值对：利用空对象，把数组的值存成Object.key，在判断cur的时候检查Object[cur]是否存在，若存在，说明重复
function unique_object(arr) {
    var obj = {};

    return arr.filter(function (item, index, arr) {
        return obj.hasOwnProperty(JSON.stringify(item)) ? false : obj[JSON.stringify(item)] = true;
    })
}

//使用ES6的Set数据结构
function unique_Set(arr) {
    return Array.from(new Set(arr));
}

//Set+扩展运算符
//扩展运算符也是进行的浅拷贝
function unique_Set_expand(arr) {
    return [...new Set(arr)];
}

//ES6 Map
function unique_Map(arr) {
    var seen = new Map();
    return arr.filter(item => !seen.has(item) && seen.set(item, true));
}



