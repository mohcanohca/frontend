/**
 * Created by Lenovo on 2018/4/9.
 */
function iterator(list,iteratee,memo,index) {
    for(;index>=0&&index<list.length;index++){
        memo=iteratee(memo,list[index],index,list)
    }
    return memo;
}

function reduce(list,iteratee,memo) {
    if (list.length==0) return;
    var index=0;
    if(arguments.length<3){
        memo=list[index];
        index++;
    }
    return iterator(list,iteratee,memo,index);

}

var sum=reduce([1,2,3],function (total,curValue) {
   return total+curValue;
},0);