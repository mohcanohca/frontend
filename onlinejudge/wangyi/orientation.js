/**
 * Created by Lenovo on 2018/3/27.
 */
var n=parseInt(readline());
var step=readline();
var action=step.split('');
var index=0;
for(var i=0;i<n;i++){
    // print(action[i]);
    if(action[i]=='L'){
        index++;
        if(index==4) index=0;
    }else{
        if(index==0){
            index=3;
        }
        else{
            index--;
        }
    }
    // print(index);
}
var orientations='NWSE';
print(orientations.charAt(index));