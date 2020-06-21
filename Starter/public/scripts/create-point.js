function populateUFs (){
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
  //.then( (res) =>{ return res.json()} )
    .then( states => {
        for( const state of states) {
            ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    } )
}

populateUFs()


function getCities(event){
    const cityselect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexofSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexofSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    cityselect.innerHTML = ""
    cityselect.disabled = true

    fetch(url)
    .then( res => res.json() )
  //.then( (res) =>{ return res.json()} )
    .then( cities => {

        for( const city of cities) {
            cityselect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        cityselect.disabled = false
    } )
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities) //escuda algunevento da pagina ()


/*Itens de coleta */

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelector("input[name=items]")


let selectItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    //adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    const itemId  = event.target.dataset.id

    //console.log('itemId: ',itemId)

    //verificar se existem itens selecionados, se sim
    //pegar os ítens selecionados

    const alreadySelected = selectItems.findIndex( item => {
        const itemFound = item == itemId //isso true ou false
        return itemFound
    } )

    //se já estiver selecionado, tirar da seleção
    if (alreadySelected >= 0) {
        //tirar da seleção
        const filteredItems = selectItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })


        selectItems = filteredItems
    }else {
    //se não estiver selecionado, adicionar á selecionados
        selectItems.push(itemId)

    }

    //atualizar o campo escondido com os ítens selecionados
    collectedItems.value = selectItems
}