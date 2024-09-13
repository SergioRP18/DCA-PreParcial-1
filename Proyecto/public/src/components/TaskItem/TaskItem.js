class TaskItem extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        return ['name', 'description', 'status']
    }
    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
            this[propName] = newValue;
            this.render();
        }
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
            <h1>${this.name}</h1>
            <h6>${this.description}</h6>
            <p>${this.status}</p>
            <state-button></state-button>
        `;
    }
}
customElements.define('task-item', TaskItem);
export default TaskItem;