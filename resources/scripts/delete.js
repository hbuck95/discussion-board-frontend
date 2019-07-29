function deletePost(id){  
    let jsonData = {
        _id: id,
        email: createEmail.value
    }
    
    return makeRequest("DELETE", "/delete", JSON.stringify(jsonData)).then((req) => {
        console.log("It worked!");
        let toDelete = document.getElementById(id);
        toDelete.parentNode.removeChild(toDelete);
    }).catch((err) => { console.log(err) });
}
