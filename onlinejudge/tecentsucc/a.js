
//暴力法
function dontGiveMeFive(start, end)
{
    var cur;
    var count=0;
    for(var i=start;i<=end;i++){
        cur=Math.abs(i)+'';
        if(cur.indexOf('5')!=-1)
            count++;
    }
    return end-start+1-count;
}

//数字法
function dontGiveMeFive(start, end)
{
    var ans=end-start+1;
    var count;
    if(end<0){
        end=Math.abs(end);
        start=Math.abs(start);
        count=countFive(start)-countFive(end-1);
    }
    else if(start>0){
        count=countFive(end)-countFive(start-1);
    }
    else{
        start=Math.abs(start);
        count=countFive(start)+countFive(end);
    }

    ans=ans-count;
    return ans;
}

//计算1-num中含有的5的数字个数
function countFive(num) {
    var index=0;
    var count=0;
    while(num>0){
        var temp=(Math.floor(num/5)-Math.floor(num/10))*Math.pow(10,index);
        count+=temp;
        if(index!=0&&temp!=0){
            count-=Math.pow(10,index-1);
        }
        num=Math.floor(num/10);
        index++;
    }
    return count;
}


//测试
var log=console.log;
log(dontGiveMeFive(10,90));