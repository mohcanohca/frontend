

var line=readline().split(' ');
var n=parseInt(line[0]),k=parseInt(line[1]),h=parseInt(line[2]);
var num=[];
for(var i=0;i<n;i++){
    num.push(parseInt(readline()));
}

var start=0;
function jump(n,k,h){
    var position=0;
    num.sort(function sequence(a,b){return a - b;});
    for(var i=0;i<k;i++){
        while(num[start]-position<=h&&start<num.length){
            start++;
        }
        if(start<num.length){
            start--;
            // console.log(num[start]);
            if(num[start]-position>0)
                position += (num[start]-position)*2;
            else return position;
            start++;
        }
        else if(num[start-1]-position<=h){
            start--;
            // console.log(num[start]);
            if(num[start]-position>0)
                position += (num[start]-position)*2;
            else return position;
            start++;
        }
        else return position;
    }
    return position;
}
var rst = jump(n,k,h);
print(rst);