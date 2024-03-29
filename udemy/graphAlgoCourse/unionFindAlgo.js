class Graph{
    constructor(noOfVertices, noOfEdges){
        this.V = noOfVertices
        this.E = noOfEdges
        this.edges = []
    }

    addEdge(u,v,w){
        this.edges.push([u,v,w])
    }

    find(parent, ele){
        if (parent[ele] != ele){
            parent[ele] = this.find(parent, parent[ele])
        }
        return parent[ele]
    }

    union(parent, rank, x, y){
        if(rank[x] < rank[y]){
            parent[x] = y
        } else if(rank[x] > rank[y]){
            parent[y] = x
        } else {
            parent[y] = x
            rank[x] += 1
        }
    }

    kruskal(){
        let mst = []

        this.edges.sort((a,b) => {
            return a[2] - b[2]
        })

        let parent = []
        let rank = []

        for (let v = 0; v < this.V ; v++){
            parent[v] = v
            rank[v] = 0

        }

        let e = 0
        let i = 0

        while (e < this.V -1){
            let u = this.edges[i][0]
            let v = this.edges[i][1]
            let w = this.edges[i][2]
            i+=1

            let x = this.find(parent, u)
            let y = this.find(parent, v)

            if (x != y){
                mst.push([u,v,w])
                e+=1
                this.union(parent, rank, x, y)
            }

        }
        let minCost = 0
        for (let i = 0; i < e; i++){
            let w = this.edges[i][2]
            minCost += w
        }
        console.log("Minimin Cost: ", minCost);
        console.log(mst);
    }
}


const graph = new Graph(8, 13)

graph.addEdge(4,2,1)
graph.addEdge(2,6,2)
graph.addEdge(2,7,9)
graph.addEdge(4,3,8)

graph.addEdge(0,1,8)
graph.addEdge(3,7,7)
graph.addEdge(0,5,4)
graph.addEdge(4,0,2)

graph.addEdge(2,3,4)
graph.addEdge(0,3,6)
graph.addEdge(2,1,10)
graph.addEdge(3,5,8)
graph.addEdge(6,1,7)

graph.kruskal()
