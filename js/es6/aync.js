const fs = require('fs');

const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

const gen = function* () {
    const f1 = yield readFile('/Users/ss/Documents/test.txt');
    const f2 = yield readFile('/Users/ss/Documents/test2.txt');

};

var g = gen();
var res1 = g.next();
var res2=g.next();


Promise.all([res1.value,res2.value]).then((data1,data2)=>{
    console.log(data1);
    console.log(data2);
});
