/**
 * Created by Lenovo on 2018/3/23.
 */
var n = parseInt(readline());
var arrX = [];
var arrY = [];
var result='';
while(n--){
    arrX = readline().split(" ");
    arrY = readline().split(" ");
    getIntArr(arrX);
    getIntArr(arrY);

    var vector1={
        x:arrX[1]-arrX[0],
        y:arrY[1]-arrY[0]
    };
    var vector2={
        x:arrX[2]-arrX[0],
        y:arrY[2]-arrY[0]
    };
    var vector3={
        x:arrX[3]-arrX[0],
        y:arrY[3]-arrY[0]
    };
    var vector4={

    };

    if(vector1.x*vector2.x+vector1.y*vector2.y==0){
    //    若点1和点2与点0相邻
        vector4.x=arrX[2]-arrX[1];
        vector4.y=arrY[2]-arrY[1];
        if (vector4.x*vector3.x+vector4.y*vector3.y==0){
            print('Yes');
            break;
        }
    }else if(vector1.x*vector3.x+vector1.y*vector3.y==0){
        vector4.x=arrX[2]-arrX[3];
        vector4.y=arrY[2]-arrY[3];
        if (vector4.x*vector1.x+vector4.y*vector1.y==0){
            print('Yes');
            break;
        }
    }else if(vector1.x*vector3.x+vector1.y*vector3.y==0){
        vector4.x=arrX[1]-arrX[3];
        vector4.y=arrY[1]-arrY[3];
        if (vector4.x*vector2.x+vector4.y*vector2.y==0){
            print('Yes');
            break;
        }
    }else {
        print('No');
        break;
    }

}
function getIntArr(arr) {
    for(var i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
    }
}