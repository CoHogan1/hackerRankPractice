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

const adjList = new Map();

function addNode(airport){
    adjList.set(airport, [])
}

function addEdge(start, end) {
    adjList.get(start).push(end)
    adjList.get(end).push(start)
}

airports.forEach(addNode)
routes.forEach(route => addEdge(...route))


let count = 0

const bfs = (start, end) => {
    count++
    const visited = new Set()
    const queue = [start]

    while(queue.length > 0){
        const airport = queue.shift()
        const destinations = adjList.get(airport)

        for (const destination of destinations) {
            if (destination === end){
                console.log(`found ${end}, path => ${[...visited]}`);
            }
            if (!visited.has(destination)){
                visited.add(destination)
                queue.push(destination)
            }
        }
    }
}

//console.log(bfs('PHX', "BKK"));

function dfs(start, visited = new Set()) {
    count++
    visited.add(start)
    const destinations = adjList.get(start)

    for (const destination of destinations){
        if (destination === 'BKK'){
            console.log(`Found 'BBK' in ${count} steps ${[...visited]}`);
            return
        }
        if (!visited.has(destination)){
            dfs(destination, visited)
        }
    }
}

//dfs('PHX')


var inorderTraversal = function(root) {
    console.log("it count");
    if (root === null){ return }
    inrderTraversal(root.left)
    conosle.log(root.val)
    inorderTraversal(root.right)

};

console.log(inorderTraversal(1,null,2,3))
