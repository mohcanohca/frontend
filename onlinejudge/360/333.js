/*
* 众所周知，集合{1 2 3 … N}有N!种不同的排列，假设第i个排列为Pi且Pi,j是该排列的第j个数。将N个点放置在x轴上，第i个点的坐标为xi且所有点的坐标两两不同。对于每个排列（以Pi为例），可以将其视为对上述N个点的一种遍历顺序，即从第Pi,1个点出发，沿直线距离到达第Pi,2个点，再沿直线距离到达第Pi,3个点，以此类推，最后到达第Pi,N个点，将该路线的总长度定义为L(Pi)，那么所有N!种路线的总长度之和是多少，即L(P1)+L(P2)+L(P3)+...+L(PN!)的结果是多少？*/
var n = readline();

var nums = readline().split(' ');
var arr=[];
var flags=new Array(nums.length);
for(var i=0;i<nums.length-1;i++){
    for(var j=i;j<nums.length;j++){
        arr.push(Math.abs(arr[j]-arr[i]));
        flags.push(false);
    }
}

var result=0;
for(var i=0;i<arr.length;i++){
    result+=select(result,arr,i);
}

function select(cur,arr,index) {
}
