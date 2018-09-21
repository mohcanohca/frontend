function compare(a, b) {
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    return a - b;
}

function getSugar(childs, sugars) {
    var index = 0;
    var clen = childs.length;
    var slen = sugars.length;
    var ans = 0;
    for (var i = 0; i < clen; i++) {
        /*print('i:' + i);
        print('index:' + index);*/
        while (index < slen) {
            /*print('childs:' + childs[i]);
            print('sugars:' + sugars[index]);*/
            if (childs[i] <= sugars[index]) {
                ans++;
                index++;
                break;
            } else {
                index++;
            }
        }
     /*   print('index:' + index);*/
        if (index == slen)
            return ans;
    }
    return ans;
}

while (true) {
    var childs = readline().split(' ');
    var sugars = readline().split(' ');

    childs.sort(compare);
    sugars.sort(compare);
    print(getSugar(childs, sugars));
}






