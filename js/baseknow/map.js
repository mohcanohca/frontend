/**
 * Created by Lenovo on 2018/4/9.
 */
function map(list,iteratee) {
    var result=[];
    for(var i in list){
        result[i] = iteratee(list[i],i,list);
    }
    return result;
}

var arr=[1,2,3];
console.log(map(arr,function (num) {
    return num*num;
}));