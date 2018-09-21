while (true) {
    var line = readline();
    var result;
    print(result);
}

function simplifyPath(path) {
    var stack = path.split('/');
    var resultArr = [];
    for (var i = 0; i < stack.length; i++) {
        if (stack[i] == '.' || stack[i] == '')
            continue;
        else if (stack[i] == '..') {
            if (resultArr.length != 0)
                resultArr.pop();
        }
        else
            resultArr.push(stack[i]);
    }
    var result = resultArr.join('/');
    result = '/' + result;
    return result;
}

function simple(path) {
    var index = path.lastIndexOf('/', path.length-2);
    var result = path.substring(index, path.length - 1);
    return result;
}

var pathInput = readline();
// var pathOutput = simplifyPath(pathInput);
var pathOutput = simple(pathInput);
print(pathOutput);