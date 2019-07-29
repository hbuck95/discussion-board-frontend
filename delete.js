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


function deleteFunc(id){
    let jsonData = JSON.stringify(id);
    return makeRequest("DELETE",  `${ROOT_PATH}/users/delete/`, jsonData).then((req) => {
        console.log("It worked!");
        let toDelete = document.getElementById(id);
        toDelete.parentNode.removeChild(toDelete);
    }).catch(() => { console.log("Didn't work") });
}