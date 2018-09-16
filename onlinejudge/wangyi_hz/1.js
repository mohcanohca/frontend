/*var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    var tokens = line.split(' ');
    // console.log(parseInt(tokens[0]));

    let n=parseInt(tokens[0]);
    let count=0;
    if(n<5){
        count=1;
    }else{
        if(n%5==0){
            count=Math.floor(n/5);
        }else{
            count=Math.floor(n/5);
            count++;
        }

    }

    console.log(count);

});
var len = parseInt(readline());
var count = 0;
for(var i = 0;i < len; i++){
    lines = readline().split(" ");
    var n=parseInt(lines[0]);

    if(n<5){
        count=1;
    }else{
        if(n%5==0){
            count=Math.floor(n/5);
        }else{
            count=Math.floor(n/5);
            count++;
        }
    }
}
print(count);*/

while(line=readline()){
    var lines = line.split(" ");
    var n = parseInt(lines[0]);

    var count=0;
    if(n<5){
        count=1;
    }else{
        if(n%5==0){
            count=Math.floor(n/5);
        }else{
            count=Math.floor(n/5);
            count++;
        }
    }
    print(count);
}

/*
import java.util.*;
public class Main{
    public static void main (String[] args){
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    int s_5 = n /5;
    s_5 += (n % 5 ==0) ? 0:1;
    System.out.println(s_5);
}
}*/
