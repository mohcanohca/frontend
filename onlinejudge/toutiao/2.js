var line=readline();
var n1=line.split(' ')[0];
var n2=line.split(' ')[1];
var m=line.split(' ')[2];

var a=readline().split(' ');
var b=readline().split(' ');
for(var i=0;i<a.length;i++){
	a[i]=parseInt(a[i]);
}
for(var i=0;i<b.length;i++){
	b[i]=parseInt(b[i]);
}

var dp=[];
dp[0]=1;
for(var i=0;i<n1;i++){
	for(var j=a[i];j<=m;j++){
		if(!dp[j]) dp[j]=0;
		if(!dp[j - a[i]]) dp[j - a[i]]=0;
		dp[j] = ((dp[j] + dp[j - a[i]]) % 1000000007);
	}
}

for(var i=0;i<n2;i++){
	for(var j=m;j>=b[i];j--){
		if(!dp[j]) dp[j]=0;
		if(!dp[j - a[i]]) dp[j - a[i]]=0;
		dp[j] = ((dp[j] + dp[j - b[i]]) % 1000000007);
	}
}
print(dp[m]%1000000007);
