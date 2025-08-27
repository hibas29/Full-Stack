// runs the tasks in background without stoppping the code
console.log("STEP 1"); 
setTimeout(() =>{
    console.log("STEP 2") 
}, 1999); // 1999 refers to nearly 2 seconds time taken to print "STEP 2"

setTimeout(() => console.log("Timeout 3"), 2000); // This will execute after 2 seconds
console.log("STEP 3"); // This will execute immediately after STEP 1

