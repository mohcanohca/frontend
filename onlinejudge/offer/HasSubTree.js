/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(pRoot1==null||pRoot2==null) return false;
    var result;
    if(pRoot1.val==pRoot2.val){
        result=isSameRootTree(pRoot1.left,pRoot2.left)&&isSameRootTree(pRoot1.right,pRoot2.right);
        if(result==false){
            return HasSubtree(pRoot1.left,pRoot2)||HasSubtree(pRoot1.right,pRoot2);
        }else{
            return true;
        }
    }else{
        return HasSubtree(pRoot1.left,pRoot2)||HasSubtree(pRoot1.right,pRoot2);
    }
}
function isSameRootTree(r1,r2){
    if(r2==null) return true;
    if(r1==null) return false;
    if(r1.val==r2.val){
        return isSameRootTree(r1.left,r2.left)&&isSameRootTree(r1.right,r2.right);
    }
    return false;

}