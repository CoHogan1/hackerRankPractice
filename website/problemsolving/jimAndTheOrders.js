function jimOrders(orders){
    let ans = []

    for (let i = 0; i < orders.length; i++) {
        orders[i] = orders[i].reduce((a,b) => a + b, 0)
    }

    let sort = [...orders].sort((a,b) => a - b )

    for (let i = 0; i < orders.length; i++) {
        let x = orders.indexOf(sort[i])
        ans.push(x)
        orders[x] = "x"
    }

    return ans.map(x => x + 1)
}

console.log(jimOrders([[8,3],[5,6],[6,2],[2,3],[4,3]]))
console.log(jimOrders([[8,1],[4,2],[5,6],[3,1],[4,3]]))
console.log(jimOrders([[1,1],[1,1]]))

const second = (orders) => {
    
}
