import { Pizza} from '../models/pizza.js';

export class PizzaService{
    static API_URL = 'https://pizza-rest-server-production.up.railway.app/api/pizzeria/pizzes';


    static async getAllPizzes(){
        const resposta = await fetch(this.API_URL);
        
        if(!resposta.ok) throw new Error("No s'han carrgat les dades");
        const dadesPG = await resposta.json();
        const dades = dadesPG.records;

        const pizzes = [];

        for(let JSONpizza of dades){
            const pizza = new Pizza(JSONpizza);
            pizzes.push(pizza);
        }

        return pizzes;
    }
}