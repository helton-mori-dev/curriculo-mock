var conhecimentosJson = 'http://demo1573951.mockable.io/conhecimentos';
var experienciasJson = 'http://demo1573951.mockable.io/experiencias';
var dadosJson = 'http://demo1573951.mockable.io/dadospessoais';

function montaTrExp(empresa) {
    var empresaTr = document.createElement("tr");
    empresaTr.appendChild(montaTd(empresa.empresa));
    empresaTr.appendChild(montaTd(empresa.periodo));
    empresaTr.appendChild(montaTd(empresa.cargo));
    empresaTr.appendChild(montaTd(empresa.atividade));

    return empresaTr;
}

function montaTd(dadosE) {
    var td = document.createElement("td");
    td.textContent = dadosE;
    return td;
}


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

function montaDadosPessoais() {
  var xhrPessoais = new XMLHttpRequest();
  xhrPessoais.onload = function() {
    if (this.status == 200) {
    var dadosTemp = xhrPessoais.responseText; 
    var dadosP = JSON.parse(dadosTemp);
      console.log(dadosP);
      var idade = 
    }
  };
  xhrPessoais.open("GET", dadosJson, true);
  xhrPessoais.send();
}
montaDadosPessoais();
