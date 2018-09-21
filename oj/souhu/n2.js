/**
 * 题目：
 * 计算移动次数。
 * 无限长的x轴，从坐标0开始，每次向左或向右移动，第n次移动就移动n，问移动到目的点的最少移动次数
 *
 * 思路：
 * 1~k最大可以得到（1+k)*k/2；将n转为正数，因为n与-n的次数相同，只是镜像取正负；
 * 使得（1+k）*k/2>=n，则（1+k）*k/2-n得到的是小于（1+k）*k/2的正数，若减完后是偶数x，
 * 则可以通过调整1~k中若干个数ai+aj+ak+al....=x/2,将相应的+号转为-号，即可实现将结果-x，
 * k也就是最小的移动次数
 */

// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

function minSteps(n) {
    let k = 0;
    for (k = 0; k < n + 5; k++) {
        let temp=Math.floor(k*(k+1)/2);
        if(temp>=n&&(temp-n)%2===0){
            break;
        }
    }
    return k;
}

//SIGINT用于命令行调试，输入Ctrl+c结束
process.on('SIGINT', function () {
    input_array = input.split("\n");
    var nLine = 0;
    while (nLine < input_array.length) {
        var line = input_array[nLine++].trim();
        if (line === '') {
            continue;
        }

        //纪录输入的目标位置
        var n = parseInt(line);
        console.log(minSteps(n));
    }
    process.exit(0);
});