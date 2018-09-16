/**
 * Created by ydz on 2018/4/27.
 */
var eventUtil = {
    handler: {},
    add: function (type, func) {
        if (eventUtil.handler[type]) {
            if (eventUtil.handler[type].indexOf(func) === -1) {
                eventUtil.handler[type].push(func);
            }
        } else {
            eventUtil.handler[type] = [func];
        }
    },
    remove: function (type, func) {
        try {
            var target = eventUtil.handler[type];
            var index = target.indexOf(func);
            if (index == -1) {
                throw new Error()
            } else {
                target.splice(index, 1);
            }
        } catch (e) {
            console.error('别老想搞什么飞机，删除我有的东西！');
        }

    },
    fire: function (type, func) {
        try {
            var target = eventUtil.handler[type];
            if (arguments.length == 1) {
                var count = target.length;
                for (var i = 0; i < count; i++) {
                    target[i]();
                }
            } else {
                var index = target.indexOf(func);
                if (index === -1) throw new Error();
                target[index]();
            }
            return true;
        } catch (e) {

            console.error('别老想搞什么飞机，触发我有的东西！');
            return false;

        }

    },
    once: function (type,func) {
        eventUtil.fire(type,func)?
        eventUtil.remove(type,func):null;
    }
}

var eventObj={
    //存储对象自身的触发函数
    handler:{},
    //为该对象添加监听某事件类型函数
    add:function (type,fn) {
        this.handler=this.handler||{};
        if(this.handler[type]){
            if(this.handler[type].indexOf(fn)===-1){
                //若type类型事件还没有添加回调函数fn，将其加入
                this.handler[type].push(fn);
            }
        }else{
            this.handler[type]=[fn];//若该类型事件没有添加，为其创建一个空数组，存放回调函数

        }
    },
    //为该对象移除监听某事件类型的某函数
    remove:function (type,fn) {
        if(this.handler[type]===undefined){
            //若要移除的事件类型不存在，提示错误
            console.log("没有监听"+type+"事件");
        }else{
            var index=this.handler[type].indexOf(fn)
            if(index===-1){
                //若要移除的回调函数不存在，提示错误
                console.log("没有对"+type+"事件添加"+fn.name+"的处理");
            }else{
                this.handler[type].splice(index,1);
            }
        }
    },
    //触发该对象某种类型事件的回调函数
    fire:function (type,fn) {
        if(this.handler[type]===undefined){
            //没有添加对type类型事件的监听
            console.log("触发我监听了的事件类型");
            return false;
        }else {
            var events=this.handler[type];
            if(fn==undefined){
                for(var i in events){
                    events[i]();
                }
            }else{

                if(events.indexOf(fn)===-1){
                    console.log(type+"类型事件没有回调函数"+fn.name);
                }

            }
            return true;
        }
    },
    //先触发某类型事件的回调函数fn，再移除
    once:function (type,fn) {
        this.fire(type,fn)?
        this.remove(type,fn):null;
    }
}

document.addEventListener('DOMContentLoaded',function () {
    var test=document.getElementById("test");
    function sing(){
        console.log("唱歌");
    }
    eventObj.add.call(test,'sing',sing);
    test.addEventListener('click',function () {
        eventObj.fire.call(test,'sing');
    });
})