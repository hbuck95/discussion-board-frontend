const createPost = () => {

    // Setting out the structure for the item to be posted
    const item = {
        username: document.getElementById("createUsername").value,
        email: document.getElementById("createEmail").value,
        content: document.getElementById("createContent").value
    }
    // Convert item to string and post to url specified
    makeRequest("POST", "/add", JSON.stringify(item)).then(val => {
        location.reload();
    }).catch(function (error) {
        console.log(error.message)
    });

}