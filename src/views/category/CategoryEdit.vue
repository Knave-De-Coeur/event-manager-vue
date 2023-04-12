<template>
    <div class="category-form">
        <form @submit.prevent="editCategory($route.params.id)">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category name</label>
                    <input
                            type="text"
                            id="name"
                            v-model="category.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Sliema"
                            required>
                </div>
                <div>
                    <label
                        for="parent_id"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Parent Category</label>
                    <select
                        id="parent_id"
                        v-model="category.parent_id"
                    >
                        <option disabled value="">No Parent.</option>
                        <option v-for="cat in categories" :value="cat.id">
                            {{ cat.name }}
                        </option>
                        <div>Selected: {{ category.parent_id }}</div>
                    </select>
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            <div v-if="errors.value">
                <span>{{errors.value.message}}</span>
            </div>
        </form>

    </div>
</template>

<script setup>
import {onMounted} from 'vue';
import categoryCRUD from "@/js/category";

const { editCategory, getCategory, getCategories, category, categories, errors} = categoryCRUD()

const props = defineProps({
    id: {
        required: true,
        type: String,
    }
})

onMounted(() => getCategory(props.id))
onMounted(() => getCategories())
</script>

<style scoped>

</style>