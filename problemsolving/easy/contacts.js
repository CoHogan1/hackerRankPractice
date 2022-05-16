let one = ['add hack', 'add hackerrank', 'find hac', 'find hak']

let two = ['add s','add ss','add sss','add ssss','add sssss',
'find s','find ss','find sss','find ssss','find sssss','find ssssss']
// 5 4 3 2 1 0
let thr = []

// this works, but fails time...
function contacts(queries){
    let add = queries.filter(a => a.startsWith('add'))
    // partial array
    let find = queries.filter(a => a.startsWith('find'))

    let ans = []
    find.forEach((str, index)=>{
        let count = 0
        let x = str.replace('find', '')

        let idk = add.map(a => {
            if (a.replace('add', '').startsWith(x)){ count++ }
        })

        ans.push(count)
        count = 0
    })

    return [...ans]
}


// 5 of 15   [0]
//

// get items

// class Node{
//     constructor(char){
//         this.char = char;
//         this.children = []; // track all following characters
//         this.ends = 0; // keep running total of # of words this char was used in
//     }
//
//     findOrCreateChild(char){
//         this.ends++; // increment running count
//         return this.findChild(char) || this.createChild(char);
//     }
//
//     createChild(char){
//         const newChild = new Node(char);
//         this.children.push(newChild);
//         return newChild;
//     }
//
//     findChild(char){
//         // returns undefined if char not found in children
//         return this.children.find(node => node.char === char);
//     }
// }
//
// class Trie{
//     constructor(){
//         this.root = new Node(null);
//     }
//
//     add(word){
//         let currentNode = this.root;
//         for(const char of word){
//             currentNode = currentNode.findOrCreateChild(char);
//         }
//         // KEY FOR 1 TEST
//         // Important to keep track of end of words (for single letter "words")
//         // Also just good practice
//         currentNode.findOrCreateChild(Trie.END_CHARACTER);
//     }
//
//     getMatchCount(partial){
//         let currentNode = this.root;
//         for(const char of partial){
//             const childNode = currentNode.findChild(char);
//             if(!childNode) return 0; // stop short if any part of partial not found
//             currentNode = childNode;
//         }
//         return currentNode.ends; // returns the established count
//     }
// }
//
// Trie.END_CHARACTER = "*";

// Trie.END_CHARACTER = "*"
//
// function contacts(queries){
    // const store = new Trie()
    // const output = []
    //
    // for (const [command, string] of queries){
    //     if (command === 'add'){
    //         store.add(string)
    //     } else {
    //         ouput.push(store.getMatchCount(string))
    //     }
    // }
    // return output
}



console.log(contacts(one), "2 0")
console.log(contacts(two), '5 4 3 2 1 0')
