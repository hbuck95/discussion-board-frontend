function makeRequest(requestType, url, sendData) {
    return new Promise((res, rej) => {
        let req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status >= 200 && req.status <= 299) {
                res(req);
            } else {
                rej(req);
            }
        }
        req.open(requestType, url);

        req.send(sendData);
    });
}


function deletePost(id){  
    let jsonData = {
        _id: id,
        email: createEmail.value
    }
    
    return makeRequest("DELETE", `/delete`, jsonData).then((req) => {
        console.log("It worked!");
        let toDelete = document.getElementById(id);
        toDelete.parentNode.removeChild(toDelete);
    }).catch((err) => { console.log(err) });
}
