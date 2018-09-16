/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
/*
 层序遍历：借助队列
 */
function PrintFromTopToBottom(root)
{
    // write code here
    var queue=[root];
    var cur;
    var result=[];
    while(queue.length>0){
        cur=queue.shift();
        result.push(cur.val);
        if(cur.left!=null){
            queue.push(cur.left);
        }
        if(cur.right!=null){
            queue.push(cur.right);
        }
    }
    return result;
}