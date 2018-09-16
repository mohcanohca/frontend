while(line=readline()){
    var lines = line.split(" ");
    var nums=[];
    for(var i=0;i<3;i++){
    	nums.push(parseInt(lines[i]));
    }
    nums.sort(sortByNum);
    var max=nums[2];
    var mid=nums[1];
    var min=nums[0];
    var left1=max-min;
    var left2=max-mid;
    var count=0;

    if((left1-left2)%2!=0){
    	count++;
    	left2++;
    }
    count+=left2;
    count=count+(left1-left2)/2;
    print(count);

}
function sortByNum(a,b){
	return a-b;
}