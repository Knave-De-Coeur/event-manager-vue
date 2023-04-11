<template>
    <div class="mt-12">
        <div class="mt-12">
            <div class="flex justify-end m-2 p-2">
                <RouterLink
                        :to="{ name: 'CategoryCreate' }"
                >Create Category</RouterLink>
            </div>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">Category Id</th>
                    <th scope="col" class="px-6 py-3">Category Name</th>
                    <th scope="col" class="px-6 py-3">Parent Category</th>
                    <th scope="col" class="px-6 py-3">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="category in categories" :key="category.id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ category.id }}
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ category.name }}
                    </th>
                    <td class="px-6 py-4">
                        {{ category.parent_id }}
                    </td>
                    <td class="px-6 py-4">
                        <RouterLink :to="{name:'CategoryEdit', params:{id: category.id}}">Edit</RouterLink>
                        <button @click="deleteCategory(category.id)">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import categoryCRUD from "@/js/category";
import {onMounted} from "vue";

const {categories, getCategories, deleteCategory} = categoryCRUD();

onMounted(() => getCategories())
</script>

<style scoped>

</style>