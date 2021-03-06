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
        //to check if we have the data
        //console.log(data);
        handleData(data);
    })
    .catch((e) => {
        ("An error ocurred:", e.message);
    })

function handleData(soaps) {
    soaps.forEach(soap => {
        console.log(soap);
        // 1. Grap the template
        const template = document.querySelector("template").content;

        // 2. Clone template
        const clone = template.cloneNode(true);
        // 4. Populated with data
        console.log(soap._id);
        clone.querySelector("a").setAttribute("href", `product.html?id=${soap._id}`);

        clone.querySelector(".producTitle").textContent = soap.productname;
        clone.querySelector(".desc").textContent = soap.productgroup;
        clone.querySelector(".price").textContent = soap.price;
        clone.querySelector("img").src = soap.img_url;
        clone.querySelector("img").alt = soap.productname;


        // 5. Grap the parent
        const parent = document.querySelector("#produtsCont");
        // 6. Appent to the DOM
        parent.appendChild(clone);


    });
}