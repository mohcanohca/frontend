
var t = parseInt(readline());
var result = [];
while (t > 0) {
    var arr = readline().split(' ');
    var n = parseInt(arr[0]);//所有房子数
    var k = parseInt(arr[1]);//已住人房子数
    var max = 0;
    var min = 0;
    if (n > 2) {
        if (k * 2 == n)
            max = k - 1;
        if (k * 2 > n)
            max = n - k;
        if (k * 2 < n)
            max = k - 1;
    }
    result.push(min + ' ' + max);
}

for (var j = 0; j < result.length; j++) {
    console.log(result[j]);
}