/**
 * Created by Lenovo on 2018/3/30.
 */

function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {//支持XHR
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != 'undefined') {//支持ActiveXObject
        if (typeof arguments.callee.activeXString != 'String') {
            var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'];//IE的三个XHR对象
            var i, len;
            for (var i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {

                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        } else {
            throw new Error('No XHR Object available');
        }

    }
}


var xhr = createXHR();

// ajax请求
function json(params) {
    // 请求方式，默认是GET
    params.type = (params.type || 'GET').toUpperCase();
    // 避免有特殊字符，必须格式化传输数据
    params.data = formatParams(params.data);

    var xhr = null;
    // 实例化XMLHttpRequest对象
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        // IE6及其以下版本
        xhr = new ActiveXObjcet('Microsoft.XMLHTTP');
    }
    xhr.onreadystatechange = function () {
        //readyState:
        //0 未初始化。还没调用open
        //1 启动。已经调用open()，还没有send()
        //2 发送。已经调用send()，还没收到响应
        //3 接收。收到部分响应
        //4 完成。接收到全部响应，已经可以在客户端使用了
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                // 判断接受数据的内容类型
                var type = xhr.getResponseHeader('Content-type');
                if (type.indexOf('xml') !== -1 && xhr.responseXML) {
                    response = xhr.responseXML; //Document对象响应
                } else if (type === 'application/json') {
                    response = JSON.parse(xhr.responseText); //JSON响应
                } else {
                    response = xhr.responseText; //字符串响应
                }
                // 成功回调函数
                params.success && params.success(response);
            } else {
                params.error && params.error(status);
            }
        }
    }
    // 连接和传输数据 params是发送请求时的参数
    if (params.type == 'GET') {
        // 三个参数：请求方式、请求地址(get方式时，传输数据是加在地址后的)、是否异步请求(同步请求的情况极少)；
        xhr.open(params.type, params.url + '?' + params.data, true);
        xhr.send(null);
    } else {
        xhr.open(params.type, params.url, true);
        //必须，设置提交时的内容类型
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        // 传输数据
        xhr.send(params.data);
    }
}