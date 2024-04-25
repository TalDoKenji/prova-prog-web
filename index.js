
async function geraListaEstados(estados){
    for(i = 0 ; i< estados.length; i++){
        const lista = document.createElement('li')
        const link = document.createElement('a')
        link.href = `/municipios/indexMunicipios.html/nomeEstado=${estados[i].nome}`

        
        lista.id = 'idLista'
        lista.textContent = estados[i].nome

        console.log(lista)
        console.log(link)
        const ul = document.querySelector('#listaNaoOrdenada')

        ul.appendChild(lista)
    }


}
// array de objetos
// percorro o array pegando um atributo do objeto
// filtro o array para confimar que não há elementos nulos
// chamo a função que gera a lista

async function buscaEstados(){
    const estadosBrasil = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)

    const estados = await estadosBrasil.json()

    geraListaEstados(estados)
}

buscaEstados()