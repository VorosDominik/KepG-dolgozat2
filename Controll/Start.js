import JBkep from "../View/JBkep.js";
import { galeriaTomb } from "../Modell/Képlista.js";
import FunkcionalisGaleria from "../Modell/FunkcionálisGaléria.js";
import kartyagenaralas from "../Modell/kartyageneralas.js";
import { oldalleiras } from "../View/oldalleiras.js";

export class Start {
    constructor() {
        const Modell = new FunkcionalisGaleria();
        const nagykepView = new JBkep(Modell.getAktkep(),Modell.getAktnev(), $("#felsosor"));
        new kartyagenaralas(galeriaTomb, $("#galeria"))
        const Leiras=new oldalleiras($("#leiras"),Modell.getAktleiras(),Modell.getAktnev())

        $(window).on("jobb", () => {
            Modell.jobb();
           
         
            nagykepView.NagyNevcsere(Modell.getAktnev());
            nagykepView.Nagykepcsere(Modell.getAktkep());
            Leiras.leirascsere(Modell.getAktleiras())
            Leiras.leirasnevcsere(Modell.getAktnev())
          
        });
        $(window).on("bal", () => {
            Modell.bal();
            console.log(Modell.getAktkep() ,event.detail);
            nagykepView.NagyNevcsere(Modell.getAktnev());
            nagykepView.Nagykepcsere(Modell.getAktkep());


            Leiras.leirascsere(Modell.getAktleiras())
            Leiras.leirasnevcsere(Modell.getAktnev())
          
        });
        $(window).on("kivalaszt",()=>{
           
            var seged=event.detail.getindex()
            
            nagykepView.NagyNevcsere(Modell.getAktNEVoweride(seged));
            nagykepView.Nagykepcsere(Modell.getAktkepoweride(seged));
            Leiras.leirascsere(Modell.getAktleirasOWERWRITE(seged))
            Leiras.leirasnevcsere(Modell.getAktNEVoweride(seged))
        })
    }
   
    

    
}

export default Start;
