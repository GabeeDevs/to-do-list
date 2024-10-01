const button = document.querySelector('.button-add-tarefa')
const input = document.querySelector('.input-tarefa')
const listaCompleta = document.querySelector('.lista-tarefa')


let minhaLista = []



function addNewTask() {
    minhaLista.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    showTask()
}

function showTask() {

    let novaLi = ''

    minhaLista.forEach((item, index) => {
        novaLi = novaLi + `
                <li class="tarefa ${item.concluida && "done"}">
                     <img  src="./img/checked.png" alt="Check na tarefa" onclick="concluirTask(${index})">
                     <p>${item.tarefa}</p>
                     <img src="./img/trash.png" alt="Remover tarefa" onclick="deletarItem(${index})">
                </li>
        
        `
    })

    listaCompleta.innerHTML = novaLi


    localStorage.setItem('lista', JSON.stringify(minhaLista))

}

function concluirTask(index) {
    minhaLista[index].concluida = !minhaLista[index].concluida

    showTask()
}


function deletarItem(index) {
    minhaLista.splice(index, 1)
    console.log(index)

    showTask()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaLista = JSON.parse(tarefasDoLocalStorage)
    }
    showTask()
}
recarregarTarefas()
button.addEventListener('click', addNewTask)