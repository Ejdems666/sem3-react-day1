class Cars {
    constructor() {
        this._data = [
            {
                id: 1,
                make: "dunno",
                model: "some model",
                year: 1999,
            },
            {
                id: 2,
                make: "2dunno",
                model: "2some model",
                year: 1992,
            },
            {
                id: 3,
                make: "3dunno",
                model: "3some model",
                year: 1993,
            }
        ];
    }

    getAllCars() {
        return this._data;
    }

    getCar(id) {
        return this._data.find((car) => car.id === id);
    }
}

const cars = new Cars();
cars.getAllCars().forEach(function(c) {
    console.log(`${c.id}, ${c.make}`);
});
let car = cars.getCar(1);
console.log(`${car.id}, ${car.make}`);
