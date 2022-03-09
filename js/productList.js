const url = "https://kea22-6016.restdb.io/rest/customiseme?max=20";

const options = {
    headers: {
        "x-apikey": "6228761ddced170e8c83a0a6",
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throwError(response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        //we have the data
        console.log(data);
        //handleData(data);
    })
    .catch((e) => {
        ("An error ocurred:", e.message);
    })