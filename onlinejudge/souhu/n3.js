// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

function getBigger(v1, v2) {
    let arr1 = v1.split('.');
    let arr2 = v2.split('.');

   while(arr1.length&&arr2.length){
        if(parseInt(arr1[0])>parseInt(arr2[0])){
            return 1;
        }else if(parseInt(arr1[0])<parseInt(arr2[0])){
            return -1;
        }
        arr1.shift();
        arr2.shift();
    }

    while(arr1.length){
       if(parseInt(arr1.shift())){
           return 1;
       }
    }

    while(arr2.length){
        if(parseInt(arr2.shift())){
            return -1;
        }
    }

    return 0;
}

process.stdin.on('end', function () {
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
        console.log(getBigger(str1, str2));
    }
});
process.on('SIGINT', function () {
    // 你的处理
    process.exit(0);
})