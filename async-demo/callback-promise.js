

console.log('Before');

const p = getUser(1);

p.then(function getUserDetails(result){
    console.log('User details: ', result);
})

function getUser(id){
        
    return new Promise(function(resolve, reject){
        
        setTimeout(() => {
        console.log('Reading a user from database....');
        resolve({id: id, githubuser: "4sudheer4"});
        // return;    
    }, 2000); } );
}

function getRepo(username, callback){
    setTimeout(() => {
        console.log('Reading a repos from the user');
        callback(["repo1", "repo2", "repo3"]);
        // return;    
    }, 2000);
}

console.log('After');