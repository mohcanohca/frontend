//s, pattern都是字符串
function match(s, pattern)
{
    // write code here
    return matchCore(s,pattern);
}

function matchCore(s,pattern){
    if(s.length==0&&pattern.length==0)
        return true;
    if(pattern.charAt(1)=='*'){//若当前元素的下一元素是*
        if(s.charAt(0)==pattern.charAt(0)||pattern.charAt(0)=='.'){//若字符串中当前元素和模式中当前元素相同，分三种情况讨论
            //将*作为0次，忽略掉当前字符，pattern指向*后的字符
            return matchCore(s,pattern.substring(2))
                //将*作为1次，匹配s中的一个字符，pattern指向*后的字符
                ||matchCore(s.substring(1),pattern.substring(2))
                //将*作为多次，匹配s中的一个字符，pattern不变
                ||matchCore(s.substring(1),pattern);

        }
        else{
            //若当前元素不匹配，只能考虑*表示0次的情况，pattern取*后的字符
            return matchCore(s,pattern.substring(2));
        }
    }

    if((pattern.charAt(0)=='.'&&s.length!=0)||pattern.charAt(0)==s.charAt(0)){//如果pattern当前元素的下一元素不是*，就直接做字符匹配
        return matchCore(s.substring(1),pattern.substring(1));
    }
    return false;
}
print(match('b','ab*.*'));