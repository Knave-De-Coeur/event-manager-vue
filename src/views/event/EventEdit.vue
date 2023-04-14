<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="editEvent($route.params.id)">
            <div class="space-y-6">
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300">Event name</label>
                    <input
                        type="text"
                        id="name"
                        v-model="event.name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Event Name"
                        required>
                </div>
                <div class="mb-6">
                    <label for="organizer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300">Organizer:</label>
                    <input
                        type="text"
                        id="organizer"
                        v-model="event.organizer"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Organizer"
                        required>
                </div>
                <div class="mb-6">
                    <label for="Description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300">Description:</label>
                    <p style="white-space: pre-line;">{{ event.description }}</p>
                    <textarea
                        v-model="event.description"
                        placeholder="add a description for your event!"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required></textarea>
                </div>
                <div class="mb-6" >
                    <div id="dropdown" class="z-10 bg-white">
                        <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300">Pick a City:</label>
                        <select id="city" v-model="event.city_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option disabled value>Choose a city</option>
                            <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300">Select time:</label>
                    <DatePicker v-model.range="event.dates" :attributes="datePickerData" mode="dateTime" :min-date="Date.now()"/>
                </div>
                <div class="mb-6">
                    <label for="category_ids" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Categories for this event</label>
                    <select multiple id="category_ids" v-model="event.category_ids" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option disabled value="">Categories:</option>
                        <option v-for="cat in categories" :value="cat.id">
                            {{ cat.name }}
                        </option>
                        <div>Selected: {{ event.parent_id }}</div>
                    </select>
                </div>
                <error-view v-if="eventErrors.response" v-bind:error="eventErrors.response.data"></error-view>
                <div class="mt-4">
                    <button
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Edit Event</button>
                </div>
            </div>
        </form>

    </div>

</template>

<script setup>
import categoryCRUD from "@/js/category";
import eventCRUD from "@/js/event";
import cityCRUD from "@/js/city";
import {onBeforeMount} from "vue";
import {DatePicker} from "v-calendar";
import 'v-calendar/style.css';
import ErrorView from "@/components/ErrorView.vue";

const { getCategories, categories} = categoryCRUD()
const { getEvent, event, editEvent, eventErrors, datePickerData} = eventCRUD()
const { getCities, cities} = cityCRUD()

const props = defineProps({
    id: {
        required: true,
        type: String,
    }
})


onBeforeMount(() => {
    getEvent(props.id);
    getCategories();
    getCities();
})

</script>

<style scoped>

</style>