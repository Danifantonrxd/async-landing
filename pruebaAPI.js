const API = "https://api.waifu.im/search/?excluded_files=4401";

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = response.json();
    return data;
}

let urlImage = "https://cdn.waifu.im/7244.jpg";
const content = document.getElementById("content");

for(let i = 0; i < 5; i++){
    fetchData(API)
        .then((response) => {
            urlImage = response.images[0].url;
            const images = document.createElement("img");
            images.setAttribute("src", urlImage);
            images.setAttribute("width", 250);
            content.append(images);
        })
        .catch(error => console.log(error))
        .finally(() => console.log("final"));
}

(async () =>{
    for(let i = 0; i < 5; i++){
        try{
            let x = await fetchData(API);
            
            urlImage = x.images[0].url;
            const images = document.createElement("img");
            images.setAttribute("src", urlImage);
            images.setAttribute("width", 250);
            content.append(images);
        }
        catch (error) {
            console.log(error);
        }
    }
})()



