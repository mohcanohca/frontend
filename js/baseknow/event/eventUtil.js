//跨浏览器事件处理程序
var eventUtil = {
    //添加句柄
    addEventHandler: function (element, type, handler) {
        if (element.addEventListener) {
            //DOM2级
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            //IE事件处理程序判断
            element.attachEvent('on' + type, handler);
        } else {
            //老版本浏览器不支持DOM2级，也不支持IE事件处理程序，使用DOM0级事件处理程序判断
            element['on' + type] = handler;
            //element.onclick===element['onclick'];
        }
    },
    //删除句柄
    removeEventHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            //DOM2级
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            //IE事件处理程序判断
            element.detachEvent('on' + type, handler);
        } else {
            //老版本浏览器不支持DOM2级，也不支持IE事件处理程序，使用DOM0级事件处理程序判断
            element['on' + type] = null;
            //element.onclick===element['
        }
    }
}

function stopEvent(event){
    var e=event;//因为除了IE有event其他浏览器没有所以要做兼容
    if(window.event){       //这是IE浏览器
        e.cancelBubble=true;//阻止冒泡事件
        e.returnValue=false;//阻止默认事件
    }else if(e && e.stopPropagation){     //这是其他浏览器
        e.stopPropagation();//阻止冒泡事件
        e.preventDefault();//阻止默认事件
    }
}
