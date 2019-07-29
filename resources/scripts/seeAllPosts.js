async function getAllPosts() {

    await makeRequest("GET", "/getAll").then(data => {
        console.log(data);
        showAllPosts(data);
    });

}

function showAllPosts(data) {
    let post = JSON.parse(data);
    console.log(data);
    console.log(post);
    for (let i = 0; i < post.length; i++) {
        console.log(post.length);
        let newPostHead = document.createElement('div');
        newPostHead.innerText = post[i].username;
        newPostHead.id = post[i]._id + "head";
        document.getElementById("allPosts").appendChild(newPostHead);
    
        let newPostContent = document.createElement('div');
        newPostContent.innerText = post[i].content;
        document.getElementById("allPosts").appendChild(newPostContent);

        let newPostDelete = document.createElement('button');
        newPostDelete.id = post[i]._id;
        //newPostDelete.onclick = deletePost(post[i]._id);
        newPostDelete.setAttribute("onclick", `deletePost('${post[i]._id}')`);
        document.getElementById("allPosts").appendChild(newPostDelete);



    }
}
