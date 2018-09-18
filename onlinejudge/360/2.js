var n = readline();
for (var i = 0; i < n; i++) {
    var nums = readline().split(' ');
    var k = nums[0];
    var l = nums[1];
    var r = nums[2];

    var count1 = 0;
    var tmp = 0;
    while (Math.floor(l / k)) {
        count1++;
        l = Math.floor(l / k);
    }

    tmp=Math.pow(k,++count1)-1;

    if (tmp > r) {
        print(l);
    } else {
        while (tmp <= r) {
            tmp = Math.pow(k, ++count1) - 1;
        }
        tmp = (tmp + 1) / k - 1;
    }

    print(tmp);
}
