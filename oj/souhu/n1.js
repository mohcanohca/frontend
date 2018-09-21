// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

function isBrother(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    if (len1 !== len2) {
        return 0;
    }
    if(str1==str2){
        let arr1=str1.split('');
        let newStr1=arr1.reverse().join('');
        if(newStr1==str2){
            return 1;
        }
        return 0
    }

    let arr = [];

    for (var i = 0; i < len1; i++) {
        if (str1[i] !== str2[i]) {
            if (arr.length === 0) {
                arr.push({[str1[i]]: str2[i]});
            } else if (arr.length === 1) {
                if (arr[0].hasOwnProperty(str2[i])) {
                    arr.push({[str2[i]]: str1[i]});
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        }
    }
    return 1;
}

/*process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;
    while (nLine < input_array.length) {
        var line = input_array[nLine++].trim();
        if (line === '') {
            continue;
        }
        var input_arrays = line.split(' ');

        var str1 = input_arrays[0];
        var str2 = input_arrays[1];
        console.log(isBrother(str1, str2));
    }
});*/
process.on('SIGINT', function() {
    // 你的处理
    input_array = input.split("\n");
    var nLine = 0;
    while (nLine < input_array.length) {
        var line = input_array[nLine++].trim();
        if (line === '') {
            continue;
        }
        var input_arrays = line.split(' ');

        var str1 = input_arrays[0];
        var str2 = input_arrays[1];
        console.log(isBrother(str1, str2));
    }
    process.exit(0);
})