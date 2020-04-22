
class Sejour {
    constructor(private _nom:string, private _prix:number){
    }
    toString():string {
        return `${this._nom} - ${this._prix}`
        }
    getNom() : string {
        return this._nom;  
        }
    getId():number {
        return this._prix;
            }
   
}

class SejourService {
    private _sejours: Sejour[];
    constructor(){
        this._sejours = [new Sejour('Marseille', 200), new Sejour('Paris', 100), new Sejour('Nantes', 1000), new Sejour('Toulouse', 10)]
    }

    findByName(sejourName: string): Sejour | void {
        for (const sejour of this._sejours) {
        if (sejour.getNom() === sejourName) {
            return sejour;
            }            
        }
    }
    
}
const sejourService = new SejourService()
console.log(sejourService.findByName('Marseille'));