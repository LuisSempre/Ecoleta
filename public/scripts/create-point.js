

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    // console.log(event.target.value)

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disable = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {

            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`

            }

        })

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

    //Itens de coleta
    //Pegar todos li`s
    const itemsToCollect = document.querySelectorAll(".items-grid li")

    for(const item of itemsToCollect){
        item.addEventListener("click", handleSelectedItem)
    }

      
      const collectedItems = document.querySelector("input[name=items]")

    let selectedItems = []

    function handleSelectedItem(event){
        const itemLi = event.target

        //adicionar ou remover classe
        itemLi.classList.toggle("selected")

        const itemId = event.target.dataset.id

        // console.log('ITEM ID:', itemId)

        //verificar se existem items selecionados, se sim
        //pegar os itens selecionados
        const alreadySelected = selectedItems.findIndex( item =>{
            const itemFound = item == itemId // isso e true ou false
            return itemFound
        })

      

        //se ja estiver selecionado, tirar da selecao
        if( alreadySelected >= 0 ) {
            //tirar da selecao
            const filteredItems = selectedItems.filter( item => {
                const itemIsDifferent = item != itemId // false
                return itemIsDifferent
            })

            selectedItems = filteredItems
        }else{
            //se nao estiver selecionado, adiconar a selecao
            selectedItems.push(itemId)
        }

        // console.log('selectedItems: ', selectedItems)

        //atualizar o campo escondido com os items selecionados
        collectedItems.value = selectedItems

    }

