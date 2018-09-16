/**
 * Created by Lenovo on 2018/4/9.
 */
function gcd(x,y){
    if(y==0) return x;
    return gcd(y,x%y);
}
var n=4;
var ans=1;
for(var i=2;i<=n;i++){
    var tmp=gcd(ans,i);
    ans=Math.floor(i*ans%987654321/tmp);
}
console.log(ans);