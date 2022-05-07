
function unixTime() {
    let time = Math.floor(new Date().getTime());
    console.log(time)
}


unixTime()

function randomint() {
    const min = 100;
    const max = 200;
    let rand = Math.floor(min + Math.random() * (max  - min));
    console.log(rand)
}
randomint()

let c = 0;

function count() {
    c++;
    console.log(c)
}

document.querySelector('.out-1').addEventListener('click', box)

let b = 100;

function box() {
   b += 10
   document.querySelector('.out-1').style.width = b + 'px'
}