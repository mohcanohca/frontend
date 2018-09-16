/**
 * Created by Lenovo on 2018/3/24.
 */
var line=readline().split(' ');
var n=parseInt(line[0]),m=parseInt(line[1]);
var count=0;
var numsA=readline().split(' ');
var numsB=readline().split(' ');


var lenA=numsA.length;
var lenB=numsB.length;
var sumA=0,sumB=0;
var averA,averB;

for(var i=0;i<lenA;i++){
    numsA[i]=parseInt(numsA[i]);
    sumA+=numsA[i];
}
// print('sumA'+sumA);
for(var i=0;i<lenB;i++){
    numsB[i]=parseInt(numsB[i]);
    sumB+=numsB[i];
}
// print('sumB'+sumB);

averA=sumA/lenA;
averB=sumB/lenB;

//从a向b
var pivotA=sumA-averA*(lenA-1);
var pivotB=averB*(lenB+1)-sumB;

// print('averA'+averA);
// print('averB'+averB);
// print('pivotA'+pivotA);
// print('pivotB'+pivotB);

for(i=0;i<lenA;i++){

    if(numsA[i]<=pivotA&&numsA[i]>pivotB){
        // print(numsA[i]);
        count++;
    }
}

//从b向a放
pivotA=averA*(lenA+1)-sumA;
pivotB=sumB-averB*(lenB-1);

for(i=0;i<lenB;i++){
    if(numsB[i]<=pivotB&&numsB[i]>pivotA){
        // print(numsB[i]);
        count++;
    }
}
print(count);

