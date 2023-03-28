//promise will hold eventual result of an async operation
//this object can be in 3 states.
//1. pending state: it will kickoff async operations and wait till it completes and have the result value. This is called 'fullfilled' or else 'rejected'

//promise is in a dependent state. It is waiting to kickoff the function defined in it.

const p = new Promise(function(resolve, reject){
    //kick off some async work.
    //...
    setTimeout(() => {
        // resolve(1); //pending => resolved, fullfilled
        reject(new Error('message')); //pending => rejected.
    }, 2000);
    //if successful, then we send the result to consumer promise
    
    //else reject(new Error('message));

});

/*****IMP: HERE THE ABOVE REJECT('MESSAGE') WILL BE PASSED TO CATCH AND PARAMETER 'ERR' HAS 'MESSAGE' AS VALUE */
p
    //this will execute 'then' or 'catch' based on whether resolve() or reject() is executed.
    .then(function(result) {
    console.log('Result', result)}
    )
    .catch(function(err){
        console.log('Error', err.message)} 
    );