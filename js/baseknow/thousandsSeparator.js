/**
 * 思路：
 * 1、首先分离出小数部分
 * 2、对整数部分逆序为数组
 * 3、每三个数字插入一个逗号，如果是3的倍数则最后一个不插入
 * 4、再逆序回来，若有小数部分，拼接小数部分
 */
function splitk(num){
    var decimal=String(num).split('.')[1]||'';//小数部分
    var tempArr=[];
    var revNumArr=String(num).split('.')[0].split('').reverse();//将整数部分倒序

    for (i in revNumArr){
        tempArr.push(revNumArr[i]);
        if ((i+1)%3==0&&i!=revNumArr.length-1){//每隔三位插入逗号，如果是数字长度整除3的话，最后一个，不添加
            tempArr.push(',');
        }
    }

    var result=tempArr.reverse().join('');//将数组逆序回来，再拼接得到整数部分
    return result+decimal;
}