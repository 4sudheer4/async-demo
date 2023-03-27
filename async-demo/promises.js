//promise will hold eventual result of an async operation
//this object can be in 3 states.
//1. pending state: it will kickoff async operations and wait till it completes and have the result value. This is called 'fullfilled' or else 'rejected'

const p = new Promise(function(resolve, reject){
    //kick off some async work.
    //...
    //if successful, then we send the result to consumer promise
    resolve(1);
    //else reject(new Error('message));

});

p.then(function(result) {
    console.log('Result', result)}
);