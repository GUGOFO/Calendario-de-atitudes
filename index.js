const quadradosDiv = document.getElementById("divQuadradosDia");
const matriz = Array.from({length: 60}, () => Array(5).fill(false));
let diaSelecionado = 0;
const coresFases = ["white", "#ff6b6b", "#ff9f43", "#feca57", "#1dd1a1", "#10ac84"];

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
            <div class="quadradoDia" id="dia${i}" style="border: 2px solid transparent">
                <p class="diaDaSemana">${diaSemanaNome}</p>
                <p class="dia">${diaNumero}</p>
                <p class="mes">${mesNome}</p>
            </div>`; 
    }
    quadradosDiv.innerHTML = htmlConteudo;
    const primeiraCaixa = document.getElementById("dia0")
    primeiraCaixa.style.border = "2px solid black";
    primeiraCaixa.style.backgroundColor = "rgb(245, 245, 245)";
}
