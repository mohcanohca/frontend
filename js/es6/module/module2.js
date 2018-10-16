function getName() {
    console.log(this.name)
}

var num = 99;

var i = 0;

console.log('运行了' + (++i) + "次")

// export default 100;
export default num;//若两行default都存在，报错，Only one default export allowed per module.
// export {num as default}//与上一行等价

export {num}

export {getName}