let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type){

    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

    console.log(listItems)
    console.log(thumbItems)


    if(type === 'next'){
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
    } else{
        list.prepend(listItems[3])
        thumb.prepend(thumbItems[3])

    }
}
