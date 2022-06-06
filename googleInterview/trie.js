class Node{
    constructor(char){
        this.char = char
        this.children = []
        this.ends = 0
    }

    findOrCreateChild(char){
        this.ends++
        return this.findChild(char) || this.createChild(char)
    }
    createChild(char){
        const newChild = new Node(char)
        this.children.push(newChild)
        return newChild
    }
    findChild(char){
        return this.children.find(node => node.char === char)
    }
}

class Trie{
    constructor(){
        this.root = new Node(null)
    }
    add(word){
        let currentNode = this.root
        console.log(currentNode, " this");
        for (const char of word){
            console.log(char, " that");
            currentNode = currentNode.findOrCreateChild(char)
        }
        currentNode.findOrCreateChild(Trie.END_CHARACTER)
    }
    getMatchCount(partial){
        let currentNode = this.root
        for (const char of partial){
            const childNode = currentNode.findChild(char)
            if(!childNode){ return 0 }
            currentNode = childNode
        }
        return currentNode.ends
    }
}

Trie.END_CHARACTER = "*";

let one = ['add hack', 'add hackerrank', 'find hac', 'find hak']

let two = ['add s','add ss','add sss','add ssss','add sssss',
'find s','find ss','find sss','find ssss','find sssss','find ssssss']
// 5 4 3 2 1 0

function contacts(queries) {
    const store = new Trie();
    const output = [];
    for (const [command, string] of queries){
        if(command === "add"){
            store.add(string); // O(N*k)
        }else{
            output.push(store.getMatchCount(string)); // O(N*k*1)
        }
    }
    return output; // O(N * k) ~> O(N)
}

console.log(contacts(two));
