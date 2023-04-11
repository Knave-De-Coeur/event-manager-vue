<template>
  <div class="city-form">
      <form @submit.prevent="storeCity(form)">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City name</label>
                  <input
                          type="text"
                          id="name"
                          v-model="form.name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Sliema"
                          required>
              </div>
              <div>
                  <label for="population" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Population</label>
                  <input
                          type="number"
                          id="population"
                          v-model="form.population"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="1000"
                          min="1"
                          required>
              </div>
              <div>
                  <label for="size" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size in KM</label>
                  <input
                          type="number"
                          id="size"
                          v-model="form.size"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="1000"
                          min="1"
                          required>
              </div>
              <div class="flex items-center h-5">
                  <input
                          id="capital"
                          type="checkbox"
                          value=""
                          v-model="form.capital"
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
              </div>
              <label for="capital" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Capital City? </label>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
          <div v-if="errors.message">
              <span>{{errors.message}}</span>
          </div>
      </form>

  </div>
</template>

<script setup>
import {reactive} from 'vue';
import cityCRUD from "@/js/city";

const { storeCity, errors} = cityCRUD()

const form = reactive({
        name: "",
        population: 0,
        size: 0,
        capital: false,
    })
</script>

<style scoped>

</style>