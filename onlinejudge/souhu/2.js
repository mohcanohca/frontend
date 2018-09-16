/**
 * Created by ydz on 2018/4/14.
 */
// var line = parseInt(readline());
    var line='8 4';
var n=line.split(' ')[0];
var k=line.split(' ')[1];
// var nums=readline().split(' ');
var nums='4 5 1 6 2 7 3 8'.split(' ');
// nums=nums.sort(sortNum);
console.log(nums.sort(sortNum));
var result=[];
    for(var i=0;i<k&&i<n;i++){
        result.push(nums[i]);
    }
    console.log(result.join(','));
// print(result.join(','));
function sortNum(a,b) {
    return a-b;
}