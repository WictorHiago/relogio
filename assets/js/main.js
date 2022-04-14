const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);//transforma segundos em milisegundos
  return data.toLocaleTimeString('pt-BR', { //acessamos a data. e depois apegamos a hora dentro de .toLocaleString no formato pt-BR
    hour12:false, //tira o padrao 12 horas
    timeZone: 'UTC' // zeramos a hora
  });
}

function iniciaRelogio() {
  timer = setInterval(function() {  //para o setInterval
    segundos++;
    relogio.innerHTML= criaHoraDosSegundos(segundos);//mostra no html no padrao data: 00:00:00
  },1000);
}

//===botoes===
//inicia o contador
iniciar.addEventListener('click', function(event) {
  clearInterval(timer);
  iniciaRelogio();
  relogio.classList.remove('pausado')//remove a cor vermelha ao iniciar
});
//pausa o contador
pausar.addEventListener('click', function(event) {
  clearInterval(timer);
  relogio.classList.add('pausado'); //adiciona uma regra CSS: de cor vermelha
});
//zerar o contador
zerar.addEventListener('click', function(event) {
  clearInterval(timer);
  relogio.innerHTML= '00.00.00';
  segundos = 0; //faz com que ao zerar e quando iniciar novamente retorne para 00:00:00
  relogio.classList.remove('pausado')//remove a cor vermelha ao zerar
});