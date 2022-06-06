// node edge node
// Directed graph = one way connection between nodes
// Undirected graph = a two way connection between nodes.
// Weighted graphs = more than one connection betwen nodes.
// Cycle = a node that points to itself.

// adjacency list
// a, bc
// b, a
// c, ad
// d, c


// let q = [s]
// while Q not empty:
    // N = Q.dequeue()
    // for  v of N.children:
        //Q.enqueue(v)


// undirected graph non weighted, no cycles
let airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')
const routes = [
    ['PHX','LAX'],
    ['PHX','JFK'],
    ['JFK','OKC'],
    ['JFK','HEL'],
    ['JFK','LOS'],
    ['MEX','LAX'],
    ['MEX','BKK'],
    ['MEX','LIM'],
    ['MEX','EZE'],
    ['LIM','BKK'],
]

// open graph
const adjacencyList = new Map();

// add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// add an edge, undirected
function addEdge(ori, dest) {
    adjacencyList.get(ori).push(dest);
    adjacencyList.get(dest).push(ori);
}

// create graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));



//bfs
// big o = 0(v+e)
// 0(n)/ linear
function bfs(start, dest) {

    const visited = new Set();

    const queue = [start]

    while (queue.length > 0){

        const airport = queue.shift()
        const destinations = adjacencyList.get(airport)

        for (const destination of destinations) {
            if (destination === dest ){
                console.log(`found ${dest} airport`);
            }

            if (!visited.has(destination)){
                visited.add(destination)
                queue.push(destination)
                console.log(destination)
            }

        }
    }
}

//bfs
// big o = 0(v+e)
// 0(n)/ linear
let count = 0

function dfs(start, visited = new Set()) {
    count++

    visited.add(start)

    const destinations = adjacencyList.get(start)

    for (const destination of destinations) {
        if (destination === 'BKK'){
            console.log(`Found BBK ${count}`);
            return
        }
        if (!visited.has(destination)){
            dfs(destination, visited)
        }
    }
}

dfs('PHX')
