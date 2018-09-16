/*
判断元素是否是元素节点
 */
function isElement(obj) {
    if(obj&&obj.nodeType==1){
        if(window.Node&&(obj instanceof Node)){
            //针对IE9
            return true;
        }

        //针对obj是另外一个文档内节点的情况
        try{
            var testDiv=document.createElement('div');
            testDiv.appendChild(obj);
            testDiv.removeChild(obj);
        }catch(er){
            return false;
        }
        return true;
    }
    return false;
}

/**
 * 兼容所有浏览器的contains方法
 * @param a 上层节点
 * @param b 低层节点
 */
function fixContains(a, b) {
//IE6和IE8访问parentNode节点会报错
    try {
        while ((b = b.parentNode)) {
            if (b === a) {
                //说明a包含b
                return true;
            }
        }
        return false;
    } catch (e) {
//对于游离于文本树外的节点，脱离了节点层次关系的判断范围
        return false;
    }
}