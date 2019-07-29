const makeRequest = (method, url, body) => {

    return new Promise(
        function (res, rej) {
            const req = new XMLHttpRequest();
            req.onload = () => {
                if (req.status === 200) {
                    res(req.response);
                } else {
                    const reason = new Error('Rejected');
                    rej(reason);
                }
            }
            req.open(method, url)
            req.send(body);
        }
    );
}


// Default URL ready to be adjusted
let url = "/add"

const createPost = () => {

    // Setting out the structure for the item to be posted
    const item = {
        userName: document.getElementById("createUsername").value,
        email: document.getElementById("createEmail").value,
        content: document.getElementById("createContent").value
    }
    // Convert item to string and post to url specified
    makeRequest("POST", url, JSON.stringify(item)).then(val => {
        location.reload();
    }).catch(function (error) {
        console.log(error.message)
    });

}