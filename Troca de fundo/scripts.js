


function trocaCor(cor){
   document.body.style.backgroundColor = cor
}

function corAleatoria(){
    const red = Math.floor(Math.random() * 255) 
    const green = Math.floor(Math.random() * 255) 
    const blue = Math.floor(Math.random() * 255) 


    document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`
}

