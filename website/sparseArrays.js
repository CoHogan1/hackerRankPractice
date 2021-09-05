// There is a collection of input strings and a collection of query strings.
// For each query string, determine how many times it occurs in the list of input strings.
// Return an array of the results.


// input 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab

// output
// 2
// 1
// 0

let testStr = ['abcde','sdaklfj','asdjf','na','basdn','sdaklfj','asdjf','na','asdjf','na','basdn','sdaklfj','asdjf']

let testQue = ['abcde','sdaklfj','asdjf','na','basdn',]


function matchingStrings(strings, queries){

    let answer = {}
    queries.forEach(item =>{
        answer[item] = 0
    })

    strings.forEach((str, index)=> {
        queries.forEach(qry=>{
            if (qry === str){
                answer[qry] += 1
            }
        })
    })

    for (const [key, value] of Object.entries(answer)){
        console.log(value);
    }
}


matchingStrings(testStr, testQue)
