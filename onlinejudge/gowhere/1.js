var money=readline();
var consum1=Math.round(money*0.2);
var money2=money-consum1-3500;
var consum2=0;
if(money2<=0){
    consum2=0;
}
else if(money2<=1500){
    consum2=Math.round(money2*0.03);
}else if (money2<=4500){
    consum2=Math.round(money2*0.1)-105;
}
else if (money2<=9000){
    consum2=Math.round(money2*0.2)-555;
}
else if (money2<=35000){
    consum2=Math.round(money2*0.25)-1005;
}
else if (money2<=55000){
    consum2=Math.round(money2*0.3)-2755;
}
else if (money2<=80000){
    consum2=Math.round(money2*0.35)-5505;
}
else{
    consum2=Math.round(money2*0.45)-13505;
}

var left=money-consum1-consum2;
print(left);
