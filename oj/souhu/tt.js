var n = parseInt(readline());
var arr = readline().split(' ');

var count = 0;
var ans = [];
var flag = 0;
var result = 1;

for (var i = 0; i < arr.length; i++) {
    if (flag == 1) {
        if (arr[i] == 0) {
            count++;
        }
        else {
            ans.push(count);
            count = 0;
        }
    }
    else if (flag == 0) {
        if (arr[i] == 1) {
            flag = 1;
            count = 0;
        }
    }
}
for (let i = 0; i < ans.length; i++) {
    result *= ans[i] + 1
}
print(result);