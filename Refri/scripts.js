let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')



//count = 3
// 0, 1, 2

let count = list.length //3
let active = 0

next.onclick = () => {
    console.log("next")
}

prev.onclick = () => {
    console.log('prev')
}
