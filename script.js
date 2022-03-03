class Model {
	constructor() {
		this.tasks = [
		{id:1, text: 'Be good', complete: false},
		{id:2, text: 'Be nice', complete: false}
		]
	}
}

class View {
	constructor() {
		this.app = this.getElement('#root')
		this.title = this.setElement('h1')
		this.title.textContent = 'Tasks'
		this.taskList = this.setElement('ul')
		this.app.append(this.title, this.taskList)
	}

	displayTasks(tasks){
		tasks.forEach(task => {
			const li = this.setElement('li')
			li.id = task.id
			const span = this.setElement('span')
			span.textContent = task.text
			li.append(span)
			this.taskList.append(li)
		})
	}

	getElement(selector){
		const element = document.querySelector(selector)
		return element
	}

	setElement(tag, classname){
		const element = document.createElement(tag)
		if(classname !== undefined){
			element.classList.add(classname)
		}
		return element
	}
}

class Controller {
	constructor(model, view) {
		this.model = model
		this.view = view

		this.displayTasks(this.model.tasks)
	}

	displayTasks = tasks => {
		this.view.displayTasks(tasks)
	}
}

const app = new Controller(new Model(), new View())