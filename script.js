

const chave = "cebcd482eda57fa9a6714c1c2ba91885"
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q="

const linguagem = "&lang=pt_br"
const unidade = "&units=metric"
const urlImagem = 'https://openweathermap.org/img/wn/'

let inputCidade = document.getElementById('input')
let btnPesquisa = document.getElementById('pesquisa')
let cidade = document.getElementById('cidade')
let temperatura = document.getElementById('temperatura')
let umidade = document.getElementById('umidade')
let descricao = document.getElementById('descricao')
let icone = document.getElementById('icone')

// let url = apiWeather + 'São Paulo' + chave + linguagem + unidade

async function buscarCidade(nomeCidade){
    url = apiWeather + nomeCidade + chave + linguagem + unidade
    const resposta  = await fetch(url)
    const objeto = await resposta.json()
    return objeto
}

async function exibirCidade(cidade){
    let info  = await buscarCidade(cidade)
    cidade.innerHTML = info.name
    temperatura.innerHTML = info.main.temperatura + '°C'
    umidade.innerHTML = info.main.umidade + '%'
    descricao.innerHTML = info.weather[0].descricao
    icone.src = urlImagem + info.weather[0].icon + '@2x.png'
     
}

async function pesquisar(){
    let cidade = inputCidade.value
    exibirCidade(cidade)
}


btnPesquisa.addEventListener('click', pesquisar())

async function criarBtn(){


}
// async function montarTela(){
//     const objeto = await buscarCidade(inputCidade.value)
// }
// fetch(url)
// .then(response =>{
//     return response.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(error =>{
//     console.log(error)
// })