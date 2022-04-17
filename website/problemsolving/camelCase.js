// you can split a string by capital letters.
function camelcase(s){
    return s.split(/(?=[A-Z])/).length
}

console.log(camelcase('saveChangesInTheEditor'))
