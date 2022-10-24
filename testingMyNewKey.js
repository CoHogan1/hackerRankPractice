// 0 is closed, 1 is open.
// function test(n){
//     let arr = new Array(n).fill(0)
//     let iter = 0
//     while (iter < 25){
//         for (let i = 0; i < arr.length; i++){
//             i % iter === 0 ? arr[i] = 1 : arr[i] = 0
//         }
//         iter++
//     }
//     return arr
// }
//console.log(test(25));


let h = ["A","A","A","B","B","B"]

function test(tasks, n){
    if(n === 0) return tasks.length;

    let count = 0

    let map = new Map();
    for (let i = 0; i < tasks.length; i++){
        map[tasks[i]] ? map[tasks[i]]++ : map[tasks[i]] = 1
    }

    return map;
}

//console.log(test(h, 2));

function leastInterval(tasks, n) {
  if (n === 0) return tasks.length;

  const map = {};
  for (let t of tasks) {
    if (map[t] == null) map[t] = 0;
    map[t]++;
  }

  let max = 0;  // task max frequency
  for (let t in map) {
    max = Math.max(max, map[t]);
  }

  let count = 0;  // the number of tasks with same max frequency
  for (let t in map) {
    if (map[t] === max) {
      count++;
    }
  }

  return Math.max( (max - 1) * (n + 1) + count, tasks.length );

    // AB...AB... = (max - 1) * (n + 1)
    // AB...AB...AB = (max - 1) * (n + 1) + count

    // case 2
    // e.g. (ABC)(ABD)(ABEF)

}
