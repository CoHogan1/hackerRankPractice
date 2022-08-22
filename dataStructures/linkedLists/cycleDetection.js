// hackerrank has an issue with their code.
//its not possible to submit any soltuions
// here is my untested code.

function hasCycle(head) {
    let visited = new Set()
    let curr = head
     while(curr){
        if(visited.has(curr.data)){ return 1 }
        visited.add(curr.data)
        curr = curr.next
    }
    return 0
}

// here is a python3 example. These are the only codes I know. :)

def has_cycle(head):
    if head is None:
        return 0
    myDict = {}
    temp = head

    while temp is not None:
        if temp not in myDict.keys():
            myDict[temp] = 1
            temp = temp.next
        else:
            return 1

    return 0
