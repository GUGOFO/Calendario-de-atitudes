const quadrados = document.getElementById("divQuadradosDia");

const data = new Date();
let mes = data.getMonth();
let ano = data.getFullYear();

for(let i = 0; i < 60; i++){
    quadrados.innerHTML += `<div class="quadradoDia" id="dia${i}">
                            <p class="diaDaSemana">segunda</p>
                            <p class="dia">${i}</p>
                            <p class="mes">Fev</p>
                            </div>`
}