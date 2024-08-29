const botaoTema = document.querySelector('#botao-tema');
const fundo = document.querySelector('body');
const tema = document.querySelector('.tema');
const pesquisar = document.querySelector('#pesquisar')
const botao = document.querySelector('.botao')
const navbar = document.querySelector('.digitar')
const pokemonImg = document.querySelector('#pokemon');
const nomePokemon = document.querySelector('#nome');
const tipoPokemon = document.querySelector('#tipo');
const descPokemon = document.querySelector('#desc');
const listaPokemons = document.querySelector('.pokemons');
const enviar = document.querySelector('.bi-send')
const som = document.querySelector('.sound')
const musica = document.querySelector('.audio')


function branco() {
  document.documentElement.style.setProperty('--fundo', '#f0f0f0');
  document.documentElement.style.setProperty('--cor-botao', '#ee1515');
  document.documentElement.style.setProperty('--cor-borda', '#222224');
  document.documentElement.style.setProperty('--cor-texto', '#222224');
  tema.innerHTML = '<i class="bi bi-moon-fill" id="botao-tema"></i>';
  som.style.color = '#222224'

  console.log('branco');

  tema.removeEventListener('click', branco);
  tema.addEventListener('click', preto);
}

function preto() {
  document.documentElement.style.setProperty('--fundo', '#222224');
  document.documentElement.style.setProperty('--cor-botao', '#ee1515');
  document.documentElement.style.setProperty('--cor-borda', '#ee1515');
  document.documentElement.style.setProperty('--cor-texto', '#f0f0f0');
  tema.innerHTML = '<i class="bi bi-brightness-high-fill" id="botao-tema"></i>';
  som.style.color = '#f0f0f0'

  console.log('preto');

  tema.removeEventListener('click', preto);
  tema.addEventListener('click', branco);
}

function Csom(){
    musica.innerHTML = '<audio src="sound/Lavender Town (Original Japanese Version from Pokemon Red and Green).mp3" loop autoplay id="musica" ></audio>'

    som.innerHTML = '<i class="bi bi-volume-mute-fill"></i>'

    som.removeEventListener('click', Csom)
    som.addEventListener('click', Ssom)
}

function Ssom(){
    musica.innerHTML = '<audio src="sound/Lavender Town (Original Japanese Version from Pokemon Red and Green).mp3" loop autoplay id="musica" muted></audio>'

    som.innerHTML = '<i class="bi bi-volume-up-fill"></i>'

    som.removeEventListener('click', Ssom)
    som.addEventListener('click',Csom)
}

tema.addEventListener('click', preto);

som.addEventListener('click',Ssom)

pesquisar.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {

        if (pesquisar.value === "") {
            alert('Preencha o campo!');
            return;
          }

          tipoPokemon.style.display = 'flex'
          listaPokemons.style.display = 'flex'
        
          fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisar.value.toLowerCase()}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Nenhum pokémon foi encontrado');
            }
          })
          .then(data => {
            pokemonImg.src = data.sprites.front_default;
            nomePokemon.textContent = data.name;
            tipoPokemon.textContent = data.types[0].type.name;
            descPokemon.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto atque ut, omnis explicabo optio facere.";
          })
          .catch(error => {
            console.error(error);
            alert('nenhum pokémon encontrado');
          });
    }
  });

botao.addEventListener('click', () => {
  if (pesquisar.value === "") {
    alert('Preencha o campo!');
    return;
  }

  enviar.style.animation = 'voar 2s linear'
  enviar.style.animation = ''

  tipoPokemon.style.display = 'flex'
  listaPokemons.style.display = 'flex'

  fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisar.value.toLowerCase()}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Nenhum pokémon foi encontrado');
    }
  })
  .then(data => {
    pokemonImg.src = data.sprites.front_default;
    nomePokemon.textContent = data.name;
    tipoPokemon.textContent = data.types[0].type.name;
    descPokemon.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto atque ut, omnis explicabo optio facere.";
  })
  .catch(error => {
    console.error(error);
    alert('nenhum pokémon encontrado');
  });

});

