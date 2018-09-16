/**
 * Created by Lenovo on 2018/3/24.
 */
var arr=readline().split(' ');
var n,k;
var count=0;

if(arr.length==2){
    n=parseInt(arr[0]);
    k=parseInt(arr[1]);

}
var nums=readline().split(' ');
if(nums.length==n){
    nums.sort();
}

var newNum=[];

if(k==0){
    newNum[0]=nums[0];
    for(var i=1;i<n;i++){
        if(nums[i]!=nums[i-1]){
            newNum.push(nums[i]);
        }
    }
    print(newNum.length);
}else{

    for(var j=0;j<nums.length;j++){
        newNum[nums[j]]=[]
        for(var l=1;l<nums.length;l++){
            if(nums[l]-nums[j]==k&&newNum[nums[j]].length==0){
                count++;
                newNum[nums[j]].push(nums[l]);
            }else if(nums[l]-nums[j]>k){
                break;
            }else{
                continue;
            }
        }
    }

    print(count);
}


