/*遍历DOM树*/
//DOMNode.children：返回子节点DOM元素集合，不包含text节点
//DOMNode.childNodes：返回子节点DOM元素集合，包含text节点
//DOMNode.childElementCount：返回子节点数量，包含text节点

//深度遍历
function traverseByDFS(domRoot) {
    var child = domRoot.firstElementChild;

    while (child) {
        console.log(child);
        traverseByDFS(child);
        child = child.nextElementSibling;
    }
}

//广度遍历--层次遍历，利用队列
function traverseByBFS(domRoot) {
    var queue=[domRoot];
    while(queue.length){
        var node=queue.shift();
        console.log(node);
        if(!node.children.length){
            continue;
        }
        Array.from(node.children).forEach(child=>queue.push(child));
    }
}