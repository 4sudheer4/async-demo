/*
console.log('Before');
//this is to perform async execution. 
//async execution means one thread will take care of all the threads and 
//instead of serving a process and go to the next process only after finishing the first one, 
//the async will serve all the processes in order and execute the processes with the given wait time

//here 'before' is executed, timeout is scheduled, after is executed.
//the below processes are scheduled at 2nd and 4th seconds with 2sec time gap. 
//where in sync, they will be scheduled at 2nd and 6th seconds.
setTimeout(() => {
    console.log('Reading a user from database....');
}, 2000);
setTimeout(() => {
    console.log('Reading a user from database....');
}, 4000);


console.log('After');

*/
console.log('Before');
getUser(1,function(user){
    console.log('user:',user);

    getRepo(user.githubuser,(repos) => {
        console.log('repos:',repos);
    })
});
//but the above function calls make nested calls which is called callback Hell. this can be resolved.


//callback is a function that will be called when the result of async object is ready. 
function getUser(id, callback){
        setTimeout(() => {
            console.log('Reading a user from database....');
            callback({id: id, githubuser: "4sudheer4"});
            // return;    
        }, 2000);
}

function getRepo(username, callback){
    setTimeout(() => {
        console.log('Reading a repos from the user');
        callback(["repo1", "repo2", "repo3"]);
        // return;    
    }, 2000);
}

console.log('After');