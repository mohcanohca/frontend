
var line=readline();
var n=line.split(' ')[0];
var k=line.split(' ')[1];
n=parseInt(n);
k=parseInt(k);
var count=0;
var x,y;
//方法一：暴力法。会超时
/*for(x=k;x<=n;x++){
    for(y=n;y>k;y--){
        if(x%y>=k){
            count++;
        }
    }
}*/

//方法二：
if(k==0) count= n*n;

for(y=k+1;y<=n;y++){
    //对除数进行遍历，若要余数>=k则除数一定>k
    count+=Math.floor((n/y))*(y-k);//n/y计算当前数字范围内有多少个y，y-k是计算比k大1,2,3...y-k的数各有多少，即余数为k+1，k+2，k+3...y-1的数
    if((n%y)-k>=0){//n剩余的最后几个大数，对y求余数的范围一定在1~y-1之间，判断>=k的数量
        count+=(n%y-k+1);
    }
}

print(count);