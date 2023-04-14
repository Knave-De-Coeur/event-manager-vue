<template>
    <div class="mt-12">
        <error-view v-if="errors.response" v-bind:error="errors.response.data"></error-view>
        <div class="mt-12 flex align-middle">
            <div class="flex-1 m-2 p-2">
                <h1 class="bold">Categories</h1>
            </div>
            <div class="flex-1 m-2 p-2">
                <div class="flex justify-end">
                    <RouterLink
                        :to="{ name: 'CategoryCreate' }"
                        class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded"
                    >Create Category</RouterLink>
                </div>
            </div>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left">
                <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th scope="col" class="px-6 py-3">Category Id</th>
                    <th scope="col" class="px-6 py-3">Category Name</th>
                    <th scope="col" class="px-6 py-3">Parent Category</th>
                    <th scope="col" class="px-6 py-3">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="category in categories" :key="category.id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white">
                    <td class="px-6 py-4">
                        {{ category.id }}
                    </td>
                    <td class="px-6 py-4">
                        {{ category.name }}
                    </td>
                    <td class="px-6 py-4">
                        <div v-if="category.parent_id">
                            {{ category.parent_name }}
                        </div>
                        <div v-else>
                            No Parent
                        </div>
                    </td>
                    <td class="px-6 py-4 space-x-2 flex">
                        <RouterLink
                            :to="{name:'CategoryEdit', params:{id: category.id}}"
                            class="px-2 py-2 bg-green-500 hover:bg-green-700 text-white rounded"
                        >Edit</RouterLink>
                        <button
                            class="px-2 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
                            @click="deleteCategory(category.id)">Delete</button>
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
import ErrorView from "@/components/ErrorView.vue";

const {categories, getCategories, deleteCategory, errors} = categoryCRUD();

onMounted(() => getCategories())
</script>

<style scoped>

</style>