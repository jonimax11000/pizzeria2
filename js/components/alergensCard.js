class AlergensCard extends HTMLElement {
    constructor() {
        super();

        // Crea el Shadow DOM
        this.attachShadow({ mode: 'open' });
    }

    setAttribute(name,newValue){
        switch(name){
            case "aler":
                this.aler = newValue;
                break;
            default:
                console.log("dato no contemplado en el alergensCard")
                break;
        }
    }

    getAttribute(name){
        switch(name){
            case "aler":
                return this.aler;
                break;
            default:
                console.log("dato no contemplado en el alergensCard")
                break;
        }
    }

    connectedCallback() {
        const alergens = this.getAttribute('aler');

        let alergensList = "";
        for(let aler of alergens){
            alergensList += "<li><img src='../../img/"+aler+".png'/></li>";
        }
              

        this.shadowRoot.innerHTML = `
            <style>
                ul{
                    list-style-type: none;
                }

                img{
                    width: 30px;
                }
            </style>
            <ul class="alergens">${alergensList} </ul>
        `;
    }

}

// Registrar el custom element
customElements.define('alergens-card', AlergensCard);
