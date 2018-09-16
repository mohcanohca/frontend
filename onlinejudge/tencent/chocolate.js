/**
 * Created by Lenovo on 2018/4/8.
 */
/*
题目：小明爸妈出差N天，留给他M块巧克力，他每天吃的巧克力不能少于前一天的一半，若要吃到他爸妈回来，第一天最多能吃多少块巧克力
输入：N M
输出：K 最多能吃的巧克力数

思路：
1、采用二分查找法，找到第一个满足条件的k
2、判断条件：如果第一天吃k块巧克力，吃到第d天巧克力数变成1，累计每一天吃的巧克力数，记作count。若d>N，说明第一天吃的巧克力数太多了，因为最佳是最后一天吃的巧克力数是1；若d<N，剩下的N-d天每天只能吃一块，则判断前d天吃的count+（N-d）<=M，若满足，说明k符合条件，否则，k不满足。
3、找到第一个k之后，判断其是否是最后一个元素，或者k+1不满足条件，那么k就是要找的，否则在k的右半部分查找。
 */

function eatChocalate() {
    var line=readline();
    var n=line.split(' ')[0];
    var m=line.split(' ')[1];
    print(searchInsert(n,m));

}
//二分查找，找到符合条件的k
function searchInsert(n,m) {
    var low=1,high=m;
    var mid;
    while(low<=high){
        mid=Math.floor((low+high)/2);
        if(find(mid,n,m)){
            if(mid+1>m||!find(mid+1,n,m)){
                return mid;
            }else{
                low=mid+1;
            }
        }else{
            high=mid-1;
        }
        print('low:'+low);
        print('high:'+high);
    }
    return low;
}
//判断第一天吃k块是否符合条件
function find(k,n,m) {
    var tmpK=k;
    var count=0;//累计吃的巧克力数
    var d=0;//天数
    while (tmpK!=1){
        count+=tmpK;
        tmpK=Math.ceil(tmpK/2);
        d++;
    }
    if(d>n) return false;

    if((count+(n-d))<=m){
        return true;
    }else{
        return false;
    }
}
eatChocalate();
