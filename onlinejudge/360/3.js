/**
 * Created by ydz on 2018/4/23.
 */
function sortNum(a,b) {
    return a-b;
}
function sortNumReverse(a,b) {
    return a-b>0?-1:1;
}

function mul(arr1, arr2) {
    arr1.sort(sortNum);
    arr2.sort(sortNumReverse);
    var len1=arr1.length;
    var len2=arr1.length;
    var result=0;
    if(len1!=len2) return result;

    for(var i=0;i<len1;i++){
        result+=arr1[i]*arr2[i];
    }
    return result;
}
var arr1=[1,2,3];
var arr2=[1,2,3];

console.log(mul(arr1,arr2))