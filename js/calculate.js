var reg=/(\d+)([+\-*\/]){0,1}/g;
var str="1+2*3/4+10*5-20";
var arr=[];
str.replace(reg,function (str,$num,$cal) {

    arr.push(parseInt($num));
    if($cal){
        arr.push($cal);
    }
})
for(var i=0;i<arr.length;){
    var result;
    if(arr[i]=='*'){
        result=arr[i-1]*arr[i+1];
        arr.splice(i-1,3,result);
    }else if(arr[i]=='/'){
        result=arr[i-1]/arr[i+1];
        arr.splice(i-1,3,result);
    }else{
        i++;
    }

}
for(var i=0;i<arr.length;){
    var result;
    if(arr[i]=='+'){
        result=arr[i-1]+arr[i+1];
        arr.splice(i-1,3,result);
    }else if(arr[i]=='-'){
        result=arr[i-1]-arr[i+1];
        arr.splice(i-1,3,result);
    }else{
        i++
    }
}
console.log(eval(str));
console.log(arr[0]);
