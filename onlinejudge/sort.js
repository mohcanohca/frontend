/**
 * Created by Lenovo on 2018/3/23.
 */
(function () {
    var n, arr,obj;
    var objArr = [];
    while (n = readline()) {
        for (var i = 0; i < n; i++) {
            for (var i = 0; i < n; i++) {
                arr = readline().split(' ');
                obj = {};
                obj.name = arr[0];
                obj.difficulty = getDifficulty(arr[1], arr[2]);
                objArr.push(obj);
            }
            objArr.sort(sortByName);
            for (var j = 0; j < objArr.length; j++) {
                print(objArr[j].name + ' ' + objArr[j].difficulty);
            }
        }
    }
})();

function sortByName(obj1, obj2) {
    var name1=obj1.name.toUpperCase();
    var name2=obj2.name.toUpperCase();

    if (name1 == name2) return 0;
    if (name1 > name2) return 1;
    if (name1 < name2) return -1;
}

function getDifficulty(a, b) {
    var result = b / a;
    if (result >= 0 && result <= 0.3) return 5;
    if (result > 0.3 && result <= 0.6) return 4;
    if (result > 0.6 && result <= 100) return 3;
}