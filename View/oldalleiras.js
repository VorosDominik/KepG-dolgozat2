export class oldalleiras{
#nev;
#leiras;
constructor(szulelem,leiras,nev){
    this.szulelem=szulelem
    this.#leiras=leiras
    this.#nev=nev
    
    this.asideelmtolts();
    this.leirasnevhelye= $("#leirasnev")
    this.leirashlye=$("#leiraskap")
   

}
asideelmtolts(){
    let txt=""
    txt+=`   <header><h3 id="leirasnev">${this.#nev}</h3></header> 
            <tartalom id="leiraskap">${this.#leiras}</tartalom>`
    this.szulelem.html(txt)
}

    leirascsere(leiras){
        this.leirashlye.text(leiras)
      
        
    }
    leirasnevcsere(nev){
        this.leirasnevhelye.text(nev)
        
    }


}