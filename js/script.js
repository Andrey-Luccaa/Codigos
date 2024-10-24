const sim = document.querySelector('#sim')
const nao = document.querySelector('#nao')
const audio = document.querySelector('.audio')
const foto = document.querySelector('.foto')
const texto = document.querySelector('#texto')
let height = window.innerHeight - 50
let width = window.innerWidth - 50

sim.addEventListener('click', ()=>{
    audio.innerHTML = '<audio src="audio/Tema clássico de casamento - Marcha Nupcial.mp3" id="musica" autoplay></audio>'
    foto.style.display = 'flex';
    texto.textContent = 'Estamos oficialmente namorando'
})
nao.addEventListener('mouseover', ()=>{
    nao.style.position = "absolute";
    nao.style.top = Math.random() * (height - 50) + "px"
    nao.style.left = Math.random() * (width -50) + "px"
})