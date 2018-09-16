process.stdin.resume();
process.stdin.setEncoding("ascii")

var input=""

process.stdin.on("data",function(data){
    //将输入的数据赋给input
    input+=data;
    var chunk= data.slice(0,-2);
    if(chunk===''){
        process.stdin.emit('end');
    }
})

process.stdin.on('end',function(){
    //将输入的多行数据转换为数组
    var arr=input.split("\n");
    console.log(arr.length);
    var arrb=[];
    //循环遍历数组，将去重后的数据保存到新的数组arrb中
    for(var i=0;i<arr.length;i++){
        arrb.push(arr[i]);
    }
    //这里调用了API，排序，将得到的数组arrb排序并且转换为字符串
    var str=arrb.join('');
    console.log(str);

})