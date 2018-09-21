function f(n) {
    var result = 0;
    var arr = n.split('');
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var count = parseInt(arr[i]);
        for (var j = len - i - 1; j > 0; j--) {
            result += Math.pow(4, j);
        }
        if (count >= 9) {
            result += 4 * Math.pow(4, len - i - 1);
        } else if (count >= 6) {
            result += 3 * Math.pow(4, len - i - 1);
        } else if (count >= 4) {
            result += 2 * Math.pow(4, len - i - 1);
        } else if (count >= 2) {
            result += Math.pow(4, len - i - 1);
        }
    }
    return result;
}

function rotate(n) {
    var count = 0;
    for (var cur = 0; cur < n; cur++) {
        var str = cur.toString();
        var dif = flase;
        var valid = true;

        for (var j of str) {
            switch (j) {
                case '2':
                case '5':
                case '6':
                case '9':
                    dif = true;
                    break;
                case '3':
                case '4':
                case '7':
                    valid = false;
                    break;
                default:
                    break;
            }
        }
        if (dif && valid) ++count;
    }

    return count;
}

while (line = readline()) {
    var n = line;
    print(rotate(n));
}