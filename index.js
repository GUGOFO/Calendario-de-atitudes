/*   <3 FEITO SEM CHAT, GEMINI, IA OU QUALQUER COISA ASSIM <3

  Caso vc estaja aq para ver se o chat fez isso n se preocupe,
  O chat n faria um bagulho TÃO FEIO ASSIM kaskskakas
  Possivelmente tem 99 formais mais eficientes de se fazer isso
  Bom agora que estamos aqui posso falar um pouco as merdas q eu fiz kaslaksa

  1 - Vou ser sincero aqui, eu tirei a parte que mostra o ano do texto roxo das tasks,
      pq fiz isso? Pq eu estava com extrema preguiça de reajustar, o resto dos dados 
      foi simplesmente pegar da div, porem como n tem o ano da div... diz o L
  2 - Achei bem meh essa borda que fiz para selecionar, creio que seria melhor modificar
      todas as cores para ficarem um pouco mais escuras no quadrado selecionado, mas achei
      "o bastante" oq eu fiz
  3 - Acabei de perceber que eu n troquei a cor do scrow jesusksaas, irei resolver isso no proximo commit
      quero que fique bonitinho esse aqui com "comentario final", se eu modificar o CSS vai aparecer
      nele tmn affs, ja ta aparecendo no readme e imagens, mas acho justo nesses
    
  Bom obrigado por ler até aqui, agora voce pode tentar fazer sentido do meu codigo :)
*/

const quadradosDiv = document.getElementById("divQuadradosDia");
const dataRoxa = document.getElementById("dataExata");
const matriz = Array.from({length: 60}, () => Array(5).fill(false));
const hoje = new Date();
let diaSelecionado = 0;
const coresFases = ["white", "#ff6b6b", "#ff9f43", "#feca57", "#1dd1a1", "#10ac84"];
const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const nomesMeses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

criarCalendario();

const dias = document.querySelectorAll(".dia");
const meses = document.querySelectorAll(".mes");
const diaDaSemanas = document.querySelectorAll(".diaDaSemana");
const quadradosDias = document.querySelectorAll(".quadradoDia");

quadradosDias.forEach(quadrado => {
    quadrado.addEventListener("click", evento => {
        quadradosDias.forEach(q => {
            pintarQuadrado(Number(q.id.slice(3)));
            q.style.border = "2px solid transparent";
        });

        let elementoClicado = evento.target;
        if(elementoClicado.classList != "quadradoDia") elementoClicado = elementoClicado.parentElement;

        elementoClicado.style.border = "2px solid black";

        let datasDoDia = elementoClicado.children
        let diaSemanaNome = datasDoDia[0].textContent;
        let mesNome = datasDoDia[1].textContent;
        let diaNumero = datasDoDia[2].textContent;
        dataRoxa.textContent = `${diaSemanaNome}, ${mesNome}, ${diaNumero}`;
        
        diaSelecionado = Number(elementoClicado.id.slice(3));
        atualizarVisualDasTarefas();
    })
})

const checkboxes = document.querySelectorAll('#divTasks input[type="checkbox"]');

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', (evento) => {
        const estaMarcado = evento.target.checked;
        matriz[diaSelecionado][index] = estaMarcado;
        atualizarEstiloTarefa(checkbox, estaMarcado);
        pintarQuadrado(diaSelecionado);
    });
});

function pintarQuadrado(index) {
    const quantidadeFeita = matriz[index].filter(Boolean).length;
    const quadrado = document.getElementById(`dia${index}`);
    quadrado.style.backgroundColor = coresFases[quantidadeFeita];
}

function atualizarVisualDasTarefas() {
    for(let i = 0; i < 5; i++) {
        const checkbox = document.getElementById(`tarefa${i}`);
        const estadoSalvo = matriz[diaSelecionado][i];
        checkbox.checked = estadoSalvo;
        atualizarEstiloTarefa(checkbox, estadoSalvo);       
    }
}

function atualizarEstiloTarefa(checkbox, estaMarcado) {
    const divPai = checkbox.parentElement;
    estaMarcado ? divPai.classList.replace("tarefaNaoFeita", "tarefaFeita") : divPai.classList.replace("tarefaFeita", "tarefaNaoFeita");
}

function criarCalendario() {
    let htmlConteudo = "";
    
    for(let i = 0; i < 60; i++){
        let dataFutura = new Date();
        dataFutura.setDate(hoje.getDate() + i);
    
        let diaNumero = dataFutura.getDate();
        let mesNome = nomesMeses[dataFutura.getMonth()];
        let diaSemanaNome = diasSemana[dataFutura.getDay()];

        if(i == 0) dataRoxa.textContent = `${diaSemanaNome}, ${mesNome}, ${diaNumero}`;
    
        htmlConteudo += `
            <div class="quadradoDia" id="dia${i}" style="border: 2px solid transparent">
                <p class="diaDaSemana">${diaSemanaNome}</p>
                <p class="dia">${diaNumero}</p>
                <p class="mes">${mesNome}</p>
            </div>`; 
    }
    quadradosDiv.innerHTML = htmlConteudo;
    const primeiraCaixa = document.getElementById("dia0")
    primeiraCaixa.style.border = "2px solid black";
}
