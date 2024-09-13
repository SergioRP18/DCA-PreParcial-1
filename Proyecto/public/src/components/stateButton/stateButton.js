class StateButton extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.isSelected = false;
    }
    connectedCallback(){
        this.render();
    }
    changeTask(){
        this.isSelected = !this.isSelected;
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
            <button>${this.isSelected ? 'Completa' : 'Incompleta'}</button>
        `
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.changeTask());
    }
}
customElements.define('state-button', StateButton);
export default StateButton;