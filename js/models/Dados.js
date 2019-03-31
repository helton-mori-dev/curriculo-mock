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
