let acertos = 0;

function verificarResposta(indice) {
    const respostaUsuario = parseFloat(document.getElementById(`resposta-${indice}`).value);
    const respostaCorreta = perguntas[indice].respostaCorreta;

    const resultadoDiv = document.getElementById(`resultado-${indice}`);

    if (respostaUsuario === respostaCorreta) {
        resultadoDiv.innerText = "Resposta correta!";
        acertos++;
    } else {
        resultadoDiv.innerText = "Resposta incorreta. A resposta correta é " + respostaCorreta + ".";
    }

    if (indice === perguntas.length - 1) {
        exibirEstatistica();
    }
}

function exibirEstatistica() {
    const totalPerguntas = perguntas.length;
    const porcentagemAcertos = ((acertos / totalPerguntas) * 100).toFixed(2);
    const porcentagemErros = (100 - porcentagemAcertos).toFixed(2);

    const estatisticaDiv = document.createElement('div');
    estatisticaDiv.innerHTML = `
        <h3>Estatísticas</h3>
        <p>Você acertou ${acertos} de ${totalPerguntas} perguntas.</p>
        <p>Porcentagem de acertos: ${porcentagemAcertos}%</p>
        <canvas id="graficoPizza" width="150" height="150"></canvas>`;

    document.getElementById('perguntas-container').appendChild(estatisticaDiv);

    const ctx = document.getElementById('graficoPizza').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Acertos', 'Erros'],
            datasets: [{
                data: [porcentagemAcertos, porcentagemErros],
                backgroundColor: ['#4CAF50', '#FF0000'],
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`
                    }
                }
            }
        }
    });
}
