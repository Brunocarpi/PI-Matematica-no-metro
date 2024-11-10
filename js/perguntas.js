const perguntas = [
        { pergunta: "Qual é o resultado de 2 + 2?", respostaCorreta: 4 },
        { pergunta: "Qual é a raiz quadrada de 81?", respostaCorreta: 9 },
        { pergunta: "Resolva: 10 x 10", respostaCorreta: 100 },
        { pergunta: "Qual é o dobro de 6?", respostaCorreta: 12 },
        { pergunta: "Qual é o resultado de 10 ÷ 2?", respostaCorreta: 5 },
        { pergunta: "Resolva: 25 + 25", respostaCorreta: 50 },
        { pergunta: "Quanto é 50% de 20?", respostaCorreta: 10 },
        { pergunta: "Qual é a área de um quadrado com lados de 4 cm?", respostaCorreta: 16 },
        { pergunta: "Se você tem um desconto de 10% em um produto que custa 50 reais, quanto você paga?", respostaCorreta: 45 }
    ];

function carregarPerguntas() {
    const container = document.getElementById('perguntas-container');

    perguntas.forEach((pergunta, index) => {
        const div = document.createElement('div');
        div.classList.add('faq-item');
        div.innerHTML = `
            <p>${pergunta.pergunta}</p>
            <input type="number" id="resposta-${index}" placeholder="Digite sua resposta">
            <button onclick="verificarResposta(${index})">Verificar Resposta</button>
            <p id="resultado-${index}"></p>
        `;
        container.appendChild(div);
    });
}
function verificarResposta(indice) {
    const respostaUsuario = parseFloat(document.getElementById(`resposta-${indice}`).value);
    const respostaCorreta = perguntas[indice].respostaCorreta;
    
    const resultadoDiv = document.getElementById(`resultado-${indice}`);

    if (respostaUsuario === respostaCorreta) {
        resultadoDiv.innerText = "Resposta correta!";
    } else {
        resultadoDiv.innerText = "Resposta incorreta. A resposta correta é " + respostaCorreta + ".";
    }
}

window.onload = carregarPerguntas;