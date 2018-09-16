/**
 * Created by Lenovo on 2018/3/16.
 */

//cookie的读取，设置，删除
var CookieUtil={
    get:function (name) {
        var cookieName=encodeURIComponent(name)+'=',
            cookieStart=document.cookie.indexOf(cookieName),
            cookieValue=null;
        if(cookieStart>=-1){
            //即如果该cookie存在
            var cookieEnd=document.cookie.indexOf(';',cookieStart);
            if (cookieEnd==-1){
                cookieEnd=document.cookie.length;
            }
            cookieValue=decodeURIComponent(document.cookie.substring(
                cookieStart+cookieName.length,cookieEnd));
            return cookieValue;
        }
    },
    set:function (name,value,expires,path,domain,secure) {
        var cookieText=encodeURIComponent(name)+'='+encodeURIComponent(value);
        if(expires instanceof Date){
            //指定cookie何时应被删除
            cookieText+=';expires='+expires.toGMTString();
        }
        if (path){
            //URL路径
            cookieText+=";path="+path;
        }
        if(domain){
            cookieText+=";domain="+domain;
        }
        if(secure){
            cookieText+=";secure="+secure;
        }
        document.cookie=cookieText;
    },
    //没有删除已有cookie的直接发方法，需要使用相同的路径，名称，域和安全选项再次设置cookie，
    // 将失效时间设置为过去的时间。
    unset:function (name,path,domain,secure) {
        this.set(name,'',new Date(0),path,domain,secure);
    }

}

