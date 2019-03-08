// Modo de cores
var modoCor = document.querySelector('#alterna-cor');

modoCor.addEventListener('click', function() {
    document.documentElement.classList.toggle('alterna-cor');
    document.querySelector('body').classList.toggle('alterna-cor');
});

// Requisição experiências
var botaoExperiencia = document.querySelector("#botao-experiencia");

botaoExperiencia.addEventListener("click", function() {
    document.querySelector('.tabela-cabecalho').style.display = 'block';
    var xhrExp = new XMLHttpRequest();
    // Colocar endereço arquivo Json experiencias
    xhrExp.open("GET", "");
    xhrExp.addEventListener("load", function() {

        var dados = xhrExp.responseText;
        var empresas = JSON.parse(dados);

        empresas.forEach(function(empresa) {
            adicionaExperiencia(empresa);
        });
    });
    xhrExp.send();
});

function montaTrExp(empresa) {
    var empresaTr = document.createElement("tr");
    empresaTr.appendChild(montaTd(empresa.empresa));
    empresaTr.appendChild(montaTd(empresa.periodo));
    empresaTr.appendChild(montaTd(empresa.cargo));
    empresaTr.appendChild(montaTd(empresa.atividade));

    return empresaTr;
}

function montaTd(dados) {
    var td = document.createElement("td");
    td.textContent = dados;
    return td;
}

function adicionaExperiencia(empresa) {
    var empresaTr = montaTrExp(empresa);
    var tabela = document.querySelector("#tabela-experiencia");
    tabela.appendChild(empresaTr);
}

//Requisição Habilidades
var botaoTecnologias = document.querySelector("#botao-tecnologia");

botaoTecnologias.addEventListener("click", function() {
    document.querySelector('.tabela-tecnologia').style.display = 'block';
    var xhrHab = new XMLHttpRequest();
    
    // Colocar endereço arquivo Json experiencias
    xhrHab.open("GET", "");
    xhrHab.addEventListener("load", function() {

        var dadosH = xhrHab.responseText;
        var habilidades = JSON.parse(dadosH);

        habilidades.forEach(function(habilidade) {
            adicionaHabilidada(habilidade);
        });
    });
    xhrHab.send();
});

function montaTrHab(habilidade) {
    var habilidadeTr = document.createElement("tr");
    habilidadeTr.appendChild(montaTd(habilidade.tecnologia));
    habilidadeTr.appendChild(montaTd(habilidade.nivel));

    return habilidadeTr;
}

function montaTd(dadosH) {
    var td = document.createElement("td");
    td.textContent = dadosH;
    return td;
}

function adicionaHabilidada(habilidade) {
    var habilidadeTr = montaTrHab(habilidade);
    var tabela = document.querySelector("#tabela-tecnologia");
    tabela.appendChild(habilidadeTr);
}