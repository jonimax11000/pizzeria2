import './alergensCard.js';

class ProducteCard extends HTMLElement {
    constructor() {
        super();

        // Crea el Shadow DOM
        this.attachShadow({ mode: 'open' });
        this.url = "https://pizza-rest-server-production.up.railway.app";

    }

    setAttribute(name,newValue){
        switch(name){
            case "nom":
                this.nom = newValue;
                break;
            case "id":
                this.id = newValue;
                break;
            case "desc":
                this.desc = newValue;
                break;
            case "vege":
                this.vege = newValue;
                break;
            case "preu":
                this.preu = newValue;
                break;
            case "img":
                this.img = newValue;                
                break;
            case "aler":
                this.aler = newValue;
                break;
            default:
                console.log("dato no contemplado en el pizzaCard")
                break;
        }
    }

    getAttribute(name){
        switch(name){
            case "nom":
                return this.nom;
                break;
            case "id":
                return this.id;
                break;
            case "desc":
                return this.desc;
                break;
            case "vege":
                return this.vege;
                break;
            case "preu":
                return this.preu;
                break;
            case "img":
                return this.img;                
                break;
            case "aler":
                return this.aler;
                break;
            default:
                console.log("dato no contemplado en el pizzaCard")
                break;
        }
    }

    connectedCallback() {
        const nom = this.getAttribute('nom');
        const id = this.getAttribute('id');
        const desc = this.getAttribute('desc');
        const vege = this.getAttribute('vege');
        const preu = this.getAttribute('preu') + " €";
        const img = this.url+this.getAttribute('img');
        console.log(img);
        const alergens = this.getAttribute('aler');

        
              

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    margin: 10px;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 15px;
                    width: 300px;
                    height: auto;
                    background-color:rgb(255, 255, 255);
                    font-family: Arial, sans-serif;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
                    background-image: url('${img}');
                    background-size: 60%; 
                    background-position: center;  
                    background-repeat: no-repeat;

                }
                .preu {
                    background-color:rgba(255, 221, 0, 0.95);
                    padding: 5px;
                    border-radius: 5px;
                    border: 1px solid #efcd00;
                    margin: 2px;
                }
            
                
                .id{

                }
            
                ul{
                    list-style-type: none;
                }
            </style>
            <div class="pizza">
                <h2 class="id">${id}</h2>
                <p class="nom">${nom}</p>
                <p class="desc">${desc}</p>
                <p class="vegetariana">${vege}</p>
                <span class="preu">${preu}</span>
                <h4 id="alergens">Alergens</h4>
            </div>
        `;

        let h4 = this.shadowRoot.getElementById("alergens");
        let alergensElement = document.createElement("alergens-card");
        alergensElement.setAttribute("aler",alergens);
        h4.insertAdjacentElement("afterend",alergensElement);
    }

}

// Registrar el custom element
customElements.define('pizza-card', ProducteCard);
