
const form = document.querySelector("#form");
const main = document.querySelector("#main");

form.addEventListener("submit", async (event)=>{
    event.preventDefault()

    const imgTag = main.children[0]
    console.log(imgTag);

    const fullName = main.children[2]
    console.log(fullName);

    
    const bio = main.children[5]
    console.log(bio);

    
    const repos = main.children[8]
    console.log(repos);

    
    const follow = main.children[11]
    console.log(follow);

    const link = main.children[15]
    console.log(link);
    
    
       
    const value = event.target.children[0].value;
   
    const api = `https://api.github.com/users/${value}`;
    
    const response = await axios (api);
    console.log(response);

    imgTag.src = response.data.avatar_url;
    fullName.innerText = response.data.login;
    bio.innerText = response.data.bio;
    repos.innerText = response.data.public_repos;
    follow.innerText = response.data.following;
    link.href = response.data.html_url;
    
    
    console.log("form is being submitted", value);

    

})

// async function test() {
    
// }

// test()

console.log("Yasir");