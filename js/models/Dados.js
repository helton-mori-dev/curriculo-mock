const conhecimentosJson = 'http://demo1573951.mockable.io/conhecimentos';
const experienciasJson = 'http://demo1573951.mockable.io/experiencias';
const dadosJson = 'http://demo1573951.mockable.io/dadospessoais';

function montaTrExp(empresa) {
    let empresaTr = document.createElement("tr");
    empresaTr.appendChild(montaTd(empresa.empresa));
    empresaTr.appendChild(montaTd(empresa.periodo));
    empresaTr.appendChild(montaTd(empresa.cargo));
    empresaTr.appendChild(montaTd(empresa.atividade));

    return empresaTr;
}

function montaTd(dadosE) {
    let td = document.createElement("td");
    td.textContent = dadosE;
    return td;
}


function montaTrHab(habilidade) {
    let habilidadeTr = document.createElement("tr");
    habilidadeTr.appendChild(montaTd(habilidade.tecnologia));
    habilidadeTr.appendChild(montaTd(habilidade.nivel));

    return habilidadeTr;
}

function montaTd(dadosH) {
    let td = document.createElement("td");
    td.textContent = dadosH;
    return td;
}

function montaDadosPessoais() {
  let xhrPessoais = new XMLHttpRequest();
  xhrPessoais.onload = function() {
    if (this.status == 200) {
    let dadosTemp = xhrPessoais.responseText; 
    // console.log(dadosTemp);
    let dadosP = JSON.parse(dadosTemp);
      // console.log(dadosP);
      
	let nome = dadosP.nome;
	let email = dadosP.email;
	let idade = dadosP.idade;
	let endereco = dadosP.endereco;
	let celular = dadosP.celular;
	let cpf = dadosP.cpf;
	let tituloposgraduacao = dadosP.tituloposgraduacao;
	let posgraduacao = dadosP.posgraduacao;	
	let titulograduacao = dadosP.titulograduacao;
	let graduacao = dadosP.graduacao;	
	let ingles = dadosP.ingles;
	let japones = dadosP.japones;
	let interesses = dadosP.interesses;

	let cabecalho = document.querySelector('.cabecalho');
		cabecalho.innerHTML = `
		<h1 class="nome">${nome}</h1>
		<ul class="dados-pessoais">
			<li class="idade"><i class="icon-hourglass"></i>${idade} anos</li>
			<li class="email"><i class="icon-mail"></i>${email}</li>
			<li class="endereco"><i class="icon-location"></i>${endereco}</li>
			<li class="celular"><i class="icon-mobile"></i>${celular}</li>
			<li class="documento"><i class="icon-article-alt"></i>${cpf}</li>
		</ul>      
	`;

	let formacao = document.querySelector('.formacao');
		formacao.innerHTML = `
			<h2>Formação</h2>
			<span class="titulo">${tituloposgraduacao}</span>
			<span class="subtitulo">${posgraduacao}</span>
			<span class="titulo">${titulograduacao}</span>
			<span class="subtitulo">${graduacao}</span>				
		`;

    let	idiomas = document.querySelector('.idiomas');
    	idiomas.innerHTML = `
			<h2>Idiomas</h2>
			<span class="titulo">Inglês</span>
			<span class="subtitulo">${ingles}</span>   
			 <span class="titulo">Japonês</span>
			<span class="subtitulo">${japones}</span>   
    	`;

    let interessesProfissionais = document.querySelector('.interesses');
    	interessesProfissionais.innerHTML = `
			<h2>Interesses profissionais</h2>
			<span class="texto">${interesses}</span>    	
    	`;
    }
  };

  xhrPessoais.open("GET", dadosJson, true);
  xhrPessoais.send();
}
montaDadosPessoais();