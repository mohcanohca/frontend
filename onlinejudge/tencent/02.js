/**
 * Created by Lenovo on 2018/4/5.
 */

//22
// while(line=readline()) {
//     var n = line.split(" ")[0];
//     var m = line.split(" ")[1];
//     var first = Math.pow(2,n-1);
//     var sum1 = Math.pow(2,n)-1;
//     var x = parseInt(m/sum1);
//     first = x*first;
//     var y = m%sum1;
//     var p = n;
//     while (p>1) {
//         var h = Math.pow(2,p)-1+n-p;
//         var k = parseInt(y/h);
//         first = first + k*Math.pow(2,p-1);
//         y=y%h;
//         p--;
//     }
//     print(first);
// }

//3
// while(n=readline()) {
//     var arr = readline().split(" ");
//     arr.sort(function(a,b) {
//         return b-a;
//     });
//     var res1 = 0;
//     var res2 = 0;
//     for(var i=0;i<n;i++) {
//         if(i%2==0) {
//             res1 += parseInt(arr[i]);
//
//         } else {
//             res2 += parseInt(arr[i]);
//         }
//     }
//     print(res1 - res2);
// }


//1111
while(line=readline()) {
    var n = line.split(" ")[0];
    var m = line.split(" ")[1];
    var arr =[];
    for(var i=0;i<n;i++) {
        var strs = readline().split("");
        arr.push(strs);
    }
    var res = findTime(arr, n, m);
    print(res);
}
function findTime(arr, n, m) {
    var count =0;
    for(var i=0;i<n;i++) {
        for(var j=0;j<m;j++) {
            if(i==0) {
                if(arr[i][j] != 'X') {
                    count++;
                }
            }
            else {
                if(arr[i][j] == 'B') {
                    if(i!=0) {
                        if(arr[i-1][j+1] == 'X') {
                            count++;
                        }
                    }

                }
            }
        }
    }
    return count;
}

//222
// while(line=readline()) {
//     var n = line.split(" ")[0];
//     var m = line.split(" ")[1];
//     var first;
//     var sum;
//     if(Math.pow(2,n)-1 == m) {
//         first = Math.pow(2,n-1);
//     } else {
//         for(var i=0; i<n; i++) {
//             first=4;
//         }
//     }
//     print(first);
// }


//222
while(line=readline()) {
    var n = line.split(" ")[0];
    var m = line.split(" ")[1];
    var first = searchInsert(m,n);
    print(first);
}
function searchInsert(m,n) {
    var low=1;
    var high=m;
}