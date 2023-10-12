const node1 = {
    data : 10
};

const node2 = {
    data : 20
}


node1.next = node2;

console.log(node1);

// { data: 10, next: { data: 20 } }

class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

const n1 = new Node(5);
console.log(n1);

// Node { data: 5, next: null }

const n2 = new Node(10);
n1.next = n2;

console.log(n1);

// Node { data: 5, next: Node { data: 10, next: null } }




