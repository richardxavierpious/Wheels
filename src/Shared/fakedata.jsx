import { faker, Faker } from "@faker-js/faker";
function createRandomCarList(){
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model :faker.vehicle.model(),
        type: faker.vehicle.type(),
        image: 'https://www.hindustantimes.com/ht-img/img/2023/10/21/1600x900/tata_harrier_1697883580838_1697883581005.png',
        miles: faker.finance.amount({min:1, max:500}),
        geartype: 'Automatic',
        price: faker.finance.amount({min:1, max:50})
        
    }
}

const carList = faker.helpers.multiple(createRandomCarList, {
    count:6
})

export default{
    carList
}