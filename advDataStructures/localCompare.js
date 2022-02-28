

let items = ['3rd', 'apple', '24th','99 in the shade', 'Dec', '10000','101','$1.23']
items.sort((a,b) => a.localCompare(b ,navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}))
console.log(items)
