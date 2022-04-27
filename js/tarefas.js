const criarTarefa = (evento) =>{
    evento.preventDefault()
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa =document.createElement('li')

    const conteudo = `<p class="content">${valor}</p>`

    tarefa.classList.add('task')

    tarefa.innerHTML = conteudo
    lista.appendChild(tarefa)
    input.value = ""

}

//botão
const novaTarefa = document.querySelector('[data-form-button]')




//evento de clique do botão
novaTarefa.addEventListener('click',(criarTarefa))




