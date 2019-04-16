
// Requisição experiências
var botaoExperiencia = document.querySelector("#botao-experiencia");

botaoExperiencia.addEventListener("click", function() {
    document.querySelector('.tabela-cabecalho').style.display = 'block';
    var xhrExp = new XMLHttpRequest();
    // Colocar endereço arquivo Json experiencias
    xhrExp.open("GET", experienciasJson);
    xhrExp.addEventListener("load", function() {
        if (this.status == 200) {
            document.getElementById("botao-experiencia").disabled = true;
            document.getElementById("botao-experiencia").style.opacity = 0.3;
        }

        var dadosE = xhrExp.responseText;
        var empresas = JSON.parse(dadosE);

        empresas.forEach(function(empresa) {
            adicionaExperiencia(empresa);
        });
    });
    xhrExp.send();
});

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
    
    // Colocar endereço arquivo Json conhecimentos
    xhrHab.open("GET", conhecimentosJson);
    xhrHab.addEventListener("load", function() {
        if(this.status == 200) {
            document.querySelector('#botao-tecnologia').disabled = true;
            document.querySelector('#botao-tecnologia').style.opacity = 0.3;
        }

        var dadosH = xhrHab.responseText;
        var habilidades = JSON.parse(dadosH);

        habilidades.forEach(function(habilidade) {
            adicionaHabilidada(habilidade);
        });
    });
    xhrHab.send();
});

function adicionaHabilidada(habilidade) {
    var habilidadeTr = montaTrHab(habilidade);
    var tabela = document.querySelector("#tabela-tecnologia");
    tabela.appendChild(habilidadeTr);
}