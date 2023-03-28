const p1 = new Promise((resolve, rejec) => {
    setTimeout(()=>{
        console.log('async operation 1...');
        resolve('result from p1');
        // rejec('Error because something failed');
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('async operation 2...');
        resolve('result from p2');
    }, 3000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('async operation 3...');
        resolve('result from p3');
    }, 3000);
});

//here the first result and second result gets displayed after 2 seconds consecutively without waiting for 
//each other. Both are displayed right after 2 seconds.
//Promise.call(): the result will be appended in an array and display all the results in result after execution of all promises are done. 
//Promise.race(): only the first executed promise results will be displayed.
Promise.race([p1,p2,p3])
    .then((result) => {console.log(result)})
    .catch((err) => {console.log(err)}); //fails when atleast one of the promises fail.


