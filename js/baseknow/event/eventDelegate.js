/*
原生js实现jQuery的事件代理
jQuery中事件代理方式：
1. $.on( events [, selector ] [, data ], handler )||.on( events [, selector ] [, data ])
2. $(parentSelector).delegate( selector, eventType[, eventData], handler )||$(parentSelector).delegate( selector,events)

关键点：
1、父层代理的元素可能有多个，需要一一绑定事件
2、绑定的事件类型可能有多个，需要一一绑定事件
3、在处理匹配被代理的元素时需要考虑兼容性问题
4、在执行所绑定的函数时需要传入正确的参数，考虑this的问题
 */
/**
 * 事件代理
 * @param parentSelector 选择器字符串，过滤需要实现代理的父层元素，即事件绑定到的元素
 * @param targetSelector 选择器字符串，过滤触发事件的选择器元素的后代，即需要被代理事件的元素
 * @param events 一个或多个用空格或其他特定符号分隔的事件类型，例如click或keydown.click
 * @param handler 需要代理事件响应的函数
 */
function eventDelegate(parentSelector,targetSelector,events,handler) {
    // 触发执行的函数
    function triFunction (e) {
        // 兼容性处理
        var event = e || window.event;//只有IE支持window.event此种获取事件对象的方法
        var target = event.target || event.srcElement;//前者是DOM事件获取目标对象，后者是IE下获取目标对象
        // 处理 matches 的兼容性
        //Element.matches()方法的兼容处理
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function(s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {}
                    return i > -1;
                };
        }

        //当目前触发事件的目标元素target没有匹配到targetSelector时，将事件向上冒泡到其父元素，再与targetSelector比较，直至冒泡到绑定该事件的代理元素上
        while(target!==event.currentTarget){
            // 判断是否匹配到我们所需要的元素上
            if (target.matches(targetSelector)) {
                // 执行绑定的函数，注意 this
                handler.call(target, Array.prototype.slice.call(arguments));
            }
            target=target.parentNode;
        }

    }

    // 如果有多个事件的话需要全部一一绑定事件
    events.split('.').forEach(function (evt) {//绑定一种事件
        // 多个父层元素的话也需要一一绑定
        Array.prototype.slice.call(document.querySelectorAll(parentSelector))
            .forEach(function (parent) {
                parent.addEventListener(evt, triFunction);
            }
        );
    });
}