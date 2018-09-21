var nums = readline().split(' ');
var M = nums[0];
var N = nums[1];
var K = nums[2];

var words = readline().split(' ');
var alp = [];
var flag = [];
var result = [];
var center;

for (var i = 0; i < N; i++) {
    var line = readline();
    var ch = line.split(' ');
    alp[i] = ch;
}

for (var j = 0; j < K; j++) {
    initFlag(N, M);//初始化标识数组
    findWord(words[j]);

}

for (var i = 0; i < result.length; i++) {
    print(result[i]);
}

function findWord(word) {
    // print(word);
    var l = 0;
    var chs = word.split('');

    while (center = findStart(chs[0])) {
        // print('start:' + center.x, center.y)
        for (l = 1; l < chs.length; l++) {
            var ch = chs[l];
            //若找不到当前元素，停止循环
            if (!findChar(ch, center)) {
                break;
            }
        }
        if (l == chs.length) {
            //若当前单词的所有字母都找到，将其放入结果数组
            result.push(words[j]);
            break;
        }
    }

}

function initFlag(n, m) {
    for (var i = 0; i < n; i++) {
        flag[i] = new Array(m);
        for (var j = 0; j < m; j++) {
            flag[i][j] = false;
        }
    }
}

function findStart(ch) {
    for (var m = 0; m < alp.length; m++) {
        var index = alp[m].indexOf(ch);
        if (index !== -1 && !flag[m][index]) {
            flag[m][index] = true;
            return {
                x: m,
                y: index
            };
        }
    }
    return null;
}

function findChar(ch, cur) {
    // print(ch);
    // print(cur.x, cur.y);
    var center_x = cur.x;
    var center_y = cur.y;
    //若给了中心值，从中心处向四周找
    var left = center_x - 1;
    var right = center_x + 1;
    var top = center_y - 1;
    var bottom = center_y + 1;
    if (left >= 0 && !flag[left][center_y] && alp[left][center_y] == ch) {
        flag[left][center_y] = true;
        center = {
            x: left,
            y: center_y,
        };
        return true;
    }

    if (right < M && !flag[right][center_y] && alp[right][center_y] == ch) {
        flag[right][center_y] = true;
        center = {
            x: right,
            y: center_y,
        };
        return true;
    }
    if (top >= 0 && !flag[center_x][top] && alp[center_x][top] == ch) {
        flag[center_x][top] = true;
        center = {
            x: center_x,
            y: top,
        };
        return true;
    }
    if (bottom < N && !flag[center_x][bottom] && alp[center_x][bottom] == ch) {
        flag[center_x][bottom] = true;
        center = {
            x: center_x,
            y: bottom,
        };
        return true;
    }
    return false;


}

