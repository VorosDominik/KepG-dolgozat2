import JBkep from "../View/JBkep.js";
import { galeriaTomb } from "../Modell/Képlista.js";
import FunkcionalisGaleria from "../Modell/FunkcionálisGaléria.js";
import kartyagenaralas from "../Modell/kartyageneralas.js";

export class Start {
    constructor() {
        const Modell = new FunkcionalisGaleria();
        const nagykepView = new JBkep(Modell.getAktkep(),Modell.getAktnev(), $("#felsosor"));
        new kartyagenaralas(galeriaTomb, $("#galeria"))

        $(window).on("jobb", () => {
            Modell.jobb();
            console.log(Modell.getAktkep(),event.detail);
            console.log("nev:", Modell.getAktnev());
            nagykepView.NagyNevcsere(Modell.getAktnev());
            nagykepView.Nagykepcsere(Modell.getAktkep());
          
        });
        $(window).on("bal", () => {
            Modell.bal();
            console.log(Modell.getAktkep() ,event.detail);
            nagykepView.NagyNevcsere(Modell.getAktnev());
            nagykepView.Nagykepcsere(Modell.getAktkep());
          
        });
        $(window).on("kivalaszt",()=>{
           
            var seged=event.detail.getindex()
            
            nagykepView.NagyNevcsere(Modell.getAktNEVoweride(seged));
            nagykepView.Nagykepcsere(Modell.getAktkepoweride(seged));
        })
    }
   
    

    
}

export default Start;
