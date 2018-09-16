/**
 * Created by ydz on 2018/4/18.
 */
var count=0;
var a=readline();
var b=readline();

function match(str1,str2){
    if(str2.indexOf('?')!=-1){
        var temp=str2.replace('?','0');
        if(match(str1,temp)){
            count++;
        }
        temp=str2.replace('?','1');
        if(match(str1,temp)){
            count++;
        }
    }else{
        if(str1.indexOf(str2)!=-1) return true;
    }
    return false;
}
match(a,b);
print(count);