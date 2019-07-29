async function getAllPosts(){

    await makeRequest("GET", "/getAll").then(data => {
        console.log(data);
    });

}