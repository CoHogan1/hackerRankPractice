// splitting strings.

let string = `111fdhlaksjhf alksjdlhfakj laksjdfhl 222asjdhf aslaks hflskj alksf
    alksjhflkaj 333dlakjshflak jshflks ajhf laksjhflksah 444flksahflksh flksjd hflkjs
    alhfkjsaf 555akjdhfljah lkajsd flkaj  alksfla 66ksjflkaj wqiueoqiuewyr eoiq yreoi
    oqiurepqoiwu 77nddoijn wiowowncndcowenf 99ncocdn`

//console.log(string.length);


function splitting(string){
    // edit character limit here.
    let maxChar = 130

    if (string.length < maxChar){
        return string
    }
    let copy = string.substr()
    let len = Math.ceil(string.length / maxChar)
    let response = []

    for (let i = 0; i < len; i++) {
        let part = copy.substr(0, maxChar)
        let seperator = `${i + 1}/${len}`
        response.push(part, seperator)
        //response.push(seperator)
        copy = copy.slice(maxChar)
    }
    console.log(response)
    return response
}

splitting(string)
