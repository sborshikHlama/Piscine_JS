function randomFail(callback) {
    if (Math.random() <= 0.2) callback("Production failed..!(The salary was cut ㅜㅜ)");
}

const makeDough = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Make the dough")
    }, 3000)
})

makeDough.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail(reject);
            resolve("Prime fermentation");
        }, 5000)
    })
}).then((result1) => {
    console.log(result1);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail(reject);
            resolve("Molding")
        }, 4200)
    })
}).then((result2) => {
    console.log(result2);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail(reject);
            resolve("Second fermentation");
        }, 2000)
    })
}). then((result3) => {
    console.log(result3);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail(reject);
            resolve("Fry");
        }, 5000)
    })
}).then((result4) => {
    console.log(result4);
}).catch((err) => {console.log(err)})