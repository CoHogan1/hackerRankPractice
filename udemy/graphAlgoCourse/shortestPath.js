// iDjkstra's Algo

const adjMatrix = [
    [0, 3, 5, 6, 0,  8,  0],
    [3, 0, 0, 4, 2,  0,  5],
    [5, 0, 0, 0, 0,  4,  0],
    [6, 4, 0, 0, 0,  1,  6],
    [0, 2, 0, 0, 0,  0, 10],
    [8, 0, 6, 1, 0,  0,  8],
    [0, 8, 0, 6, 10, 8,  0]
]

dijkstral(adjMatrix)

function dijkstral(adjMatrix){
    let v = adjMatrix.length
    let visited = new Array(v)
    let distance = new Array(v).fill(Number.MAX_SAFE_INTEGER)

    distance[0] = 0

    for (let i = 0; i < v-1; i++){
        let minVertex = findMinVertex(distance, visited)
        visited[minVertex] = true

        for (let j = 0; j < v ; j++){
            if(adjMatrix[minVertex][j] != 0 && !visited[j]) {
                let newDist = distance[minVertex] + adjMatrix[minVertex][j]
                if (newDist < distance[j]){
                    distance[j] = newDist
                }
            }
        }
    }

    for (let i = 0; i < v; i++){
        console.log(i + " " + distance[i]);
    }

}

function findMinVertex(distance, visited){
    let minVertex = -1
    for (let i = 0; i < distance.length; i++){
        if (!visited[i] && (minVertex == -1 ||
            distance[i] < distance[minVertex])){
            minVertex = i
        }
    }
    return minVertex
}
