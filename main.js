const botoes = document.querySelectorAll(".botao"); //constante botões
const textos = document.querySelectorAll(".aba-conteudo"); //constante aba conteudo
for (let i = 0; i < botoes.length; i++) { //laço de repetição que passará por todos botões
    botoes[i].onclick = function (){ //funcao para quando clicar no botao ativa os efeitos e textos
        for (let j = 0; j < botoes.length; j++) { 
            botoes[j].classList.remove("ativo"); //aqui remove o efeito ativo do botao        
            textos[j].classList.remove("ativo"); //aqui remove o efeito ativo do texto   
        }
        botoes[i].classList.add("ativo"); //aqui ativa o efeito do botao
        textos[i].classList.add("ativo"); //aqui ativa o texto no botao
    }
}
const contadores = document.querySelectorAll(".contador"); //contador
const tempo1 = new Date("2024-12-13T00:00:00"); //estipula uma data para a contagem regressiva BOTAO1
const tempo2 = new Date("2024-11-12T00:00:00"); //estipula uma data para a contagem regressiva BOTAO2
const tempo3 = new Date("2024-10-11T00:00:00"); //estipula uma data para a contagem regressiva BOTAO3
const tempo4 = new Date("2024-04-24T00:00:00"); //estipula uma data para a contagem regressiva BOTAO4
const tempos = [tempo1, tempo2, tempo3, tempo4];

contadores[0].textContent = calculaTempo(tempos[0]);
contadores[1].textContent = calculaTempo(tempos[1]);
contadores[2].textContent = calculaTempo(tempos[2]);
contadores[3].textContent = calculaTempo(tempos[3]);

function calculaTempo(tempo){ //funcao contagem regressiva
    let tempoAtual = new Date(); 
    let tempoFinal = tempo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
if (tempoFinal > 0){ //se a data final ainda nao chegou o marcador continua
    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}
else{ // caso contrario aparecerá a frase abaixo
    return "Prazo Finalizado";
}
}

function atualizaCronometro(){ //cronometro em tempo real
for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
    }
}
function comecaCronometro(){ //comeca a contagem quando entra na pagina
atualizaCronometro(); //chamando a função para que funcione na pagina
setInterval(atualizaCronometro, 1000);
}
comecaCronometro();