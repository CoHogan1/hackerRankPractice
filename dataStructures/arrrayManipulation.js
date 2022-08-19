let n = 10
let q = [[1,5,3],[4,8,7],[6,9,1]]
let r = [[2,6,8],[3,5,7],[1,8,1],[5,9,15]]


function arrayManipulation(n, queries) {
    let ans = {}
    let max = -Infinity

    for (let i = 0; i < queries.length; i++){

        const [ st, end, val ] = queries[i]

        for (let z = st; z <= end; z++){
            if (!ans[z]){
                ans[z] = val
                continue
            }
            ans[z] += val
            if(ans[z] > max){max = ans[z]}
        }

    }
    return  max
}

function arrayManipulation2(n, queries) {

    let max = 0;
    const params = [];

    for(let q=0; q<queries.length; q++){

        const query = queries[q];
        const qstart = query[0];
        const qend = query[1];
        const qval = query[2];

        params.push({
        	key: qstart,
        	val: qval
        });

        params.push({
        	key: qend,
        	val: -qval
        });
    }
    //console.log(params, " this");

    //sort the parameters by key
    params.sort((item1, item2) => {
    	if(item1.key === item2.key){
    		return item2.val - item1.val;
    	}
    	return item1.key - item2.key;
    });

    let sum = 0;

    for(let i=0; i<params.length; i++){
    	const param = params[i];
    	sum += param.val;

    	if(sum > max){
    		max = sum;
    	}
    }

    return max;
}


//console.log(arrayManipulation2(n,q));
