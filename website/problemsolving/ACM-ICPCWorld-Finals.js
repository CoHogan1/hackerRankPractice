
function acmteams(topic){
    let num = 0
    let max = 0
    let group = 0
    for (let i = 0; i < topic.length; i++) {
        for (let j = i+1; j < topic.length; j++) {
            for (let k = 0; k < topic[i].length; k++) {
                if (parseInt(topic[i][k]) + parseInt(topic[j][k]) > 0){
                    num++
                }
            }
            if (max < num){
                max = num
                group = 1
            } else if (max == num && num != 0){
                group++
            }
            num = 0
        }
    }
    return [max, group]
}

console.log(acmteams(['10101','11110','00010']))
console.log(acmteams(['10101','11100','11010','00101']))
