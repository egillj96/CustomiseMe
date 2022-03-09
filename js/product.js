const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


const url = "https://kea22-6016.restdb.io/rest/customiseme/" + id

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
        //to check if we have the data
        //console.log(data);
        showProduct(data);
    })
    .catch((e) => {
        ("An error ocurred:", e.message);
    })

function showProduct(soap) {
    document.querySelector(".producTitle").textContent = soap.productname;
    document.querySelector(".desc").textContent = soap.productgroup;
    document.querySelector(".price").textContent = soap.price;
    document.querySelector("#productImg").src = soap.img_url;
    document.querySelector("#productImg").alt = soap.productname;

}