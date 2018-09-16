/**
 * Created by Lenovo on 2018/3/23.
 */
//插入排序
function insertSort(arr){
    var len=arr.length;
    var preIndex,current;
    for (var i=1;i<len;i++){
        current=arr[i];
        preIndex=i-1;
        while(preIndex>=0&&current<arr[preIndex]){
            arr[preIndex+1]=arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1]=current;
    }
    return arr;
}

function insert_sort(arr){
    var len=arr.length;
    var current;
    for(var i=1;i<len;i++){
        current=arr[i];
        for (var j=i-1;j>=0;j--){
            if(arr[j]>current){
                arr[j+1]=arr[j];
                if(j==0){
                    arr[j]=current;
                }
            }else{
                arr[j+1]=current;
                break;
            }
        }
        console.log(arr);
    }
}

var arr=[3,57,5,1,0,10];
insert_sort(arr);
console.log(arr);