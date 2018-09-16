/*function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
function ReverseList(pHead)
{
    // write code here
    if(!pHead) return null;
    var reverseHead=null;
    var pPre=null;
    var pNode=pHead;
    var pNext=null;
    while(pNode!=null){
        pNext=pNode.next;
        if(pNext==null){
            reverseHead=pNode;
        }
        pNode.next=pPre;
        pPre=pNode;
        pNode=pNext;
    }
    return reverseHead;
}/**
 * Created by Lenovo on 2018/4/4.
 */
