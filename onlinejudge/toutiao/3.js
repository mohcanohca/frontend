var line=readline();
var ops=line.split('');
var Q=parseInt(readline());
var N,M,X,Y,steps;
var ans=[];
while(Q--){
	line=readline().split(' ');
	N=parseInt(line[0]);
	M=parseInt(line[1]);
	X=parseInt(line[2]);
	Y=parseInt(line[3]);
	steps=0;
	var flag=true;
	for(var i=0;i<ops.length;i++){
		switch(ops[i]){
			case 'u':
				Y--;
				steps++;
				if(Y<=0){
					flag=false;
					break;
				}
				break;
			case 'd':
				Y++;
				steps++;
				if(Y>N){
					flag=false;
					break;
				}
				break;
			case 'l':
				X--;
				steps++;
				if(X<=0){
					flag=false;
					break;
				}
				break;
			case 'r':
				X++;
				steps++;
				if(X>M){
					flag=false;
					break;
				}
				break;
			break;
		}
		print('X'+X);
		print('Y'+Y);
		if(!flag) break;

	}
	ans.push(steps);
}
for(var i=0;i<ans.length;i++){
	print(ans[i]);
}
