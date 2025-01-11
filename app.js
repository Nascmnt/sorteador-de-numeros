function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); //O .value serve para indicar que queremos guardar o valor, e não o input.
    let de = parseInt(document.getElementById('de').value); //diz ao código que o valor recebido será um número inteiro
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        window.alert('ATENÇÃO! O valor do número inicial não pode ser mais alto que o do número final.');
        window.alert('Por favor, reveja os dados inseridos e tente novamente.');
    }

    if (quantidade > (ate - de + 1)) {
        window.alert('ATENÇÃO! A quantidade de números não pode ser maior que o intervalo escolhido.');
        window.alert('Por favor, reveja os dados inseridos e tente novamente.');
        // return;
        return reiniciar();
        return alterarStatusBotao();
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}.</label>`;

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';   
    document.getElementById('de').value = '';   
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}