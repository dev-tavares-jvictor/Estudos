document.addEventListener('DOMContentLoaded' , () => {
    


const artistsData = [
    { name: 'Gusttavo Lima', image: 'images/Gusttavo lima perfil.jfif' },
    { name: 'Cristiano Araujo', image: 'images/Cristiano araujo perfil.jfif' },
    { name: 'Hugo e Guilherme', image: 'images/HugoeGuilherme perfil.jfif' },
    { name: 'Guilherme e Benuto', image: 'images/guilherme e benuto perfil.jfif' },
    { name: 'Leandro e Leonardo', image: 'images/leonardo perfil.jfif' },
    { name: 'Zeze de Camargo e Luciano', image: 'images/zezedCamargo perfil.jfif' },
    { name: 'Marilia Mendonça', image: 'images/marialia perfil.jfif' },
    { name: 'Diego e Victor Hugo', image: 'images/diego perfil.jfif' },
    { name: 'Luan Santana ', image: 'images/luan perfil.jfif' },
    { name: 'Ze Neto e Cristiano', image: 'images/ZeNeto e Cristiano perfil.jfif' }, // Corrigido .jfif
];


const albumsData = [

    { name: 'Buteco' , artist: 'Gusttavo Lima' , image: 'images/Gusttavo lima album.jfif'},
    { name: 'In The Cities' , artist: 'Cristiano Araujo' , image: 'images/Cristiano araujo album.jfif'},
    { name: 'No Pelo 360' , artist: 'Hugo e Guilherme' , image: 'images/HugoeGuilherme album.jfif'},
    { name: 'Em Casa' , artist: 'Guilherme e Benuto' , image: 'images/guilherme e benuto album.jfif'},
    { name: 'Intenso' , artist: 'Ze Neto e Cristiano' , image: 'images/ZeNeto e Cristiano album.jfif'},
    { name: 'Patroas' , artist: 'Marilia Mendonça' , image: 'images/marialia album.jfif'},
    { name: 'In CITY' , artist: 'Luan Santana' , image: 'images/luan album.jfif'},
    { name: 'dois Tempos' , artist: 'Zeze de Camargo e Luciano' , image: 'images/zezedCamargo album.jfif'},
    { name: 'E o Amor' , artist: 'Leandro e leonardo' , image: 'images/leonardo album.jfif'},
    { name: 'No Botequinho' , artist: 'Diego e Victor Hugo' , image: 'images/diego album.jfif'},
]

const artistGrid = document.querySelector('.artists-grid')
const albumsGrid = document.querySelector('.albums-grid')


artistsData.forEach( artist => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')


    artistCard.innerHTML = `
    <img src="${artist.image}" alt="${artist.name}">
    <h3>${artist.name}</h3>
    <p>artistas</p>
    
    `

    artistGrid.appendChild(artistCard)

})

    albumsData.forEach( album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')


    albumCard.innerHTML = `
    <img src="${album.image}" alt="${album.name}">
    <p>${album.name}</p>
    
    `

    albumsGrid.appendChild(albumCard)

})
})






