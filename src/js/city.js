import {ref} from "vue";
import axios from 'axios'
import {useRouter} from "vue-router";

axios.defaults.baseURL = 'http://localhost:8080'

export default function cityCRUD() {

    const cities = ref([]);
    const city = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getCities = async () => {
        const response = await axios.get("/cities");
        cities.value = response.data;
    }
    const getCity = async (id) => {
        const response = await axios.get("/city/" + id);
        city.value = response.data;
    }

    const storeCity = async (data) => {
        try {
            console.log("sending data", data);
            await axios.post("/city", data);
            await router.push({name: "CityView"})
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const editCity = async (id) => {
        try {
            await axios.put("/city/" + id, city.value);
            await router.push({name: "CityView"})
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const deleteCity = async (id) => {
        try {
            if (!window.confirm("Are you sure?")) {
                return;
            }
            await axios.delete("/city/" + id);
            await router.push({name: "CityList"})
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    return {
        city,
        cities,
        getCities,
        getCity,
        storeCity,
        editCity,
        deleteCity,
        errors,
    };
};