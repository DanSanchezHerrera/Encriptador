document.getElementById('encriptar').addEventListener('click', function() {
    procesarTexto('encriptar');
});

document.getElementById('desencriptar').addEventListener('click', function() {
    procesarTexto('desencriptar');
});

document.getElementById('copiar').addEventListener('click', function() {
    copiarTexto();
});

function procesarTexto(accion) {
    const inputText = document.getElementById('input-text').value;
    let textoProcesado = inputText.toLowerCase().replace(/[áéíóúüñ]/g, function(match) {
        const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u', 'ñ': 'n' };
        return acentos[match];
    });

    if (accion === 'encriptar') {
        textoProcesado = encriptar(textoProcesado);
    } else if (accion === 'desencriptar') {
        textoProcesado = desencriptar(textoProcesado);
    }

    mostrarResultado(textoProcesado);
}

function encriptar(texto) {
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return texto.replace(/[eioua]/g, function(match) {
        return reglas[match];
    });
}

function desencriptar(texto) {
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return texto.replace(/enter|imes|ai|ober|ufat/g, function(match) {
        return reglas[match];
    });
}

function mostrarResultado(texto) {
    const mensajeResultado = document.getElementById('mensaje-resultado');
    const mensajeSubtitulo = document.getElementById('mensaje-subtitulo');
    const copiarBtn = document.getElementById('copiar');

    mensajeResultado.textContent = texto;
    mensajeSubtitulo.style.display = 'none';
    mensajeResultado.classList.remove('mensaje-resultado');
    mensajeResultado.classList.add('mensaje-subtitulo');
    copiarBtn.style.display = 'block';
}

function copiarTexto() {
    const resultado = document.getElementById('mensaje-resultado').textContent;
    navigator.clipboard.writeText(resultado)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => alert('Error al copiar el texto: ' + err));
}
