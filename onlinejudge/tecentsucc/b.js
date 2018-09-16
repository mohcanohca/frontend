/**
 * 题目描述：将一个给定的数字（>0）以各个数位相加的形式表示
 * 例如：12=》‘10+2’
 * 70304=》‘70000+300+4’
 * @param num
 * @returns {string}
 */
function expandedForm(num) {
    // Your code here
    var str=num+'';
    var ans=[];
    var len=str.length;
    var cur;
    var result='';
    while(len){
        cur=str[0];
        if(cur=='0'){
        }
        else{
            for(var i=0;i<len-1;i++){
                cur+='0';
            }
            ans.push(cur);
        }
        str=str.substring(1);
        len--;
    }
    for(var j=0;j<ans.length-1;j++){
        result+=ans[j]+' + ';
    }
    result+=ans[ans.length-1];
    return result;
}