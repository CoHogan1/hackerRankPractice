const buildGraph = (edges) => {
    const graph = {}
    for (let edge of edges){
        const [ a,b ] = edge
        if(!(a in graph)){ graph[a] = [] }  // 0(n) insert/assign 0(1)
        if(!(b in graph)){ graph[b] = [] }
        graph[a].push(b) // 0(1)
        graph[b].push(a) // 0(1)
    }
    return graph
}

function journeyToTheMoon(n, astronaught){
    if (astronaught.length < 2){ return 0 }

    const graph = buildGraph(astronaught)
    let visited  // set vs array
    let start = graph[0]

    let stack = [ start ]

    while(stack.length != 0){
        let curr = stack.pop()
        visited.add(curr)


    }



}

//journeyToTheMoon(4,[[1,2],[2,3]])


// 7 6 4 3 1
