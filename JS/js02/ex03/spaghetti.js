function randomFail(callback) {
    if (Math.random() <= 0.2) callback("Production failed..!(The salary was cut ㅜㅜ)");
}

const taskA = new Promise((resolve, reject) => {
    setTimeout(() => {
        randomFail(reject);
        resolve("Boil noodles");
    }, 10000)
})

const tasksB = new Promise((resolve, reject) => {
    setTimeout(() => {
        randomFail(reject);
        resolve("Broccoli replacement");
    }, 1000)
})

const taskC = new Promise((resolve, reject) => {
    setTimeout(() => {
        randomFail(reject);
        resolve("Add noodles and stir-fry together");
    }, 3000)
})

taskA.then((result) => console.log(result))
    .catch((err) => {console.log(err)});

tasksB.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail(reject);
            resolve("Saute garlic and onion");
        }, 2000)
    })
}).then((result1) => {
    console.log(result1);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail(reject);
            resolve("Saute Bacon and Ham")
        }, 2000);
    })
}).then((result2) => {
    console.log(result2);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail(reject);
            resolve("Add the sauce and remaining vegetables and stir-fry together");
        }, 3000)
    })
}).then((result3) => console.log(result3))
    .catch((err) => {console.log(err)});

taskC.then((result) => {console.log(result)})
    .catch((err) => {console.log(err)});