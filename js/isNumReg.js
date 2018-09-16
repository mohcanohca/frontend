/**
 * Created by Lenovo on 2018/3/25.
 */
//s字符串
function isNumeric(s)
{
    s=s.toUpperCase();
    // write code here
    var reg=/^(([+-]?[0-9]+(.[0-9]+)?)?(E[+-]?[0-9]+)?)$|^(([+-]?.[0-9]+(E[+-]?[0-9]+)?)?)$/;
    /*if(reg.test(s)){
        if(s.charAt(0)=='+'||s.charAt(0)=='-') s=s.substring(1);
        var indexE=s.toUpperCase().indexOf('E');
        if(indexE!=-1){
            //若存在E，判断其前面是否有小数点
            var indexPoint=s.indexOf('.');

            if(indexPoint==-1&&indexE>1) return false;
            if(indexPoint==-1&&indexE<=1) return true;
            if(indexPoint==1){
                //若有小数点，且小数点前有一位数
                return true;
            }
            return false;

        }
        return true;
    }
    return false;*/
    return reg.test(s);
}
var str;
while(str=readline()){
    print(isNumeric(str));
}

