while(n=readline()) {
    var arr = readline().split(" ");
    arr.sort(function(a,b) {
        return b-a;
    });
    var res1 = 0;
    var res2 = 0;
    for(var i=0;i<n;i++) {
        if(i%2==0) {
            res1 += parseInt(arr[i]);

        } else {
            res2 += parseInt(arr[i]);
        }
    }
    print(res1 - res2);
}