export class Pizza{
    constructor(json){
        this.id = json.id;
        this.nom = json.nom;
        this.desc = json.desc;
        this.vege = json.vegetariana;
        this.aler = json.alergens;
        this.img = json.img;
        this.preu = json.preu;
    }

    toString(){
        return `${this.nom} - ${preu} €`
    }
}