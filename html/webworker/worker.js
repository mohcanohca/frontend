//运行在一个新的全局上下文中————self
// document.getElementById('num');//获取不到document，显示未定义。因为该上下文中无法访问到主线程中的全局对象
for(var i=0;i<100;i++){
    console.log(i)
}
self.onmessage=function (e) {
    console.log(e.data);
    for(var i=100;i<1000;i++){
        console.log(i)
    }
    var data={"name":'haha'};
    postMessage(JSON.stringify(data));
}
