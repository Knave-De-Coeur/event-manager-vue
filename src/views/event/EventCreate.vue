<template>
    <div class="event-form">
        <form @submit.prevent="storeEvent(form)">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event name</label>
                    <input
                            type="text"
                            id="name"
                            v-model="form.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Event Name"
                            required>
                </div>
                <div>
                    <label for="organizer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organizer</label>
                    <input
                            type="text"
                            id="organizer"
                            v-model="form.organizer"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Organizer"
                            required>
                </div>
                <div>
                    <label for="Description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <p style="white-space: pre-line;">{{ form.description }}</p>
                    <textarea v-model="form.description" placeholder="add a description for your event!" required></textarea>
                </div>
                <div>
                    <label
                            for="city_id"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >City</label>
                    <select
                            id="city_id"
                            v-model="form.city_id"
                            required
                    >
                        <option disabled value="">Select City!</option>
                        <option v-for="city in cities" :value="city.id">
                            {{ city.name }}
                        </option>
                        <div>Selected: {{ form.city_id }}</div>
                    </select>
                </div>
            </div>
            <div>
                <label for="time_start">Start:</label>
                <input type="datetime-local" id="time_start" v-model="form.time_start" name="time_start">
            </div>
            <div>
                <label for="time_end">End:</label>
                <input type="datetime-local" id="time_end" v-model="form.time_end" name="time_start">
            </div>
            <div>
                <label
                        for="category_ids"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Categories</label>
                <select
                        id="category_ids"
                        v-model="form.category_ids"
                        multiple
                >
                    <option disabled value="">Categories:</option>
                    <option v-for="cat in categories" :value="cat.id">
                        {{ cat.name }}
                    </option>
                    <div>Selected: {{ form.parent_id }}</div>
                </select>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            <div v-if="eventErrors">
                <span>{{eventErrors.value.msg}}</span>
            </div>
        </form>

    </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import cityCRUD from "@/js/city";
import categoryCRUD from "@/js/category";
import eventCRUD from "@/js/event";

const { storeEvent, eventErrors} = eventCRUD()
const { categories} = categoryCRUD()
const { cities, getCities} = cityCRUD()

const form = reactive({
    name: "",
    organizer: "",
    description: "",
    city_id: "",
    time_start: "",
    time_end: "",
    category_ids: []
})

onMounted(() => getCities());

</script>

<style scoped>

</style>