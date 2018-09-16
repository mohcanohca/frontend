/**
 * Created by Lenovo on 2018/3/25.
 */
/*function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
function deleteDuplication(pHead)
{
    // write code here
    var pre,cur,next;
    pre=new ListNode('head');

    if(pHead==null) return pHead;
    pHead=deleteDupHead(pHead);
    pre.next=pHead;
    cur=pHead;
    next=cur.next;
    var flag;//判断每一轮是否有重复数
    while(next!=null){
        if(cur.val==next.val){
            next=next.next;
            flag=true;
        }else{
            if(!flag) pre=cur;
            pre.next=next;
            cur=next;
            next=next.next;
            flag=false;
        }

    }
    return pHead;
}

function deleteDupHead(pHead){
    if(pHead==null) return pHead;
    var next=pHead.next;
    var count=0;//标志开头元素是否相同
    while(next!=null&&pHead.val==next.val){
        pHead=next;
        next=next.next;
        count++;
    }
    if(count>0){
        pHead=next;
        return deleteDupHead(pHead);
    }
    return pHead;

}
function ListNode(x){
 this.val = x;
 this.next = null;
 }

 var n1=new ListNode(1);
 var n2=new ListNode(2);
 var n3=new ListNode(3);
 var n4=new ListNode(3);
 var n5=new ListNode(5);
 n1.next=n2;
 n2.next=n3;
 n3.next=n4;
 n4.next=n5;
var h=deleteDuplication(n1);
while(h!=null){
    print(h.val);
    h=h.next;
}
