// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

function myfunc() {

}

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
var result=[];
rl.on('line', function(line){ // javascript每行数据的回调接口
    if (n < 0) { // 测试用例第一行读取n
        n = parseInt(line.trim())
    } else {
        let n=parseInt(line);
        let n_arr=line.split('');
        let sn=0;
        for(let i=0;i<n_arr.length;i++){
            sn+=parseInt(n_arr[i]);
        }

        if(n%sn==0){
            // console.log(sn+':'+n+'yes')
            result.push('Yes');
        }else{
            // console.log(sn+':'+n+'no')
            result.push('No');
        }
        // 记录当前读取的行数
        cur_line += 1;
    }

    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
    if (n === cur_line) {
        // 输出结果
        // 重新初始化相关变量
        n = -1;
        ans = 0;
        cur_line = 0;
        result=[];
    }
});