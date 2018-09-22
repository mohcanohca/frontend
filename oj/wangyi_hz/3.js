/**
 * 黑白相间橡皮泥，可从某个地方分开，将得到的两个传同时翻转，再拼接到一起，求最终可以得到的最长的连续的黑白相间的子串的长度
 *
 * 输入：字符串s，只包含'b'和'w'，分别表示黑色和白色的橡皮泥块，字符串长度满足1<=|s|<=10^5
 * 示例：
 * 输入bwbwb，输出5
 * 输入wwb，输出3
 */

var str;
while (str = readline()) {
    var len = str.length;
    var dp = new Array(len);
    var max = 1;
    dp[0] = 1;

    //遍历所有元素，计算出所有子串的长度
    for (var i = 1; i < len; i++) {
        if (str[i] == str[i - 1]) {
            //若当前位置与前一位置颜色相同，说明它是新子串的第一个
            dp[i] = 1;
        } else {
            dp[i] = dp[i - 1] + 1;
            max = Math.max(dp[i], max);//更新最大值
        }
    }

    if (str[0] !== str[len - 1]) {
        //如果首尾元素不同，可能会拼接得到更长的子串
        var index = 1;
        while (dp[index] !== 1) {
            index++;
        }
        max = Math.max(max, dp[index - 1] + dp[len - 1]);
    }
    print(max);
}


