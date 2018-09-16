/*
原生js实现class的增删
 */

//1.兼容性版本



var classHandler = function () {

};

//1.1 判断元素是否有某个class
classHandler.prototype.hasClass = function (ele, clsName) {
    var reg = new RegExp('(\\s|^)' + clsName + '(\\s|$)');// ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
    return !!ele.className.match(reg);

};
//1.2 给元素添加class
classHandler.prototype.addClass = function (ele, clsName) {

    if (!this.hasClass(ele, clsName)) {
        ele.className += ' ' + clsName;
    }
}

//1.3 删除元素的class
classHandler.prototype.removeClass = function (ele, clsName) {

    if (this.hasClass(ele, clsName)) {
        var reg = new RegExp('(\\s|^)' + clsName + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

//1.4 切换class，即如果该class存在，就删除，不存在就添加
classHandler.prototype.toggleClass=function (ele,clsName) {
    if(this.hasClass(ele,clsName)){
        this.removeClass(ele,clsName);
    }else{
        this.addClass(ele,clsName);
    }
}



//2. 利用HTML5 classList

//2.1 添加class add(class1,class2,...)在元素中添加一个或多个类名
function addClassH5(ele, clsNames) {
    for(var i in clsNames){
        ele.classList.add(clsNames[i]);
    }
    console.log(ele.classList)
}

//2.2 判断是否有某个class
function hasClassH5(ele, clsName) {
    return ele.classList.contains(clsName);
}

//2.3 删除class remove(class1,class2,...)
function removeClassH5(ele, clsNames) {
    for(var i in clsNames){
        ele.classList.remove(clsNames[i]);
    }

}