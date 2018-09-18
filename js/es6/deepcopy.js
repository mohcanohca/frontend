const deepClone=(obj)=>{
    var proto=Object.getPrototypeOf(obj);
    return Object.assign({},Object.create(proto),obj);
}