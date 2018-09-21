// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var n = parseInt(readline());
var arr = readline().split(" ");
var r = compute();
print(r)
function compute(){
    var count = 0;
    var rst = [];
    var flag = 0;
    var result = 1;
    for(var i=0;i<arr.length;i++){
        if(flag == 1){
            if(arr[i]==0){
                count ++;
            }
            else{
                rst.push(count);
                count = 0;
            }
        }
        else if(flag == 0){
            if(arr[i]==1){
                flag = 1;
                count = 0;
            }

        }
    }
    for(var i=0;i<rst.length;i++){
        result *= rst[i]+1
    }
    return result;
}

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
rl.on('line', function (line) { // javascript每行数据的回调接口
    if (cur_line == 0) { // 测试用例第一行读取n
        n = parseInt(line.trim())
    }

    // 记录当前读取的行数
    cur_line += 1;
    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
    if (cur_line === 2) {
        // 输出结果
        let reg = /(0){1,}/g;
        let str = line.split(' ').join('');
        let count = [];
        let newStr = str.replace(reg, function (cur) {
            count.push(cur.length);
            return '0';
        });

        if (newStr.indexOf('0') > -1) {
            let arr = newStr.split('');
            for (let i = 0; i < arr.length; i++) {
                if (i == 0 && arr[i] == 0) {
                    count.shift();
                }

                if (i == arr.length - 1 && arr[i] == 0) {
                    count.pop();
                }

                if (arr[i] === '0' && i > 0 && i < arr.length - 1 && arr[i - 1] !== '0' && arr[i + 1] !== '0') {
                    let tmp = count.shift();
                    ans += (tmp + 1);
                }
            }
        } else {
            ans = 1;
        }


        console.log(ans);
        // 重新初始化相关变量
        n = -1;
        ans = 0;
        cur_line = 0;
    }
});