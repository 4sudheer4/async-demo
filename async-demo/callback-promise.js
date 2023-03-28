

console.log('Before');

// getUser will return a promise.

// const p_ud = getUser(1);


// p_ud
//     .then((result) => getRepo(1))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => {console.log('commits: ',commits)
//     .catch(err => console.log(err));
//     });                

//Async and await approach
async function displayCommits(){
    const p_ud = await getUser(1); //returns a promise
    const p_repo = await getRepo(p_ud.id);  ////returns a promise
    const p_commits = await getCommits(p_repo[0]); //returns a promise
    console.log(p_commits);
}
displayCommits();

// this function will return promise, and we can access the methods of the promise like catch() and then() based on reject() and resolve()

function getUser(id){
        
    return new Promise(function(resolve, reject){
        
        setTimeout(() => {
        console.log('Reading a user from database....');
        resolve({id: id, githubuser: "4sudheer4"});
        // return;    
    }, 2000); } );
}

function getRepo(username){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Reading a repos from the user');
            resolve(["repo1", "repo2", "repo3"]);
            // return;    
        }, 2000);
    })
}

function getCommits(repo){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Reading a commits from the repo');
            resolve(["comm1", "comm2", "comm3"]);
            // return;    
        }, 2000);
    });
}

console.log('After');