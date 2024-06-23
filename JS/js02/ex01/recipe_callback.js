function randomFail() {
    if (Math.random() < 0.2) throw "Production failed..!(The salary was cut ㅜㅜ)";
}

const makeDough = (callback) => {
    setTimeout(() => {
        randomFail();
        console.log("Make the dough");
        callback();
    }, 3000);
}

const primeFermentation = (callback) => {
    setTimeout(() => {
        randomFail();
        console.log("Primary fermentation");
        callback();
    }, 5000);
}

const molding = (callback) => {
    setTimeout(() => {
        randomFail();
        console.log("Molding");
        callback();
    }, 4200);
}

const secondFermentation = (callback) => {
    setTimeout(() => {
        randomFail();
        console.log("Second fermentation");
        callback();
    }, 2000);
}

const fry = () => {
    setTimeout(() => {
        randomFail();
        console.log("Fry");
    }, 5000);
}

makeDough(() => {
    primeFermentation(() => {
        molding(() => {
            secondFermentation(() => {
                fry();
            })
        })
    })
});