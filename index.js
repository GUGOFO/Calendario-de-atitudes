const quadradosDiv = document.getElementById("divQuadradosDia");
const matriz = Array.from({length: 60}, () => Array(5).fill(false));

criarCalendario();

const dias = document.querySelectorAll(".dia");
const meses = document.querySelectorAll(".mes");
const diaDaSemanas = document.querySelectorAll(".diaDaSemana");
const quadradosDias = document.querySelectorAll(".quadradoDia");

quadradosDias.forEach(quadrado => {
    quadrado.addEventListener("click", evento => {
        quadradosDias.forEach(quadrado => quadrado.style.backgroundColor = "white");

        let quadrado = evento.target;
        if(quadrado.classList != "quadradoDia") quadrado = quadrado.parentElement;
        
        quadrado.style.backgroundColor = "rgb(245, 245, 245)";

        const idDoQuadrado = quadrado.id.slice(3);

        for(let i = 0; i < 5; i++){
            const iezimaTaks = document.getElementById(`tarefa${i}`);
            const divIezimaTaks = iezimaTaks.parentElement;
            const matrizDeTasks = matriz[idDoQuadrado][i];
            console.log(`Na matriz da ${i}: ${matrizDeTasks}`)
            console.log(`Na tarefa da ${i}: ${iezimaTaks.checked}`)
        }
    })
})

function checar(index){
    const tarefa = document.getElementById(`tarefa${index}`);
    const divPai = tarefa.parentElement;
    
    tarefa.checked ? divPai.setAttribute("id", "tarefaFeita") : divPai.setAttribute("id", "tarefaNaoFeita") 
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
            <div class="quadradoDia" id="dia${i}">
                <p class="diaDaSemana">${diaSemanaNome}</p>
                <p class="dia">${diaNumero}</p>
                <p class="mes">${mesNome}</p>
            </div>`; 
    }
    quadradosDiv.innerHTML = htmlConteudo;
    const primeiraCaixa = document.getElementById("dia0")
    primeiraCaixa.style.backgroundColor = "rgb(245, 245, 245)";
}
