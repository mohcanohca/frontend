
function find(arr,p) {
    if(p!=arr[p]){
        arr[p]=find(arr,arr[p]);
    }
    return arr[p];

}
function merge(arr,sz,x,y) {
    var i=find(arr,x);
    var j=find(arr,y);
    if(i==j) return;
    if (sz[i] < sz[j]) {
        arr[i] = j;
        sz[j] += sz[i];
    }
    else {
        arr[j] = i;
        sz[i] += sz[j];
    }
}
function connected(arr,x,y) {
    return find(arr,x)==find(arr,y);
}

var num = read_line();
var N = num.split(' ')[0];
var M = num.split(' ')[1];
var result = {};
var arr=[];
var sz=[];
for (var i = 0; i < N; i++)
{
    arr[i]=i;
    sz[i]=1;
}

for (var i = 0; i < M; i++) {
    nodes = read_line();
    var n1 = nodes.split(' ')[0];
    var n2 = nodes.split(' ')[1];
    merge(arr,sz,n1,n2);

}


var Q = read_line();
var count = 0;

for (i = 0; i < Q; i++) {
    nodes = read_line();
    var n1 = nodes.split(' ')[0];
    var n2 = nodes.split(' ')[1];
    if(connected(arr,n1,n2)){
        count++;
    }
}
print(count);