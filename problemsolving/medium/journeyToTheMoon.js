const buildGraph = (edges) => {
    const graph = {}
    for (let edge of edges){
        const [ a,b ] = edge
        if(!(a in graph)){ graph[a] = []}  // 0(n) insert/assign 0(1)
        if(!(b in graph)){ graph[b] = []}
        graph[a].push(b) // 0(1)
        graph[b].push(a) // 0(1)
    }
    return graph
}

function journeyToTheMoon(n, astronaught){

    





}
