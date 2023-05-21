'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === null) {
        return; // encerra a função se a resposta for 'null'
    }

    if (answer === 'magnus carlsen' || answer === 'sven magnus øen carlsen' || answer === 'Magnus Carlsen' || answer === 'Sven Magnus Øen Carlsen' || answer === 'Magnus Carlsen ' || answer === 'magnus carlsen ') {
        alert('Acertou!')
    } else if (answer === '') {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
} 