/**
 * Created by Lenovo on 2018/3/26.
 */
//使用promise封装ajax
const getJSON=function (url) {
    //创建一个Promise对象，以一个函数作为参数
    const promise=new Promise(function (resolve,rejected) {
        //resolve和reject参数是js引擎自动传递的
        //resolve：将promise对象的状态转成resolved
        //reject：将promise对象的状态转成rejected
        const handler=function () {
            //判断是否接收到全部响应数据。readyState每次改变都会触发readystatechange事件
            if(this.readyState!==4) return;
            if(this.status===200){//服务器响应成功
                resolve(this.response);//将XHR对象的响应信息传输给promise.then(成功回调，失败回调)的成功回调函数
            }else{
                reject(new Error(this.statusText));//传输一个失败对象给then中的失败回调函数
            }
        };

        const client=new XMLHttpRequest();
        client.open('GET',url);//open()的三个参数：1.请求类型；2.请求的URL；3.是否异步发送请求
        client.onreadystatechange=handler;
        client.responseType='json';//设置希望获取的响应类型
        client.setRequestHeader('Accept','application/json');//设置浏览器能够处理的内容类型
        client.send();
    });
    return promise;//返回promise对象

};

getJSON('/post.json').then(function (response) {
    console.log('Contents:'+response);
},function (error) {
    console.log('错啦',error);
})