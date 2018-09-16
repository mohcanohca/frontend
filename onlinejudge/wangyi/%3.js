/**
 * Created by Lenovo on 2018/3/27.
 */
var line=readline();
var start=line.split(' ')[0];
var end=line.split(' ')[1];
var count=0;
var num=0;
var cur,temp;
for(cur=1;cur<start;cur++){
    temp=cur;
    while(temp>0){
        num+=(temp%10);
        temp=Math.floor(temp/10);
    }
}
cur=start;
while(cur<=end){
    temp=cur;
    while (temp>0){
        num+=(temp%10);
        temp=Math.floor(temp/10);
    }
    if(num%3==0) count++;
    cur++;

}

print(count);
