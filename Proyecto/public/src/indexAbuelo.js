import * as components from './components/indexPadre.js';

class AppTasks extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
            this.shadowRoot.innerHTML = `
                <task-list></task-list>
            `
    }
}
customElements.define('app-tasks', AppTasks)

