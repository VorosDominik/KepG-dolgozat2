import Kartya from "../View/kartya.js";

class kartyagenaralas {
  constructor(tomb, szuloelem) {
    this.szuloelem=szuloelem
    this.tomb=tomb
    this.letrehozas();
  }
  letrehozas() {
    /**Galéria képeinek generálása */
    this.tomb.forEach((elem, index) => {
      const galeriaKep = new Kartya(elem, index, this.szuloelem);
    });
  }
}
export default kartyagenaralas;
