/**
 * Created by Lenovo on 2018/4/5.
 */

/*
题目：
给定长度k；
长度A的歌曲X首；长度B的歌曲Y首；每首歌都不同

求出不同的排列组合
 */
function select(m,n){
    if(n==0) return 1;
    var result=1;
    var t=m-n+1;
    while(m>=t){
        result*=m;
        m--;
    }
    while(n>0){
        result/=n;
        n--;
    }
    return result;
}
var K=parseInt(readline());
var line=readline();
var A=line.split(' ')[0],
    X=line.split(' ')[1],
    B=line.split(' ')[2],
    Y=line.split(' ')[3];
var M=1000000007;
var numA=Math.min(Math.floor(K/A),X),
    numB=Math.min(Math.floor(K/B),Y);
var count=0;
for(var i=numA;i>=0;i--){
    var left=K-i*A;
    if(left<0) continue;
    if(left==0){
        count+=select(X,i);
        continue;
    }
    if(left%B==0&&left/B<=numB){
        count+=(select(X,i)*select(Y,left/B));
        count%=M;
    }
}
print(count);