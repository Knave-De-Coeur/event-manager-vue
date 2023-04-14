<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="editCity($route.params.id)">
            <div class="space-y-6 mb-6">
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300">City name</label>
                    <input
                        type="text"
                        id="name"
                        v-model="city.name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sliema"
                        required>
                </div>
                <div class="mb-6">
                    <label for="population" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300">Population</label>
                    <input
                        type="number"
                        id="population"
                        v-model="city.population"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1000"
                        min="1"
                        required>
                </div>
                <div class="mb-6">
                    <label for="size" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300">Size in KM</label>
                    <input
                        type="number"
                        id="size"
                        v-model="city.size"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1000"
                        min="1"
                        required>
                </div>
                <div class=mb-6>
                    <div class="flex items-center">
                        <input id="capital" type="checkbox" v-model="city.capital" :value="city.capital" :checked="city.capital" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label
                            for="capital"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-700"
                        >Capital City?</label>
                    </div>
                </div>
            </div>
            <error-view v-if="errors.response" v-bind:error="errors.response.data"></error-view>
            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Edit City</button>
        </form>
    </div>
</template>

<script setup>
import {onMounted} from 'vue';
import cityCRUD from "@/js/city";
import ErrorView from "@/components/ErrorView.vue";

const { editCity, getCity, city, errors} = cityCRUD()

const props = defineProps({
    id: {
        required: true,
        type: String,
    }
})

onMounted(() => getCity(props.id))

</script>


<style scoped>

</style>