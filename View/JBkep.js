class JBkep {
    #kep;
    #nev
    constructor(kep,nev, szuloelem){
        this.#nev=nev;
        this.#kep=kep;
        this.szuloelem=szuloelem;
        this.#htmlOszerak()
        this.balgombelem=$(".ball")
        this.jobbgombelem=$(".jobb")
        this.Nagykephelye=$("#NAGYKEPHELYE")
        
        this.Nevhelye=$("#nevhelye")
        this.balgombelem.on("click",()=>{
            this.#sajatesemenykezelo("bal")
        })
        this.jobbgombelem.on("click",()=>{
            this.#sajatesemenykezelo("jobb")
        })
    }
    Nagykepcsere(kep){
        this.Nagykephelye.attr("src",kep)
        
    }
    NagyNevcsere(nev){
        this.Nevhelye.text(nev)
        
    }
    #sajatesemenykezelo(esemenynev){
        const esemenyem= new CustomEvent(esemenynev,{detail:this})
        window.dispatchEvent(esemenyem) 
    }
    #htmlOszerak(){
        let txt="<button class='ball'>bal</button>"
        txt+=`
        <div class="card">
    <div class="card-header" id="nevhelye">${this.#nev}</div>
    <div class="card-body"><img id="NAGYKEPHELYE" src="${this.#kep}" class="rounded-circle" alt="Cinque Terre"></div>
    <div class="card-footer">--------------------------------------------------></div>
   
        </div>`
     txt+="<button class='jobb'>jobb</button>"
        this.szuloelem.html(txt);
    }
    
}

export default JBkep;
