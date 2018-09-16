/*
题目：并查集
第一行输入两个整数N（0<N<=1000)和M（0<=M<1000），中间用一个空格隔开。接下来的M行，每行有两个

思路：
 1、将相通的元素看做一个组织，每个组织有一个leader，每隔元素只需要记录leader即可
 2、初始时，每个元素的leader都是自己，每个元素所属的组织的大小为1
 3、如果两个元素的leader不同，查看所属的组织大小，小的归并到大的里面
 4、查找两个元素是否属于同一组织，只需要查看两者的leader是否相同即可
 */

//找到p所属的连接块
function find(pre,p) {
    if(pre[p]!=p){//若p的leader不是自身
        pre[p]=find(pre,pre[p]);//找上一级的上一级
    }
    return pre[p];
}

//将x，y的关系添加到块中
function join(pre,size,x,y) {
    var i=find(pre,x);
    var j=find(pre,y);
    if(i==j) return;
    if(size[i]>=size[j]){
        pre[j]=i;
        size[i]+=size[j];
    }else{
        pre[i]=j;
        size[j]+=size[i];
    }
}

var M,N,Q,x,y;
var count=0;
var pre=[];
var size=[];
var line=readline();
N=line.split(' ')[0];
M=line.split(' ')[1];

for(var i=1;i<=N;i++){
    pre[i]=i;
    size[i]=1;
}
for(var i=0;i<M;i++){
    line=readline();
    x=line.split(' ')[0];
    y=line.split(' ')[1];
    join(pre,size,x,y);
}

Q=readline();
for(var i=0;i<Q;i++){
    line=readline();
    x=line.split(' ')[0];
    y=line.split(' ')[1];
    if(find(pre,x)==find(pre,y)){
        count++;
    }
}
print(count);