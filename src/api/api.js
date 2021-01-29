import axios from "axios";

export const carsAPI = {
    async getCars() {
        const response = await axios.get(`http://localhost:3000/cars`)
        console.log(response.data)
        return response.data
    },
    async addCar(brand, model, yearManufacture) {
        const id = (new Date()).getTime()
        let response = await axios.post(`http://localhost:3000/cars`, {
            "id": id,
            "brand": brand,
            "model": model,
            "yearManufacture": yearManufacture
        })
        console.log(response)
    },
    async deleteCar(id) {
        axios.delete(`http://localhost:3000/cars/${id}`);
    }
}