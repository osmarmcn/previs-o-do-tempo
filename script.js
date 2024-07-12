const chave = "67bd416e05a29b82305240a9e92925db";
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q=";
const linguagem = "&lang=pt_br";
const unidade = "&units=metric";
const urlImagem = 'https://openweathermap.org/img/wn/';

let inputCidade = document.getElementById('input');
let btnPesquisa = document.getElementById('pesquisa');
let cidadeElemento = document.getElementById('cidade');
let temperaturaElemento = document.getElementById('temperatura');
let umidadeElemento = document.getElementById('umidade');
let descricaoElemento = document.getElementById('descricao');
let iconeElemento = document.getElementById('icone'); // alterado para icone-img

async function buscarCidade(nomeCidade) {
    const url = `${apiWeather}${nomeCidade}${unidade}${linguagem}&appid=${chave}`;

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error('Não foi possível obter os dados do clima');
        }
        const objeto = await resposta.json();
        return objeto;
    } catch (error) {
        console.error('Erro ao buscar cidade:', error);
        throw error;
    }
}

async function exibirCidade(nomeCidade) {
    try {
        let info = await buscarCidade(nomeCidade);

        // Verifica se os dados principais (main) e clima (weather) estão presentes
        if (info && info.main && info.main.temp && info.main.humidity &&
            info.weather && info.weather[0] && info.weather[0].description && info.weather[0].icon) {

            cidadeElemento.innerHTML = `Tempo em ${info.name}`;
            temperaturaElemento.innerHTML = `Temperatura: ${info.main.temp}°C`;
            umidadeElemento.innerHTML = `Umidade: ${info.main.humidity}%`;
            descricaoElemento.innerHTML = info.weather[0].description;
            iconeElemento.src = `${urlImagem}${info.weather[0].icon}@2x.png`;
        
        } else {
            // Se algum dado estiver faltando, exibe uma mensagem de erro ou limpa os campos
            console.error('Dados incompletos da API OpenWeather:', info);
            // Você pode limpar os campos ou exibir uma mensagem de erro para o usuário
            cidadeElemento.innerHTML = 'Dados de clima não disponíveis';
            temperaturaElemento.innerHTML = '';
            umidadeElemento.innerHTML = '';
            descricaoElemento.innerHTML = '';
            iconeElemento.src = '';
        }
    } catch (error) {
        console.error('Erro ao buscar cidade:', error);
        // Trate o erro adequadamente, dependendo do contexto da sua aplicação
    }
}

async function pesquisar() {
    let cidade = inputCidade.value;
    await exibirCidade(cidade); // aguarda a função exibirCidade
}

btnPesquisa.addEventListener('click', pesquisar); // passa a referência da função

document.getElementById('viena').addEventListener('click', () => exibirCidade('Vienna'));
document.getElementById('copenhague').addEventListener('click', () => exibirCidade('Copenhagen'));
document.getElementById('zurique').addEventListener('click', () => exibirCidade('Zurich'));
document.getElementById('vancouver').addEventListener('click', () => exibirCidade('Vancouver'));
document.getElementById('recife').addEventListener('click', () => exibirCidade('Recife'));
document.getElementById('joaoPessoa').addEventListener('click', () => exibirCidade('João Pessoa'));
document.getElementById('natal').addEventListener('click', () => exibirCidade('Natal'));
document.getElementById('maceio').addEventListener('click', () => exibirCidade('Maceió'));

// const chave = "cebcd482eda57fa9a6714c1c2ba91885"
// const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q="

// const linguagem = "&lang=pt_br"
// const unidade = "&units=metric"
// const urlImagem = 'https://openweathermap.org/img/wn/'

// let inputCidade = document.getElementById('input')
// let btnPesquisa = document.getElementById('pesquisa')
// let cidade = document.getElementById('cidade')
// let temperatura = document.getElementById('temperatura')
// let umidade = document.getElementById('umidade')
// let descricao = document.getElementById('descricao')
// let icone = document.getElementById('icone')

// // let url = apiWeather + 'São Paulo' + chave + linguagem + unidade

// async function buscarCidade(nomeCidade){
//     url = apiWeather + nomeCidade + chave + linguagem + unidade
//     const resposta  = await fetch(url)
//     const objeto = await resposta.json()
//     return objeto
// }

// async function exibirCidade(cidade){
//     let info  = await buscarCidade(cidade)
//     cidade.innerHTML = info.name
//     temperatura.innerHTML = info.main.temperatura + '°C'
//     umidade.innerHTML = info.main.umidade + '%'
//     descricao.innerHTML = info.weather[0].descricao
//     icone.src = urlImagem + info.weather[0].icon + '@2x.png'
     
// }

// async function pesquisar(){
//     let cidade = inputCidade.value
//     exibirCidade(cidade)
// }


// btnPesquisa.addEventListener('click', pesquisar())

// async function criarBtn(){


// }
// // async function montarTela(){
// //     const objeto = await buscarCidade(inputCidade.value)
// // }
// // fetch(url)
// // .then(response =>{
// //     return response.json()
// // })
// // .then(data => {
// //     console.log(data)
// // })
// // .catch(error =>{
// //     console.log(error)
// // })