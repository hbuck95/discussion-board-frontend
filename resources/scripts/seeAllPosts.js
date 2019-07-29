async function getAllPosts() {

    await makeRequest("GET", "/getAll").then(data => {
        console.log(data);
        showAllPosts(data);
    });

}

function showAllPosts(data) {
    let post = JSON.parse(data);
    post.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());

    for (let i = 0; i < post.length; i++) {
        console.log(post.length);
        let newPostHead = document.createElement('div');
        newPostHead.innerText = "Username: "+post[i].username;
        newPostHead.id = post[i]._id + "head";
        document.getElementById("allPosts").appendChild(newPostHead);
        document.getElementById(post[i]._id + "head").appendChild(document.createElement("BR"));
    
        let newPostContent = document.createElement('div');
        newPostContent.innerText = "Content:\n"+post[i].content;
        document.getElementById(post[i]._id + "head").appendChild(newPostContent);

        let newPostDelete = document.createElement('button');
        newPostDelete.id = post[i]._id;
        newPostDelete.innerText = "X";
        //newPostDelete.onclick = deletePost(post[i]._id);
       

        newPostDelete.setAttribute("onclick", `deletePost('${post[i]._id}')`);
        document.getElementById(post[i]._id + "head").appendChild(newPostDelete);
        document.getElementById(post[i]._id + "head").appendChild(document.createElement("BR"));
        document.getElementById(post[i]._id + "head").appendChild(document.createElement("BR"));




    }
}
