//promise chain example
const delay =(timeinms)=>{
    return new Promise((resolve=> setTimeout(resolve,timeinms)))
}
//promise chaining with 1000 milliseconds delay
delay(1000)
    .then(() => {
        console.log("Hello World");
        return delay(1000);
    })
    .then(() => {
        console.log("Promise2");
        return delay(1000); 
    })
    .then(() => {
        console.log("Promise3");
    })
    .catch((error) => {
        console.error(error);
    });