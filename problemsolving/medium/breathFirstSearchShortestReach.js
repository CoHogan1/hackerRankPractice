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

function bfs(n, m, edges, s) {
    const graph = buildGraph(edges)
    console.log(graph, " **");

    let distances = []
    let visited = new Set( [s] )
    let queue = [ s ]
    let val = 6

    let level = 1
    let counter = 1

    while (queue.length > 0){
        let current = queue.shift()
        counter--

        for (let neighabor of graph[current]){
            if(!visited.has(neighabor)){
                queue.push(neighabor)
                visited.add(neighabor)
                distances.push(val * level)
            }
        }

        if (counter === 0){
            level++
            counter = queue.length
        }
    }
    return distances

}

console.log(bfs(5,3, [[1,2],[1,3],[3,4]] ,1))

// { '1': [ 2, 3 ],
//   '2': [ 1 ],
//   '3': [ 1, 4 ],
//   '4': [ 3 ] }
const works = () => {
    const graph = {};
    for(let edge of edges) {
        let [src, dest] = edge;
        if (!graph[src]) {
            graph[src] = [];
        }
        if(!graph[dest]) {
            graph[dest] = [];
        }
        graph[src].push(dest);
        graph[dest].push(src);
    }
    const distances = Array(n + 1).fill(-1);
    const visited = new Set();
    const queue = [];
    queue.push(s);
    visited.add(s);
    distances[s] = 0;
    let level = 1;
    while(queue.length > 0) {
        for (let i = queue.length; i > 0; i -= 1) {
            const current = queue.shift();
            if(graph[current]) {
                for (let child of graph[current]) {
                    if (!visited.has(child)) {
                        visited.add(child);
                        distances[child] = 6 * level;
                        queue.push(child);
                    }
                }
            }
        }
        level += 1;
    }
    return [...distances.slice(1, s), ...distances.slice(s + 1)];
}

console.log(works(5,3, [[1,2],[1,3],[3,4]] ,1))
