import { Tasks } from '../../data/Tasks.js';

class TaskList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.tasks = [];
    }
    connectedCallback(){
        this.render();
    }
    addTask(){
        this.tasks ++;
        this.render();
    }
    render(){
        let html = `
            <div class="container">
                <form>
                    
                </form>
                <div>`
                
                Tasks.forEach(element => {
                    html += `
                        <task-item
                        name= "${element.name}"
                        description= "${element.description}"
                        status= "${element.status}"
                    ></task-item>
                    `
                });

                html += `</div> </div>`

                this.shadowRoot.innerHTML = html;
    }
}
customElements.define('task-list', TaskList);
export default TaskList;