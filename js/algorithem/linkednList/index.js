const a = {val: 'a'}
const b = {val: 'b'}
const c = {val: 'c'}
const d = {val: 'd'}

a.next = b;
b.next = c;
c.next = d;

// iterate linklist 
let p = a;
while(p){
    console.log(p.val)
    p = p.next;
}

// leetcode
// 237. Delete Node in a Linked List
var deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next
}
// leetcode 206 reverse linked list
var reverseList =(head)=>{
    let p1 = head;
    let p2 = null;
    while(p1){
        let temp = p1.next
        p1.next = p2
        p2 = p1
        p1 = temp
    }
    return p2
}

// leetcode 83 delete duplicated node in linkedn list
var deleteDuplicates = function (head) {
    let p = head;
    while (p && p.next) {
        if (p.next.val === p.val) {
            p.next = p.next.next
        } else {
            p = p.next
        }

    }
    return head
};

// leetcode 141 linked list cycle
var hasCycle = function (head) {
    let p = head
    let nodes = []
    while (p) {
        if (nodes.includes(p)) {
            return true
        }
        nodes.push(p)
        p = p.next
    }
    return false
};