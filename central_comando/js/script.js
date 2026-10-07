// Pegando os elementos do HTML
const nome = document.getElementById("nome");
const saudacao = document.getElementById("saudacao");

const energia = document.getElementById("energia");
const luzes = document.getElementById("luzes");
const comunicacao = document.getElementById("comunicacao");
const escudos = document.getElementById("escudos");

const statusLuzes = document.getElementById("status-luzes");
const statusComunicacao = document.getElementById("status-comunicacao");
const statusEscudos = document.getElementById("status-escudos");

const nivelAlerta = document.getElementById("nivel-alerta");
const mensagemAlerta = document.getElementById("mensagem-alerta");

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado-form");

const ativar = document.getElementById("ativar");


// ======================================
// IDENTIFICAÇÃO DO COMANDANTE
// ======================================

nome.addEventListener("input", function () {

    if (nome.value.trim() === "") {
        saudacao.textContent = "Aguardando identificação...";
    } else {
        saudacao.textContent =
            "Olá, " + nome.value + "! Comandante reconhecido.";
    }

});


// ======================================
// SISTEMA DE ENERGIA
// ======================================

// Quando tocar na energia
energia.addEventListener("touchstart", function () {
    energia.classList.add("mostrando");
});

// Quando soltar o toque
energia.addEventListener("touchend", function () {
    energia.classList.remove("mostrando");
});

// Para funcionar também no computador
energia.addEventListener("mouseenter", function () {
    energia.classList.add("mostrando");
});

energia.addEventListener("mouseleave", function () {
    energia.classList.remove("mostrando");
});


// ======================================
// FUNÇÃO PARA BOTÕES
// ======================================

// Essa função faz o botão funcionar no celular e no computador
function adicionarEventoBotao(elemento, funcao) {

    let ultimoToque = 0;

    // Celular
    elemento.addEventListener("touchend", function (evento) {

        evento.preventDefault();

        ultimoToque = Date.now();

        funcao();
    });

    // Computador
    elemento.addEventListener("click", function () {

        // Evita que o mesmo toque seja executado duas vezes
        if (Date.now() - ultimoToque > 500) {
            funcao();
        }

    });
}


// ======================================
// LUZES
// ======================================

adicionarEventoBotao(luzes, function () {

    if (statusLuzes.textContent === "DESLIGADAS") {

        statusLuzes.textContent = "LIGADAS";

        luzes.classList.add("ativo");

    } else {

        statusLuzes.textContent = "DESLIGADAS";

        luzes.classList.remove("ativo");

    }

});


// ======================================
// COMUNICAÇÃO
// ======================================

adicionarEventoBotao(comunicacao, function () {

    if (statusComunicacao.textContent === "OFFLINE") {

        statusComunicacao.textContent = "ONLINE";

        comunicacao.classList.add("ativo");

    } else {

        statusComunicacao.textContent = "OFFLINE";

        comunicacao.classList.remove("ativo");

    }

});


// ======================================
// ESCUDOS
// ======================================

adicionarEventoBotao(escudos, function () {

    if (statusEscudos.textContent === "DESATIVADOS") {

        statusEscudos.textContent = "ATIVADOS";

        escudos.classList.add("ativo");

    } else {

        statusEscudos.textContent = "DESATIVADOS";

        escudos.classList.remove("ativo");

    }

});


// ======================================
// NÍVEL DE ALERTA
// ======================================

nivelAlerta.addEventListener("change", function () {

    const nivel = nivelAlerta.value;

    if (nivel === "normal") {

        mensagemAlerta.textContent = "Sistema Operacional";

        document.body.className = "";

    }

    else if (nivel === "atencao") {

        mensagemAlerta.textContent = "Nível de Atenção";

        document.body.className = "atencao";

    }

    else if (nivel === "perigo") {

        mensagemAlerta.textContent = "Situação de Perigo";

        document.body.className = "perigo";

    }

    else if (nivel === "emergencia") {

        mensagemAlerta.textContent = "Emergência!";

        document.body.className = "emergencia";

    }

});


// ======================================
// FORMULÁRIO DE COMUNICAÇÃO
// ======================================

formulario.addEventListener("submit", function (evento) {

    // Impede a página de recarregar
    evento.preventDefault();

    resultado.textContent = "Mensagem enviada com sucesso!";

});


// ======================================
// BOTÃO ATIVAR SISTEMAS
// ======================================

adicionarEventoBotao(ativar, function () {

    // Liga as luzes
    statusLuzes.textContent = "LIGADAS";
    luzes.classList.add("ativo");

    // Liga a comunicação
    statusComunicacao.textContent = "ONLINE";
    comunicacao.classList.add("ativo");

    // Ativa os escudos
    statusEscudos.textContent = "ATIVADOS";
    escudos.classList.add("ativo");

    // Muda o texto do botão
    ativar.textContent = "Sistemas Ativados";

});