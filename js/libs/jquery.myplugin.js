/**
 * Created by Lenovo on 2018/3/13.
 */

//在代码开头加一个分号，是为了防止他人的代码最后定义的函数没有用分号结尾
;(function(){
    //定义Beautifier的构造函数
    var Beautifier = function (ele,opt) {
        this.$element=ele,
            this.defaults={
                'color': 'red',
                'fontSize': '12px',
                'textDecoration':'none'
            },
            this.options=$.extend({},this.defaults,opt);
    };
    Beautifier.prototype={
        beautify:function () {
            //返回beautify的调用者对象
            return this.$element.css({
                'color':this.options.color,
                'fontSize': this.options.fontSize,
                'textDecoration': this.options.textDecoration
            });
        }
    };

//在插件中使用Beautifier对象
    $.fn.myPlugin = function(options) {
        //创建Beautifier的实体
        var beautifier=new Beautifier(this,options);
        //调用其方法
        return beautifier.beautify();
    }
})();
