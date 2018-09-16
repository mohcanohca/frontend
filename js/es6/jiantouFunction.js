let test=(name,age)=>{
    // console.log(arguments);
    console.log(this);

};

function common(name){
    /*console.log(arguments);
    console.log(this.name);*/
}

test('haha',10);
common('haha',10);
