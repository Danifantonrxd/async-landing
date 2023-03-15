const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {resolve("Async!!")}, 2000)
            : reject(new Error("Todo mal"));
    });
};

const anotherFn = async () => {
    const name = await fnAsync();
    console.log(name);
    console.log("Hello World");
};

console.log("Antes");

anotherFn();

console.log("Despues")