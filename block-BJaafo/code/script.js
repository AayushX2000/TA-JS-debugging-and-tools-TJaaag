function getFullname(firstName,lastName){
    return firstName+lastName
}

let result=getFullname("Harsh","ki")
let expeacted="SonuKumar"
if(result!==expeacted){
    throw new Error('${result} is not equal to ${expected}');
}
let firstResult=getFullname("Sonu","kumar")
if(result==expeacted){
    throw new Error('${result} is not equal to ${expected}');
}


function totalAmount(amount,taxRate){
    return amount+(amount*taxRate)
}
let totalResult=totalAmount(2000,15)
let expeactedTotal=10000
if(result!==expeacted){
    throw new Error('${result} is not equal to ${expected}');
}
