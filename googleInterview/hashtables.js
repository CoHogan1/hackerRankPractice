// hash tables

const hash = (str, max) => {
    let hash1 = 0
    for (var i = 0; i < str.length; i++) {
        hash1 += str.charCodeAt(i)
    }
    return hash1 % max
}

let HashTable = function(){
    let storage = []
    const stoLimit = 14

    this.print = function(){
        console.log(storage)
    }

    this.add = function(key,value){
        let index = hash(key, stoLimit)
        if (storage[index] === undefined){
            storage[index] = [ [key,value] ]
        } else {
            let inserted = false
            for (let i = 0; i < storage[index.length]; i++) {
                if (storage[index][i][0] === key){
                    storage[index][i][1] = value
                    inserted = true
                }
            }
            if (inserted === false){
                storage[index].push([key,value])
            }
        }
    }

    this.remove = function(key){
        let index = hash(key, stoLimit)
        if (storage[index].length === 1 && storage[index][0][0] === key){
            delete storage[index]
        } else {
            for (let i = 0; i < storage[index]; i++){
                if (storage[index][i][0] === key){
                    delete storage[index][i]
                }
            }
        }
    }

    this.lookup = function(key){
        let index = hash(key, stoLimit)
        if (storage[index] === undefined){
            return undefined
        } else {
            for (let i = 0; i < storage.length; i++) {
                if (storage[index][i][0] === key){
                    return storage[index][i][1]
                }
            }
        }
    }
    // end
}

//console.log(hash('quincy',10));

let ht = new HashTable()

ht.add('beau', 'person')
ht.add('fido', 'dog')
ht.add('rex', 'dinoaur')
ht.add('tux', 'penguine')
console.log(ht.lookup('tux')," this")

ht.print()
