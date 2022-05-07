


function showSum(...arg) {
    console.log(arg)
    let sum = arg.reduce((accum, i) => accum + i )
    console.log(sum)
}
showSum(1,4,56,76,6,7,9,34)