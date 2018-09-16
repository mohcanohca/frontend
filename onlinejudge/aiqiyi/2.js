while(line=readline()){
    var ans='';
    var index=0;
    var chs=line.split("");
    var i=0;
    var max;
    while(i<chs.length){
        max = chs[i];
        var index = i;
        for(var j=i+1;j<chs.length;j++){
            if(chs[j]>chs[index]){
                max = chs[j];
                index = j;
            }
        }
        ans+=max;
        i=index+1;
    }
    print(ans);
}