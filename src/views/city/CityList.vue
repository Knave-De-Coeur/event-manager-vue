<template>
<div class="mt-12">
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink
                :to="{ name: 'CityCreate' }"
            >Create City</RouterLink>
        </div>
    </div>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">City Id</th>
                <th scope="col" class="px-6 py-3">City Name</th>
                <th scope="col" class="px-6 py-3">Population</th>
                <th scope="col" class="px-6 py-3">Size</th>
                <th scope="col" class="px-6 py-3">Capital</th>
                <th scope="col" class="px-6 py-3">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="city in cities" :key="city.id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ city.id }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ city.name }}
                </th>
                <td class="px-6 py-4">
                    {{ city.population }}
                </td>
                <td class="px-6 py-4">
                    {{ city.size }}
                </td>
                <td class="px-6 py-4">
                    {{ city.capital }}
                </td>
                <td class="px-6 py-4">
                    <RouterLink :to="{name:'CityEdit', params:{id: city.id}}">Edit</RouterLink>
                    <button @click="deleteCity(city.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script setup>
import cityCRUD from "@/js/city";
import {onMounted} from "vue";

const {cities, getCities, deleteCity} = cityCRUD();

onMounted(() => getCities())
</script>

<style scoped>

</style>