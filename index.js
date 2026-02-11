const quadrados = document.getElementById("divQuadradosDia");

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const nomesMeses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const hoje = new Date();
let htmlConteudo = "";

for(let i = 0; i < 60; i++){
    let dataFutura = new Date();
    dataFutura.setDate(hoje.getDate() + i);

    let diaNumero = dataFutura.getDate();
    let mesNome = nomesMeses[dataFutura.getMonth()];
    let diaSemanaNome = diasSemana[dataFutura.getDay()];

    htmlConteudo += `
        <div class="quadradoDia" id="dia${i}">
            <p class="diaDaSemana">${diaSemanaNome}</p>
            <p class="dia">${diaNumero}</p>
            <p class="mes">${mesNome}</p>
        </div>`;
}
quadrados.innerHTML = htmlConteudo;