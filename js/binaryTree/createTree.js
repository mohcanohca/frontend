/**
 * Created by Lenovo on 2018/3/30.
 */
var result=[];
var postListUnrec=[];
function Node(data) {
    this.data=data;
    this.left=null;
    this.right=null;
}

function insertNode(data) {
    var n=new Node(data);//创建要插入的节点
    if(this.root==null){//若是空数
        this.root=n;
    }else{
        var cur=this.root;
        var parent;
        while(true){
            parent=cur;
            if(data<cur.data){
                cur=cur.left;
                if(cur==null){
                    parent.left=n;
                    break;
                }

            }else{
                cur=cur.right;
                if(cur==null){
                    parent.right=n;
                    break;
                }
            }
        }
    }
}
function preOrder(node) {
    if(!(node==null)){
        result.push(node.data);
        preOrder(node.left);
        preOrder(node.right);
    }
}
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        result.push(node.data);
        inOrder(node.right);
    }
}
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        result.push(node.data);
    }
}
function postOrderUnRec(node) {
    if(node){//若二叉树不为空
        var stack=[node];//将二叉树压入栈
        var tmp=null;//定义缓存变量
        while(stack.length!==0){
            tmp=stack[stack.length-1];//将栈顶的值保存在tmp中
            if(tmp.left&&node!==tmp.left&&node!=tmp.right){//若左子树不为空，且左子树没有被遍历过
                stack.push(tmp.left);
            }else if(tmp.right&&node!==tmp.left&&node!=tmp.right){
                stack.push(tmp.right);
            }else{
                postListUnrec.push(stack.pop().data);
                node=tmp;//用node记录上次出栈的节点
            }
        }

    }
}

function breadthTraversal(node) {
    if(node){
        var que=[node];//将当前节点放入队列
        var tmp=null;
        while(que.length!==0){//如果队列不为空，继续遍历
            tmp=que.shift();//取出队头
            result.push(tmp.data);//将当前元素的值放入结果数组
            if(tmp.left){//如果存在左子树
                que.push(tmp.left);
            }
            if(tmp.right){//如果存在右子树
                que.push(tmp.right);
            }
        }
    }
}

function BinaryTree() {
    this.root=null;
}
BinaryTree.prototype={
    constructor:Node,
    insertNode:insertNode,
    preOrder:preOrder,
    inOrder:inOrder,
    postOrder :postOrder,
    breadthTraversal:breadthTraversal,
    postOrderUnRec:postOrderUnRec
};



var bt=new BinaryTree();

bt.insertNode(4);
bt.insertNode(3);
bt.insertNode(5);
bt.insertNode(6);
bt.postOrderUnRec(bt.root);