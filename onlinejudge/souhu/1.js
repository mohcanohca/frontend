var n = parseInt(readline());
var rule,start,end,value;
var dayValues=[];
var ans=0;
var maxday=0;
for(var i = 1;i <= n; i++){
    arr = readline().split(" ");
    rule=arr[0];
    start=arr[1];
    if(rule==1){
        end=arr[2];
        maxday=Math.max(maxday,end);
        value=parseInt(arr[3]);
        for(var j=start;j<=end;j++){
            if(!dayValues[j])
                dayValues[j]=value;
            else{
                dayValues[j]=Math.max(dayValues[j],value);
            }
        }
    }else if(rule==2){
        value=parseInt(arr[2]);
        ans+=value;
    }
}

for(var i=1;i<=maxday;i++){
    if(!dayValues[i]) continue;
    ans+=dayValues[i];
}
print(ans);