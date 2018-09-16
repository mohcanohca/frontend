/**
 * Created by Lenovo on 2018/3/23.
 */

/**
 * 桶排序：基于计数排序，桶内采用其他排序方式或是桶排序
 思路：
 1、设置一个定量的数组当做空桶，计算待排序的数组需要多少个空桶
 2、遍历输入数据，将数据放入到对应的组
 3、对非空的桶进行排序
 4、从非空的桶里把排好序的数据拼接起来
 * @param arr
 * @param busketSize 每个桶的大小
 */
function busketSort(arr,busketSize) {
    if(arr.length==0)return arr;
     var i;
     var minValue=arr[0];
     var maxValue=arr[0];
}