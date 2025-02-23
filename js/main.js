import './components/pizzaCard.js'

import { PizzaService} from './services/pizzaService.js';


document.addEventListener('DOMContentLoaded', async()=>{
    let pizzes = await PizzaService.getAllPizzes();
    let body = document.getElementById("cuerpo");

    pizzes.forEach(p=>{
        const pizzaElement = document.createElement('pizza-card');
        pizzaElement.setAttribute('id',p.id);
        pizzaElement.setAttribute('nom',p.nom);
        pizzaElement.setAttribute('desc',p.desc);
        if(p.vege){
            pizzaElement.setAttribute('vege',"Es vegetariana");
        }
        else{
            pizzaElement.setAttribute('vege',"No es vegetariana");
        }
        pizzaElement.setAttribute('preu',p.preu);
        pizzaElement.setAttribute('aler',p.aler);
        if(p.img){
            pizzaElement.setAttribute('img',p.img);
        }
        else{
            pizzaElement.setAttribute('img',pizzes[0].img);
        }
        
        body.appendChild(pizzaElement);
    })
        
    });