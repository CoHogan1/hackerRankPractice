
function minimumDistances(a){
    let distances = [];
    for(let i = 0; i<a.length; i++){
        if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])){
        let minDistance = a.lastIndexOf(a[i]) - a.indexOf(a[i]);
            distances.push(minDistance);
        }
    }

    if(distances.length === 0){
        return -1;
    }else{
        distances.sort(function(a, b) {
          return a - b;
        });
        return distances[0];
    }
}
console.log(minimumDistances([1,1]),1)
console.log(minimumDistances([7,1,3,4,1,7]),3)
console.log(minimumDistances([3,2,1,2,3]),2)
