function deletePost(id){  
    let jsonData = {
        _id: id,
        email: createEmail.value
    }
    
    makeRequest("DELETE", "/delete", JSON.stringify(jsonData)).then((req) => {
        console.log("It worked!");
        let toDelete = document.getElementById(id+"head");
        toDelete.parentNode.removeChild(toDelete);
    }).catch((err) => { console.log(err) });
}
