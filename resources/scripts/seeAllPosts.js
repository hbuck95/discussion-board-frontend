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
        newPostHead.innerText = 'Username: ' + post[i].username;
        newPostHead.id = post[i]._id + "head";
        newPostHead.style = "font-weight: bold";
        document.getElementById("allPosts").appendChild(newPostHead);

        document.getElementById("allPosts").appendChild(document.createElement('br'));
    
        let newPostContent = document.createElement('div');
        newPostContent.innerText = post[i].content;
        document.getElementById("allPosts").appendChild(newPostContent);

        let newPostDelete = document.createElement('button');
        newPostDelete.id = post[i]._id;
        newPostDelete.onclick = deletePost(post[i]._id);
        newPostDelete.innertext = "X";
        document.getElementById("allPosts").appendChild(newPostDelete);



    }
}
