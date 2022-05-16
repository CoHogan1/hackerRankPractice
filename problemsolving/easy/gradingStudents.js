let ex = [73,67,38,33]
let idk = [84 ,94 ,21 ,0 ,18 ,100 ,18 ,62 ,30 ,61 ,53 ,0 ,43, 2 ,29 ,53 ,61 ,40]

function curve(grades){
    let ans = []
    grades.forEach((grade, index) => {
        if (grade < 38){
            ans.push(grade)
        } else if ((grade + 2) % 5 === 0){
            ans.push(grade + 2)
        } else if ((grade + 1) % 5 === 0){
            ans.push(grade + 1)
        } else {
            ans.push(grade)
        }
    })
    return ans
}


console.log(curve(ex))
console.log(curve(idk))

// 44 84 94 21 0 18 100 18 62 30 61 53 0 43 2 29 53 61 40
//    85 95 21 0 18 100 18 62 30 61 55 0 45 2 29 55 61 40
