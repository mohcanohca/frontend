function getIntersection() {
    var length=arguments.length;
    var min,max;
    for(var i=0;i<length;i++){
        var cur=[];
        cur[0]=arguments[i][0];
        cur[1]=arguments[i][1];

        if(getRange(cur)!=null){
            if(!min){
                min=cur[0];
                max=cur[1];
                ;          }
            min=Math.max(min,cur[0]);
            max=Math.min(max,cur[1])
            if(min>max)
                return null;
        }else{
            return null;
        }
    }
    return [min,max];
}
function getRange(arr) {
   if(typeof(arr[0])!='number'||typeof(arr[1])!='number'){
       return null;
   }
   if(arr[0]<arr[1]){

   }else{
       var temp=arr[1];
       arr[1]=arr[0];
       arr[0]=temp;
   }
    return arr;
}

getIntersection([1, 4], [3, 5]); // return [ 3, 4 ]
getIntersection([5, 2], [4, 9], [3, 6]); // return [ 4, 5 ]
getIntersection([1, 7], [8, 9]); // return null
getIntersection(['x', 7], [4, 9]); // return null
getIntersection([1, 2]); // return [ 1, 2 ]
getIntersection([1, 2], [2, 3]); // return [ 2, 2 ]