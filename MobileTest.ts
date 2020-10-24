import {Mobile} from "./Mobile"

let mobile1 = new Mobile("Nokia3210","3210","Nokia",0,"gris",false,0,50)
let mobile2 = new Mobile("Iphone3G","3G","Apple",8,"black",false,1,120)
let mobile3 = new Mobile("Samsung Galaxy 10","Galaxy 10","Samsung",128,"blue",true,3,580)

console.log(mobile1.name + ' ' + mobile1.model + ' ' + mobile1.trademark + ' ' + mobile1.sdSize + ' ' + mobile1.color + ' ' + mobile1.is5G + ' ' + mobile1.cameraNumber + ' ' + mobile1.price)
console.log(mobile2.name + ' ' + mobile2.model + ' ' + mobile2.trademark + ' ' + mobile2.sdSize + ' ' + mobile2.color + ' ' + mobile2.is5G + ' ' + mobile2.cameraNumber + ' ' + mobile2.price)
console.log(mobile3.name + ' ' + mobile3.model + ' ' + mobile3.trademark + ' ' + mobile3.sdSize + ' ' + mobile3.color + ' ' + mobile3.is5G + ' ' + mobile3.cameraNumber + ' ' + mobile3.price)

mobile1.is5G = true
mobile1.cameraNumber = 4

console.log(mobile1.name + ' ' + mobile1.model + ' ' + mobile1.trademark + ' ' + mobile1.sdSize + ' ' + mobile1.color + ' ' + mobile1.is5G + ' ' + mobile1.cameraNumber + ' ' + mobile1.price)
console.log(mobile2.name + ' ' + mobile2.model + ' ' + mobile2.trademark + ' ' + mobile2.sdSize + ' ' + mobile2.color + ' ' + mobile2.is5G + ' ' + mobile2.cameraNumber + ' ' + mobile2.price)
console.log(mobile3.name + ' ' + mobile3.model + ' ' + mobile3.trademark + ' ' + mobile3.sdSize + ' ' + mobile3.color + ' ' + mobile3.is5G + ' ' + mobile3.cameraNumber + ' ' + mobile3.price)
