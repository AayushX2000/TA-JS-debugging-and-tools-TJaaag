function test(msg,cb){
    try {
        cb();
        console.log(msg)
    } catch (error) {
        console.error(error);
        console.log(msg)
        
    }
}
function addTwonumbers(numA,numB){

    return numA+numB
}
function expect(actual){
    return{
        toEqual:function(expected){
            if(actual!==expected){
                throw new Error (`${actual}is not equal to ${expected}`)
            }
        },
        toBeEqual:function(expected){
            if(typeof actual!==expected){
                throw new Error (`${actual}is not equal to ${expected}`)
            }
        },
    };
}
test('add 10+10 eual to 20',()=>{
     expect(addTwonumbers(10,10)).toEqual(20);
})
test('add 30+10 eual to 40',()=>{
    expect(addTwonumbers(30,10)).toEqual(20);
})
test('add 10 is typeof number',()=>{
   expect (10).toEqual(typeof Number)
})
function mulTwonumbers(numA,numB){

    return numA*numB
}
test('add 10*10 eual to 100',()=>{
    expect(mulTwonumbers(10,10)).toEqual(100);
})
test('add 30*10 eual to 300',()=>{
   expect(mulTwonumbers(30,10)).toEqual(300);
})
test('add 10 is typeof number',()=>{
  expect (10).toEqual(typeof Number)
})