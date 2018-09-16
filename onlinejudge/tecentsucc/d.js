/**
 * 题目描述：括号匹配()[]{}
 * 例子：
 * "(){}[]"   =>  True
 * "([{}])"   =>  True
 * "(}"       =>  False
 * "[(])"     =>  False
 * "[({})](]" =>  False
 * @param braces
 * @returns {boolean}
 */
//switch
function validBraces(braces){
    var stack=[];
    var arr=braces.split('');
    if(arr.length%2!=0) return false;

    while(arr.length>0){
        if(stack.length==0){
            stack.push(arr.shift());
        }else{
            var cur=arr.shift();
            switch(cur){
                case ')':
                    if(stack[stack.length-1]=='('){
                        stack.pop();
                    }else{
                        stack.push(cur);
                    }
                    break;
                case ']':
                    if(stack[stack.length-1]=='['){
                        stack.pop();
                    }else{
                        stack.push(cur);
                    }
                    break;
                case '}':
                    if(stack[stack.length-1]=='{'){
                        stack.pop();
                    }else{
                        stack.push(cur);
                    }
                    break;
                default:
                    stack.push(cur);
                    break;
            }

        }
    }
    return stack.length==0?true:false;
}

//键值对判断
function validBraces(braces) {
    var paires={
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    var stack=[];
    for(var i=0;i<braces.length;i++){
        var cur=braces[i];
        if(cur=='('||cur=='['||cur=='{'){
            stack.push(cur);
        }
        else{
            if(stack[stack.length-1]==paires[cur]){
                stack.pop();
            }else{
                stack.push(cur);
            }
        }
    }
    return stack.length==0;
}

console.log(validBraces('[({})](]'))