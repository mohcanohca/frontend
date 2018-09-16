window.onload = function () {
    waterfall('main', 'box');
    var dataInt = {'data': [{'src': 'P_00.jpg'}, {'src': 'P_01.jpg'}, {'src': 'P_02.jpg'}, {'src': 'P_03.jpg'}, {'src': 'P_04.jpg'}, {'src': 'P_05.jpg'}]};
    window.onscroll = function () {
        if (checkScrollSlide) {
            for (var i in dataInt.data) {
                var oBox = document.createElement('div');
                oBox.className = 'box';
                var oParent = document.getElementById('main');
                oParent.appendChild(oBox);
                var oPic = document.createElement('div');
                oPic.className = 'pic';
                oBox.appendChild(oPic);
                var oImg = document.createElement('img');
                oImg.src = 'images/'+dataInt.data[i].src;
                oPic.appendChild(oImg);

            }
            waterfall('main', 'box');


        } else {

        }
    }
}

function waterfall(parent, box) {

    var oParent = document.getElementById(parent);
    //将parent下的所有class为box的元素取出来
    var oBoxs = getByClass(oParent, box);
    //计算整个页面显示的列数（页面宽度/box宽度）
    var oBoxW = oBoxs[0].offsetWidth;//瀑布流中所有盒子的宽度相同
    // console.log(oBoxW);//宽度202=图片宽度165+内填充10*2+边框宽1*2+box的内填充15
    var cols = Math.floor(document.documentElement.clientWidth / oBoxW);//页面宽度/一个盒子的宽度
    //设置main的宽
    oParent.style.cssText = 'width:' + cols * oBoxW + 'px;margin:0 auto';
    var hArr = [];//存放每一列的高度，初始应该是第一行的图片的高度
    for (var i = 0; i < oBoxs.length; i++) {
        if (i < cols) {
            hArr.push(oBoxs[i].offsetHeight);
        } else {
            var minH = Math.min.apply(null, hArr);
            var index = getMinhIndex(hArr, minH);
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            // oBoxs[i].style.left = oBoxW * index + 'px';//方法一：使用一个盒子的宽度*左边的盒子的个数（即索引）
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';//方法二：获取高度最小的盒子距离最左侧的距离

            //修改存放列高度的数组
            hArr[index] += oBoxs[i].offsetHeight;//高度最小的列添加了一个盒子，高度增加该盒子高度
        }
    }
}

/**
 * 根据class获取元素
 * 原理：获取父容器中所有的元素，比较每个元素的class是否与传入的clsName相同，若相同，说明是要取的元素，将其存入到数组
 * @param parant 父元素
 * @param clsName class名
 */
function getByClass(parent, clsName) {
    var boxArr = new Array(),//用来存储获取到的所哟class为clsName的元素
        oElements = parent.getElementsByTagName('*');//获取父元素parent下的所有子元素


    for (var i = 0; i < oElements.length; i++) {
        if (oElements[i].className === clsName) {
            boxArr.push(oElements[i]);//将元素添加到数组末尾
        }
    }
    return boxArr;
}

/**
 * 获取val值在数组中出现的位置
 * @param arr 数组
 * @param val 值
 */
function getMinhIndex(arr, val) {
    for (var i in arr) {
        if (arr[i] === val) {
            return i;
        }
    }
}

//检测是否具备了滚条加载数据块的条件
function checkScrollSlide() {
    var oParent = document.getElementById('main');
    var oBoxs = getByClass(oParent, 'box');
    var lastBoxH = Math.floor(oBoxs[oBoxs.length - 1].offsetTop + oBoxs[oBoxs.length - 1].offsetHeight / 2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;
    /*if (lastBoxH<=scrollTop+height){
     return true;
     }else{
     return false;
     }*/
    return (lastBoxH < scrollTop + height) ? true : false;
}