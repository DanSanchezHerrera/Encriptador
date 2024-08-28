//ocultar botón cancelar al cargar
document.getElementById('copiar').style.display = 'none';

//botones
document.getElementById('encriptar').addEventListener('click', function() {
    procesarTexto('encriptar');
});

document.getElementById('desencriptar').addEventListener('click', function() {
    procesarTexto('desencriptar');
});

document.getElementById('copiar').addEventListener('click', function() {
    copiarTexto();
});

//reglas de negocio
function encriptar(texto){
    const reglas = {
        'e' : 'enter',
        'i' : 'imes',
        'a' : 'ai',
        'o' : 'ober',
        'u' : 'ufat'
    }

    return texto.replace(/[eioua]/g, function(match) {
        return reglas[match];
    });
};

function desencriptar(texto){
    const reglas = {
        'enter' : 'e',
        'imes' : 'i',
        'ai' : 'a',
        'ober' : 'o',
        'ufat' : 'u'
    }

    return texto.replace(/enter|imes|ai|ober|ufat/g, function(match) {
        return reglas[match];
    });
};

//encriptar/desencriptar ^^
function procesarTexto(accion) {
    //texto en minúscula, reemplaza acentos y 'ñ' por equivalente sin acento :)
    const inputText = document.getElementById('input-texto').value;
    let textoRevisado = inputText.toLowerCase().replace(/[áéíóúüñ]/g, function(match) {
        const acento = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u', 'ñ': 'n' };
        return acento[match]
    }); 

    //acciones
    if (accion === 'encriptar') {
        textoRevisado = encriptar(textoRevisado);
    } else if (accion === 'desencriptar') {
        textoRevisado = desencriptar(textoRevisado);
    }
    
    //mostrar
    document.getElementById('resultado').textContent = textoRevisado;
    document.getElementById('aviso').style.display = "none";
    document.getElementById('copiar').style.display = 'block';
};

//copiar texto

function copiarTexto(){
    const resultado = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(resultado)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => alert('Error al copiar el texto: ' + err));
;}




