async function getAllPosts() {

    await makeRequest("GET", "/getAll").then(data => {
        console.log(data);
        showAllPosts(data);
    });

}

function showAllPosts(data) {
    let post = JSON.parse(data);
    for (let i = 0; i < post.length; i++) {
        let newPostHead = document.createElement('div');
        newPostHead.innerText = post[i].username;
        newPostHead.id = post[i].id + "head";
        document.getElementById("allPosts").appendChild(newPostHead);
    
        let newPostContent = document.createElement('div');
        newPostContent.innerText = post[i].content;
        document.getElementById("allPosts").appendChild(newPostContent);

        let newPostEmail = document.createElement('input')
        document.getElementById("allPosts").appendChild(newPostEmail);

        let newPostDelete = document.createElement('button');
        newPostDelete.id = post[i].id;
        newPostDelete.onclick = deletePost(post[i].id);
        document.getElementById("allPosts").appendChild(newPostDelete);



    }
}
