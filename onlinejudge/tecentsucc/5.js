var Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
var bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
    allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;

//转成十进制
function SourceToDecimal(string, source) {
    var arr = string.split('');
    var result = 0;
    switch (source) {
        case bin:
            while (arr.length > 0) {
                result = result * 2 + parseInt(arr.shift());
            }
            break;
        case oct:
            while (arr.length > 0) {
                result = result * 8 + parseInt(arr.shift());
            }
            break;
        case hex:
            while (arr.length > 0) {
                var cur = arr.shift();
                if (cur >= '0' && cur <= '9') {
                    cur = parseInt(cur);
                } else {
                    cur = cur - 'a' + 10;
                }
                /*switch (cur) {
                 case 'a':
                 cur = 10;
                 break;
                 case 'b':
                 cur = 11;
                 break;
                 case 'c':
                 cur = 12;
                 break;
                 case 'd':
                 cur = 13;
                 break;
                 case 'e':
                 cur = 14;
                 break;
                 case 'f':
                 cur = 15;
                 break;
                 default:
                 cur = parseInt(cur);

                 }*/
                result = result * 16 + cur;
            }
            break;
        //字母表=>十进制
        case allow:
        case alup:
            string = string.toLowerCase();
            arr = string.split('');
            while (arr.length > 0) {
                var cur = arr.shift();
                cur = cur - 'a';
                /*switch (cur) {
                 case 'a':
                 cur = 10;
                 break;
                 case 'b':
                 cur = 11;
                 break;
                 case 'c':
                 cur = 12;
                 break;
                 case 'd':
                 cur = 13;
                 break;
                 case 'e':
                 cur = 14;
                 break;
                 case 'f':
                 cur = 15;
                 break;
                 default:
                 cur = parseInt(cur);

                 }*/
                result = result * 26 + cur;
            }
            break;
        case alpha:
            while (arr.length > 0) {
                var cur = arr.shift();
                cur = alpha.indexOf(cur);
                /*switch (cur) {
                 case 'a':
                 cur = 10;
                 break;
                 case 'b':
                 cur = 11;
                 break;
                 case 'c':
                 cur = 12;
                 break;
                 case 'd':
                 cur = 13;
                 break;
                 case 'e':
                 cur = 14;
                 break;
                 case 'f':
                 cur = 15;
                 break;
                 default:
                 cur = parseInt(cur);

                 }*/
                result = result * alpha.length + cur;
            }
        default:
            break;

    }
    return result;
}

function DecimalToTarget(num, target) {
    var result = [];
    if (num == 0) return 0;
    switch (target) {
        case 2:
        case 8:
            while (num > 0) {
                result.unshift(num % target + '');
                num = Math.floor(num / target);
            }
            break;
        case 16:
            while (num > 0) {
                var cur = num % target;
                switch (cur) {
                    case 10:
                        cur = 'a';
                        break;
                    case 11:
                        cur = 'b';
                        break;
                    case 12:
                        cur = 'c';
                        break;
                    case 13:
                        cur = 'd';
                        break;
                    case 14:
                        cur = 'e';
                        break;
                    case 15:
                        cur = 'f';
                        break;
                    default:
                        cur = cur + '';

                }
                result.unshift(cur);
                num = Math.floor(result / target);
            }
            break;
        default:
            break;

    }

    return result.join('');
}

function toDecimal(string, source) {
    var arr = string.split('');
    var result = 0;//存放转成的十进制
    while (arr.length > 0) {
        var cur = arr.shift();
        cur = source.indexOf(cur);
        result = result * source.length + cur;
    }
    return result;
}

function DecimalToOther(num, target) {
    var result = [];
    if (num == 0) return target.charAt(0);
    while (num > 0) {
        var left = num % target.length;
        result.unshift(target.charAt(left));
        num = Math.floor(num / target.length);
    }
    return result.join('');
}

function toUpper(string) {
    return string.toUpperCase();
}
function toLower(string) {
    return string.toLowerCase();
}

function convert(input, source, target) {
    // TODO
    var result;
    var conti = false;
    switch (true) {
        case source == allow && target == alup:
            result = toUpper(input);
            break;
        case source == alup && target == allow:
            result = toLower(input);
            break;
        default:
            /*        case source==bin:
             case source==oct:
             case source==dec:
             case source==hex:
             case target==bin:
             case target==oct:
             case target==dec:
             case target==hex:
             case*/
            result = toDecimal(input,source);
            conti = true;
            break;
    }
    if(conti){
        result=DecimalToOther(result,target);
    }
    return result;
}

var log=console.log;
log(convert("15", dec, bin));
log(convert("15", dec, oct));
log(convert("1010", bin, dec));
log(convert("1010", bin, hex));

log(convert("0", dec, alpha));
log(convert("27", dec, allow));
log(convert("hello", allow, hex));
log(convert("SAME", alup, alup));