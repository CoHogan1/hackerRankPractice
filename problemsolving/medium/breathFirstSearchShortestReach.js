// helper function
const buildGraph = (edges) => {
    const graph = {}

    for (let edge of edges){
        const [ a, b ] = edge;
        if (!(a in graph)){ graph[a] = [] }
        if (!(b in graph)){ graph[b] = [] }
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

// actual function
function bfs(n, m, edges, s) {
    let ans = []
    const graph = buildGraph(edges)
    let queue = [ s ]
    let val = 0

    let count = 0

    while(queue.length > 0){
        val += 6
        count++
        let temp = queue.shift().toString()
        let start =  graph[temp]

        //left
        if (start[0] !== undefined){
            queue.push(start[0])
            ans.push(val)
        }

        // right
        if (start[1] !== undefined){
            queue.push(start[1])
            ans.push(val)
        }
        if (count > 10){ break }
    }
    return ans

}

//console.log(bfs(5,3, [[1,2],[1,3],[3,4]] ,1))
// { '1': [ 2, 3 ], '2': [ 1 ], '3': [ 1, 4 ], '4': [ 3 ] }


console.log(2022 - 9);
