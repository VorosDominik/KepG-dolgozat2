class Kartya {
    #kepem = {};
    #index;
    
    constructor(kepem, index, szuloelem) {
        szuloelem.append("<div class='kartya'>");
        this.#kepem = kepem;
        this.#index=index
        this.tarolo = szuloelem.children("div:last-child");
        this.tarolo.append(`<img src="${this.#kepem.kep}" alt="">`);
        this.kepImg = this.tarolo.children("img");
        this.tarolo.on("click",()=>{
          

              this.#sajatesemenykezelo("kivalaszt")
               
          })
    }
    getindex(){
        return this.#index
    }
    #sajatesemenykezelo(esemenynev){
        const esemenyem= new CustomEvent(esemenynev,{detail: this})
        
        window.dispatchEvent(esemenyem) 
    }
    
}

export default Kartya;
