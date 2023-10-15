const icons = document.querySelectorAll(".icon")
// animação de click
icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    event.preventDefault()

    icon.style.animation = "clickAnimation 0.5s ease-in-out infinite alternate"

    setTimeout(() => {
      icon.style.animation = "none"
    }, 500)
  })
})

// adicionando tasks
const buttonAdicionarTask = document.querySelector("#addTask")
//função de click para adicionar tasks
buttonAdicionarTask.addEventListener("click", () => {
  const inputTask = document.querySelector("#inputTask").value
  //verificando se o campo do input esta vazio
  if (inputTask) {
    //clonando o template
    const template = document.querySelector(".template")

    const newTask = template.cloneNode(true)

    //adicionando conteúdo da task
    newTask.querySelector(".taskContent").textContent = inputTask

    //removendo classes
    newTask.classList.remove("hide")
    newTask.classList.remove("template")

    //adicionando novos itens a lista
    const listTasks = document.querySelector("#listTasks")

    listTasks.appendChild(newTask)

    // evento de remover task
    const removebutton = newTask.querySelector("#iconDelete").addEventListener("click", () => {
        removeTask(newTask)
      })

      //evento de concluir task
      const confirmButton = newTask.querySelector(".confirm").addEventListener("click", () => {
        confirmTask(this)
      })

    //limpar texto
    document.querySelector("#inputTask").value = ""
  }
})

//função remover task
function removeTask(task){
  const taskDelete = task

  taskDelete.classList.add("hide")
}

//função de click para concluir task

function confirmTask(task){
  const taskComplete = task.parentNode()

  taskComplete.classList.toggle("done")
}

//retirando envio de form do enter
const inputFormTask = document.querySelector("#formTask")
inputFormTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
  }
})
