/**
 * Created by Lenovo on 2018/3/29.
 */
//全排列
/*
 对输入的字符串string全排列，需要去重，例如aabb的全排列的可能性有24中，实际上有['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

 思路一：元素拼接
 1、将输入的字符串拆分成单个字符，组成数组
 2、遍历数组，每轮循环拷贝原数组from为newFrom，并拷贝原目标数组to为一个newTo，
 从newFrom数组中去除一个元素，将去除的元素拼接到目标数组newTo，新的数组进行排序
 */
/*function permutations(string) {


    var hash = {};//用hash数组存储
    var traverse = function (from, to) {
        if (to.length < string.length) {
            //当目标数组还没有包括string中出现的所有元素时
            for (var i = 0; i < from.length; i++) {
                var newFrom = from.slice(0);//拷贝数组的全部元素
                var newTo = to.slice(0);//拷贝目标数组的全部元素
                var one = newFrom.splice(i, 1);//将newFrom数组的第i个元素去除
                newTo=newTo.concat(one);
                traverse(newFrom, newTo);
            }
        } else {
            hash[to.join('')] = null;//当把string中的所有元素都添加到to中后，将to转换成字符串，存入hash数组

        }
    }
    traverse(string.split(''), []);
    return Object.keys(hash);
}
console.log(permutations('aabb'));*/

/**
 * 思路二：递归交换
 * 1、将第一个位置分别放置各个不同的元素
 * 2、对剩余的位置进行全排列
 * 3、递归出口为只对一个元素进行全排列
 */
function swap(arr,i,j) {
    if(i!=j){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
}
var result={};
var count=0;
function perm(arr) {
    (function permForIndex(index) {//对[index,...，len-1]元素全排列
        for(var i=index;i<arr.length;i++){
            swap(arr,i,index);//将i位置元素放到index位置上
            if(index+1<arr.length-1){//判断剩余待全排列元素是否大于1个
                permForIndex(index+1);//从index+1位置开始全排列
            }else{
                //如果待排列的元素数还剩一个，直接放入
                result[arr.join('')]=null;
            }
            swap(arr,i,index);//
        }

    })(0);
    return Object.keys(result);
}
console.log(perm('aabb'.split('')));
