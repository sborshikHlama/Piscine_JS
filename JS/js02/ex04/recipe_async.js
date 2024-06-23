function randomFail() {
    if (Math.random() <= 0.2) throw "Production failed..!(The salary was cut ㅜㅜ)";
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const makeDough = async () => {
    try {
        await delay(1000);
        randomFail();
        return ("Make the dough");
    } catch (error) {
        throw error;
    }
}

const primeFermentation = async () => {
    try {
        const result = await makeDough();
        console.log(result);
        randomFail();
        await delay(5000);
        return ("Primary fermentation");
    } catch (error) {
        throw error;
    }
};

const molding = async () => {
    try {
        const result = await primeFermentation();
        console.log(result);
        randomFail();
        await delay(4200);
        return ("Molding");
    } catch (error) {
        throw error;
    }
}

const secondFermentation = async () => {
    try {
        const result = await molding();
        console.log(result);
        randomFail();
        await delay(2000);
        return ("Second fermentation");
    } catch (error) {
        throw error;
    }
}

const fry = async () => {
    try {
        const result = await secondFermentation();
        console.log(result);
        randomFail();
        await delay(5000);
        return ("Fry");
    } catch (error) {
        throw error;
    }
}

fry().then(result => console.log(result)).catch(error => {
    console.error(error);
});
