var num = readline();
var N = num.split(' ')[0];
var M = num.split(' ')[1];
var result = {};
var nodes;

function buildPattern(n1, n2) {
    if (!result[n1]) {
        result[n1] = [];
    }
    if (!result[n2]) {
        result[n2] = [];
    }
    var arr = result[n1];
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] != n2) {
            result[arr[j]].push(n2);
        }
    }
    var arr = result[n2];
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] != n1) {
            result[arr[j]].push(n1);
        }
    }
}
function sortNum(a, b) {
    return a - b;
}
function cleanDup(arr) {
    arr.sort(sortNum);
    for (var i = 1; i < arr.length;) {
        if (arr[i] == arr[i - 1]) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
}
for (var i = 0; i < M; i++) {
    nodes = readline();
    var n1 = nodes.split(' ')[0];
    var n2 = nodes.split(' ')[1];
    buildPattern(n1, n2);
}
for (var num in result) {
    cleanDup(result[num]);
}

var Q = readline();
var count = 0;
for (i = 0; i < Q; i++) {
    nodes = readline();
    var n1 = nodes.split(' ')[0];
    var n2 = nodes.split(' ')[1];
    if (result[n1]) {
        for (var j = 0; j < result[n1].length; j++) {
            if (result[n1][j] == n2) {
                count++;
                break;
            }
        }
    }
}
print(count);

