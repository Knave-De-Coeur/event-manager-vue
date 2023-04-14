<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeCategory(form)">
            <div class="space-y-6 mb-6">
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300">Category name</label>
                    <input
                            type="text"
                            id="name"
                            v-model="form.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Rock"
                            required>
                </div>
                <div class="mb-6">
                    <div id="dropdown" class="z-10 bg-white">
                        <label
                            for="parent_id"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300"
                        >Parent Category</label>
                        <select
                            id="parent_id"
                            v-model="form.parent_id"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option disabled value="">No Parent.</option>
                            <option v-for="cat in categories" :value="cat.id">{{ cat.name }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <error-view v-if="errors.response" v-bind:error="errors.response.data"></error-view>
            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Add Category</button>
        </form>

    </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import categoryCRUD from "@/js/category";
import {initFlowbite} from "flowbite";
import ErrorView from "@/components/ErrorView.vue";

const { categories, getCategories, storeCategory, errors} = categoryCRUD()

const form = reactive({
    name: "",
    parent_id: 0,
})

onMounted(() => {
    initFlowbite();
    getCategories()
})

</script>

<style scoped>

</style>