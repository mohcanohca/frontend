var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var countLine=1;
var tokens=[];
var result=[];

rl.on('line', function(line){
    var arr=line.split(' ');
    var t=0;

    if(arr.length==1){
        countLine=parseInt(arr[0]);
    }else{
        tokens.push(line);
        countLine--;
        if(countLine===0){
            var max=0;
            var min=0;
            result=[];
            for(var i=0;i<tokens.length;i++){
                let arr=tokens[i].split(' ');
                var n=parseInt(arr[0]);
                var k=parseInt(arr[1]);

                if( n > 2 ) {
                    if (k * 2 == n)
                        max = k - 1;
                    if (k * 2 > n)
                        max = n - k;
                    if (k * 2 < n)
                        max = k - 1;
                }
                result.push(min+' '+max);
            }
            for(var j=0;j<result.length;j++){
                console.log(result[j]);
            }
        }
    }

});