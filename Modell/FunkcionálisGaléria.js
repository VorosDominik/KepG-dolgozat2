import { galeriaTomb } from "./Képlista.js"
class FunkcionalisGaleria {
    #lista=[]
    #id
 
    constructor(){
        this.#lista=galeriaTomb
        this.#id=0

    }
    getlist(){
        return this.#lista


    }
    getAktkep(){
        return this.#lista[this.#id].kep;
    }
    jobb(){
        this.#id++;
        if(this.#id>=this.#lista.length){
            this.#id=0
        }
    }
    bal(){
        this.#id--;
        if(this.#id<0){
            this.#id=this.#lista.length-1
        }
    }

    
}

export default FunkcionalisGaleria;
