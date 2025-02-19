const dataInicial = new Date('2024-02-21T00:00:00');
const contadorElement = {
    dias: document.getElementById('dias'),
    semanas: document.getElementById('semanas'),
    horas: document.getElementById('horas'),
    minutos: document.getElementById('minutos'),
    segundos: document.getElementById('segundos') // Adicionando o elemento de segundos
};

function atualizarContador() {
    const agora = new Date();
    const diff = agora - dataInicial;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const semanas = Math.floor(dias / 7);
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000); // Cálculo de segundos

    contadorElement.dias.textContent = `${dias} Dias`;
    contadorElement.semanas.textContent = `${semanas} Semanas`;
    contadorElement.horas.textContent = `${horas} Horas`;
    contadorElement.minutos.textContent = `${minutos} Minutos`;
    contadorElement.segundos.textContent = `${segundos} Segundos`; // Atualizando o texto de segundos
}

setInterval(atualizarContador, 1000); // Atualiza o contador a cada segundo
