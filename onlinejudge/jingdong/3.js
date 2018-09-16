var str;
while(str=readline()) {
    var arr = [];
    var len = str.length;
    for(var i=0; i<len; i++) {
        arr[i] = [];
        for(var j=0; j<len; j++) {
            arr[i][j] = 0;
        }
    }
    for(var k=0; k<len; k++) {
        arr[k][k] = 1;
        for(var l=k-1; l>=0; l--) {
            arr[l][k] = arr[l+1][k] + arr[l][k-1] - arr[l+1][k-1];
            if(str.charAt(l) == str.charAt(k)) {
                arr[l][k] += 1 + arr[l+1][k-1];
            }
        }
    }
    print(arr[0][len-1]);
}