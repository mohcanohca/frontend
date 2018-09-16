//1111
//蓝色 绿色 黄色 划线
/*
n行m列字符串
XYXX
XXYB
XGBX
需要画几笔 
*/
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
            if(arr[i][j] == 'B') {
                if(i==0 || !arr[i-1][j+1] || (arr[i-1][j+1] != 'B' && arr[i-1][j+1] != 'G'))  count++;
            } else if(arr[i][j] == 'Y') {
                if(i==0 || !arr[i-1][j-1] || (arr[i-1][j-1] != 'Y' && arr[i-1][j+1] != 'G'))  count++;
            } else if(arr[i][j] == 'G') {
                if(i==0 || !arr[i-1][j+1] || (arr[i-1][j+1] != 'B' && arr[i-1][j+1] != 'G')) count++;
                if(i==0 || !arr[i-1][j-1] || (arr[i-1][j-1] != 'Y' && arr[i-1][j-1] != 'G')) count++;
            }
        }
    }
    return count;
}