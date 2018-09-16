//求有趣的硬币数
var s;
while(s=readline()) {
    var len = s.length;
    var count = 0;
    for(var i=0;i<len;i++) {
        if(i==0) {
            if(s.charAt(i) != s.charAt(i+1)) count++;
        } else if(i==len-1) {
            if(s.charAt(i) != s.charAt(i-1)) count++;
        } else {
            if(s.charAt(i) != s.charAt(i+1) || s.charAt(i) != s.charAt(i-1)) count++;
        }
    }
    print(count);
}
