const promise = new Promise(function(resolve, reject){
    resolve("Todo correcto");
});

const cows = 9;

const countCows = new Promise((resolve, reject) => {
    if(cows > 10){
        resolve("Tenemos suficiente!!");
    }
    else{
        reject("No tenemos lo necesario");
    }
});

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Terminamos")
});