const API = "https://api.waifu.im/search/?excluded_files=4401";

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const content = document.getElementById("content");

(async () => {
  for(let i = 0; i < 5; i++){
    try{
      const x = await fetchData(API);
      urlImage = x.images[0].url;
      imageName = x.images[0].tags[0].name;
      let view = `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${urlImage}" alt="" class="w-full" height="300" width="200">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${imageName}
          </h3>
        </div>
      </div>
      `;
      content.innerHTML += view;
  }
  catch (error) {
      console.log(error);
  }
  }  
})();