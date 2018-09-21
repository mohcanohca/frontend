while (true) {
    var line = readline();
    var arr = readline().split(' ');
    var ans = [];
    var result = 1;
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            count++;
        } else {
            ans.push(count);
            count = 0;
        }
        // print('arr[' + i + ']:' + arr[i])
    }


    for (var i = 0; i < ans.length; i++) {
        result *= (ans[i] + 1);
    }
    print(result);
}