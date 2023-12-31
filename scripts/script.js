// Variables
const icons = document.querySelectorAll(".icon")
const buttonAddTask = document.querySelector("#addTask")
const buttonRemoveTask = document.querySelector("#iconDelete")
const taskTemplate = document.querySelector(".template")
let inputTask = document.querySelector("#inputTask")

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

function clonarTemplate(template) {
  const clone = template.cloneNode(true)
  clone.classList.remove("hide")
  clone.classList.remove("template")

  //evento de remover tasks
  clone.querySelector("#iconDelete").addEventListener("click", () => {
    clone.classList.add("hide")
  })
  //evento de concluir tasks
  clone.querySelector("#iconConfirm").addEventListener("click", () => {
    clone.classList.toggle("done")
  })
  
  return clone
}

class TaskList {
  constructor(template) {
    this.list = document.querySelector("#listTasks")
    this.template = template
  }

  addTask(task) {
    let newTask = clonarTemplate(this.template)
    newTask.cloneNode(true)
    newTask.querySelector(".taskContent").textContent = task

    this.list.appendChild(newTask)
  }
}
// instanciando a classe TaskList
const taskList = new TaskList(taskTemplate)

function addTask() {
  taskList.addTask(inputTask.value)
}

/*function addFunction() {
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
*/

// Função de click
buttonAddTask.addEventListener("click", () => {
  addTask()
})


//retirando envio de form do enter
const inputFormTask = document.querySelector("#formTask")
inputFormTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    addTask()

    icons.style.animation = "clickAnimation 0.5s ease-in-out infinite alternate"

    setTimeout(() => {
      icons.style.animation = "none"
    }, 500)
  }
})
