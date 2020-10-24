import{Mobile} from "./Mobile"

export class MobileLibrary{

    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number

    constructor(name:string, location: string, mobiles: Mobile[] ){

        this.name = name;
        this.location = location;
        this.mobiles = mobiles
    }

    getname(){
        return this.name
    }
    getlocation(){
        return this.location
    }
    getMobiles(){
        return this.mobiles
    }
    gettotalPrice(){
        return this.totalPrice
    }

    totalPriceCalculation(): number{

        let precioTotal: number = 0

        for(let i=0; i<this.mobiles.length; i++){

            precioTotal += (this.mobiles[i].getprice())

        }

        return precioTotal
    }

}