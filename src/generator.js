function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

function* iterable(array){
    for(let item of array){
        yield item;
    }
}

const it = iterable(["Oscar","Omar","Ana","Lucia","Juan"]);

console.log(it.next());
