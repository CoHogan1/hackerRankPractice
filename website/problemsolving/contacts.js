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

// Trie.END_CHARACTER = "*"
//
// function contacts(queries){
//     const store = new Trie()
//     const output = []
//
//     for (const [command, string] of queries){
//         if (command === 'add'){
//             store.add(string)
//         } else {
//             ouput.push(store.getMatchCount(string))
//         }
//     }
//     return output
// }



console.log(contacts(one), "2 0")
console.log(contacts(two), '5 4 3 2 1 0')
