// fails on time.....???
let ope = [
  '1 97', '2',    '1 20',
  '2',    '1 26', '1 20',
  '2',    '3',    '1 91',
  '3'
]
function getMax(operations) {
    let stack = []

    for (let i = 0; i < operations.length; i++){
        const [type, val] = operations[i].split(' ')
        if (type === '1'){
            stack.push(val)
        } else if (type === '2'){
            stack.pop()
        } else {
            console.log(Math.max(...stack))
        }
    }
}

const stack = [];
operations.forEach(str => {
    const [queryType, x] = str.split(' ');
    if(queryType === '1') stack.push(+x);
    else if(queryType === '2') stack.pop();
    else console.log(Math.max(...stack));
});
