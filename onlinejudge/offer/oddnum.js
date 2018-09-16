function reOrderArray(arr)
{
    // write code here
    var len=arr.length;
    if(len==0||len==1) return array;
    var index=0;
    var even=[];
    for(var i=0;i<len;i++){
        if(arr[i]%2==0){
            even.push(arr[i]);
            arr.splice(i,1);//删除第i个元素
        }
    }
    arr=arr.concat(even);
    return arr;
}
var arr=[1,2,3,4,5,6,7];
reOrderArray(arr);

function swap(arr,i,j){
    var tmp=arr[i];
    arr[i]=arr[j];
    arr[j]=tmp;
}
