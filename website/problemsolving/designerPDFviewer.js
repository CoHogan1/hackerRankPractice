let test = [1,3,1,3,1,4,1,3,2,5,5,5,5,1,1,5,5,1,5,2,5,5,5,5,5,5]
let tes2 = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
let thre = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7]

// 0.735
// function designerPdf,Viewer(h, word) {
//     let alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let height = 0
//
//     word.split('').forEach((letter, index)=>{
//         let z = alph.indexOf(letter)
//         if (height < h[z]){ height = h[z] }
//     })
//
//     return height * word.length
// }
//
// console.log(designerPdfViewer(test, "torn"))


//0.675
function designerPdfViewer(h, word) {
    let alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let height = []

    word.split('').forEach((letter, index)=>{
        let z = alph.indexOf(letter)
        height.push(h[z])
    })

    return Math.max(...height) * word.length
}

console.log(designerPdfViewer(test, "torn"))
console.log(designerPdfViewer(tes2, 'abc'))
console.log(designerPdfViewer(thre, 'zaba'))
