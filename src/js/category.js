import {ref} from "vue";
import axios from 'axios'
import {useRouter} from "vue-router";

axios.defaults.baseURL = 'http://localhost:8080'

export default function categoryCRUD() {

    const categories = ref([]);
    const category = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getCategories = async () => {
        const response = await axios.get("/categories");
        categories.value = response.data;
    }
    const getCategory = async (id) => {
        const response = await axios.get("/category/" + id);
        category.value = response.data;
    }

    const storeCategory = async (data) => {
        try {
            await axios.post("/category", data);
            await router.push({name: "CategoryList"})
        } catch (error) {
            errors.value = error;
        }
    }

    const editCategory = async (id) => {
        try {
            await axios.put("/category/" + id, category.value);
            await router.push({name: "CategoryList"})
        } catch (error) {
            errors.value = error;
        }
    }

    const deleteCategory = async (id) => {
        try {
            if (!window.confirm("Are you sure? All sub categories will also be deleted.")) {
                return;
            }
            await axios.delete("/category/" + id);
            await getCategories();
        } catch (error) {
            errors.value = error;
        }
    }

    return {
        category,
        categories,
        getCategories,
        getCategory,
        storeCategory,
        editCategory,
        deleteCategory,
        errors,
    };
};