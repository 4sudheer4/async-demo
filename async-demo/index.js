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
const user = getUser(1);
console.log(user);

function getUser(id){
        setTimeout(() => {
            console.log('Reading a user from database....');
            return {id: id, githubuser: "4sudheer4"};    
        }, 2000);
}

console.log('After');