import JBkep from "../View/JBkep.js";
import { galeriaTomb } from "../Modell/Képlista.js";
import FunkcionalisGaleria from "../Modell/FunkcionálisGaléria.js";
import kartyagenaralas from "../Modell/kartyageneralas.js";

export class Start {
    constructor() {
        const Modell = new FunkcionalisGaleria();
        const nagykepView = new JBkep(Modell.getAktkep(), $("#felsosor"));

        $(window).on("jobb", () => {
            Modell.jobb();
            console.log(Modell.getAktkep());
            nagykepView.Nagykepcsere(Modell.getAktkep());
        });
        $(window).on("bal", () => {
            Modell.bal();
            console.log(Modell.getAktkep());
            nagykepView.Nagykepcsere(Modell.getAktkep());
        });
    }
   
    

    
}

export default Start;
