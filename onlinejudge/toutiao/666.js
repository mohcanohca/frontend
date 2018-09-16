/**
 * Created by Lenovo on 2018/3/24.
 */
var matrix_0=['66666','6...6','6...6','6...6','66666'],
    matrix_1=['....6','....6','....6','....6','....6'],
    matrix_2=['66666','....6','66666','6....','66666'],
    matrix_3=['66666','....6','66666','....6','66666'],
    matrix_4=['6...6','6...6','66666','....6','....6'],
    matrix_5=['66666','6....','66666','....6','66666'],
    matrix_6=['66666','6....','66666','6...6','66666'],
    matrix_7=['66666','....6','....6','....6','....6'],
    matrix_8=['66666','6...6','66666','6...6','66666'],
    matrix_9=['66666','6...6','66666','....6','66666'];
var matrix=[matrix_0,matrix_1,matrix_2,matrix_3,matrix_4,matrix_5,matrix_6,matrix_7,matrix_8,matrix_9];
var line=readline();
var n=parseInt(line);
var reg1=/\D/g;
var nums=[];
var oper=[];
for(var i=0;i<n;i++){
    line=readline();
    nums=line.split(reg1);
    oper=line.match(reg1);
}
var num1,num2,result,op;
if (nums.length==1) result=parseInt(nums[0]);

while(nums.length>1&&oper.length>0){
    op=oper.shift();
    switch(op){
        case '+':
            result=num1+num2;
            nums.unshift(result);
            break;
        case '-':
            result=num1-num2;
            nums.unshift(result);
            break;
        case '*':
            result=num1*num2;
            nums.unshift(result);
            break;
        default:
            break;
    }
}
print(result);

var numArr=[];

while(result>0){
    numArr.push(result%10);
    result=Math.floor(result/10);
}

var aline;
for (var j=0;j<5;j++){
    aline=''
    for(var i=numArr.length-1;i>=0;i--){
        aline=aline+matrix[numArr[i]][j]+'.';
    }
    print(aline);
}


