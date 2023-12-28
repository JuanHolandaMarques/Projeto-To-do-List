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

//função de click para adicionar tasks
function addFunction() {
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
      const confirmButton = newTask.querySelector("#iconConfirm").addEventListener("click", () => {
        confirmTask(newTask)
      })

    //limpar texto
      document.querySelector("#inputTask").value = ""
  }
}

// Função de click
const buttonAdicionarTask = document.querySelector("#addTask")
buttonAdicionarTask.addEventListener("click", () => {
  addFunction()
})


function removeTask(task){
  const taskDelete = task

  taskDelete.classList.add("hide")
}

function confirmTask(task){
  const taskComplete = task

  taskComplete.classList.toggle("done")
}

//retirando envio de form do enter
const inputFormTask = document.querySelector("#formTask")
inputFormTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    addFunction()
  }
})