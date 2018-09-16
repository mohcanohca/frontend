function machine(x,y){
    this.x=x;
    this.y=y;
    this.state=false;
}
function task(time,level){
    this.time=time;
    this.level=level;
    this.value=200*time+3*level;
}
var n;
var m;
var machines=[];
var tasks=[];
var price=0;
var count=0;
var line=readline();
n=line.split(' ')[0];
m=line.split(' ')[1];
var n1=n,m1=m;
while(n1>0){
    line=readline();
    machines[n1-1]=new machine(line.split(' ')[0],line.split(' ')[1]);
    n1--;
}
while(m1>0){
    line=readline();
    tasks[m1-1]=new task(line.split(' ')[0],line.split(' ')[1]);
    m1--;
}
function result(){
    for(var i=0;i<m;i++){
        tasks[i].value=200*tasks[i].time+3*tasks[i].level;
    }
    tasks.sort(function(a,b){
        return b.value>a.value;
    });
    machines.sort(function (a,b) {
        if(a.x==b.x) return b.y>a.y;
        else return b.x>a.x;
    })

    for(var i=0;i<tasks.length;i++){
        var tmp=-1;
        var flag=0;
        for(var j=0;j<machines.length;j++){
            if(!machines[j].state){
                if(machines[j].x>=tasks[i].time&&machines[j].y>=tasks[i].level){
                    tmp=j;
                }
                else if(tmp!=-1){
                    machines[tmp].state=true;
                    count++;
                    price+=tasks[i].value;
                    flag=1;
                    break;
                }
                else break;
            }
        }

        if(flag==0&&tmp!=-1){
            machines[tmp].state=true;
            count++;
            price+=tasks[i].value;
            flag=1;
        }

    }
    print(count+' '+price);
}

result();