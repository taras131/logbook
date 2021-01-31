import axios from "axios";

export const carsAPI = {
    async getCars() {
        const response = await axios.get(`http://localhost:3000/cars`)
        return response.data
    },
    async addCar(brand, model, yearManufacture) {
        const id = (new Date()).getTime()
        await axios.post(`http://localhost:3000/cars`, {
            "id": id,
            "brand": brand,
            "model": model,
            "yearManufacture": yearManufacture
        })
    },
    async deleteCar(id) {
        axios.delete(`http://localhost:3000/cars/${id}`);
    }
}
export const consumablesAPI = {
    async getConsumables(id) {
        const response = await axios.get(`http://localhost:3000/consumables/?idCar=${id}`)
        return response.data
    },
    async addConsumables(name, discription, id) {
        await axios.post(`http://localhost:3000/consumables`, {
            "idCar": id,
            "name": name,
            "discription": discription
        })
    },
    async getTehnical(id) {
        const response = await axios.get(`http://localhost:3000/tehnical/?idCar=${id}`)
        return response.data
    },
    async addTehnical(date, discription,odometer, id) {
        console.log(date)
        await axios.post(`http://localhost:3000/tehnical`, {
            "idCar": id,
            "date": date,
            "odometer": odometer,
            "discription": discription
        })
    }
}