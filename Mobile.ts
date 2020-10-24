export class Mobile{

    private name: string
    private model: string
    private trademark: string
    private sdSize: number
    private color: string
    private is5G: boolean
    private cameraNumber: number
    private price: number

    constructor(name: string, model: string, trademark:string, sdSize: number, color: string, is5G: boolean, cameraNumber: number, price:number){

        this.name = name
        this.model = model
        this.trademark = trademark
        this.sdSize = sdSize
        this.color = color
        this.is5G = is5G
        this.cameraNumber = cameraNumber
        this.price = price

    }

    getname(){
        return this.name
    }
    getmodel(){
        return this.model
    }
    gettrademark(){
        return this.trademark
    }
    getsdSize(){
        return this.sdSize
    }
    getcolor(){
        return this.color
    }
    getis5G(){
        return this.is5G
    }
    getcameraNumber(){
        return this.cameraNumber
    }
    getprice(){
        return this.price
    }

    setname(name: string){
        this.name = name
    }
    setmodel(model: string){
        this.model = model
    }
    settrademark(trademark : string){
        this.trademark = trademark
    }
    setsdSize(sdSize: number){
        this.sdSize = sdSize
    }
    setcolor(color: string){
        this.color = color
    }
    setis5G(is5G: boolean){
        this.is5G = is5G
    }
    setcameraNumber(cameraNumber : number){
        this.cameraNumber = cameraNumber
    }
    setprice(price: number){
        this.price = price
    }

    toString(){

        let telefono: string = ''
        let cobertura: string = "SI"
        if(this.is5G == false){
            cobertura = "NO"
        }

        telefono +=`
                    \n
                    "The characteristics of the mobile ${this.name} are:"
                    · Name: ${this.name}
                    · Model: ${this.model}
                    · Trademark: ${this.trademark}
                    · SD Size (GB): ${this.sdSize}
                    · Color: ${this.color}
                    · Is 5g?: ${cobertura}
                    · Number of Cameras: ${this.cameraNumber}
                    `

        console.log(telefono)
    }




}