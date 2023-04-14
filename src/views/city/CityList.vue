<template>
<div class="mt-12">
    <error-view v-if="errors.response" v-bind:error="errors.response.data"></error-view>
    <div class="mt-12 flex align-middle">
        <div class="flex-1 m-2 p-2">
            <h1 class="bold">Cities</h1>
        </div>
        <div class="flex-1 m-2 p-2">
            <div class="flex justify-end">
                <RouterLink
                    :to="{ name: 'CityCreate' }"
                    class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded"
                >Create City</RouterLink>
            </div>
        </div>
    </div>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-white">
            <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-700">
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
                <td class="px-6 py-4">
                    {{ city.id }}
                </td>
                <td class="px-6 py-4">
                    {{ city.name }}
                </td>
                <td class="px-6 py-4">
                    {{ city.population }}
                </td>
                <td class="px-6 py-4">
                    {{ city.size }}
                </td>
                <td class="px-6 py-4">
                    {{ city.capital }}
                </td>
                <td class="px-6 py-4 space-x-2 flex">
                    <RouterLink
                        :to="{name:'CityEdit', params:{id: city.id}}"
                        class="px-2 py-2 bg-green-500 hover:bg-green-700 text-white rounded"
                    >Edit</RouterLink>
                    <button
                        class="px-2 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
                        @click="deleteCity(city.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
        <div v-if="errors.value">
            <span>{{errors.value.message}}</span>
        </div>
    </div>
</div>
</template>
<script setup>
import cityCRUD from "@/js/city";
import {onMounted} from "vue";
import ErrorView from "@/components/ErrorView.vue";

const {cities, getCities, deleteCity, errors} = cityCRUD();

onMounted(() => getCities())
</script>

<style scoped>

</style>