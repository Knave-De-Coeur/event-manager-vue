<template>
  <main>
      <div class="mt-12">
          <div class="mt-12">
              <div class="flex justify-end m-2 p-2">
                  <RouterLink
                          :to="{ name: 'EventCreate' }"
                  >Create Event</RouterLink>
              </div>
          </div>
          <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">Id</th>
                      <th scope="col" class="px-6 py-3">Event Name</th>
                      <th scope="col" class="px-6 py-3">Organizer</th>
                      <th scope="col" class="px-6 py-3">Categories</th>
                      <th scope="col" class="px-6 py-3">Description</th>
                      <th scope="col" class="px-6 py-3">City</th>
                      <th scope="col" class="px-6 py-3">Start</th>
                      <th scope="col" class="px-6 py-3">End</th>
                      <th scope="col" class="px-6 py-3">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="event in events" :key="event.id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {{ event.id }}
                      </th>
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {{ event.name }}
                      </th>
                      <td class="px-6 py-4">
                          {{ event.organizer }}
                      </td>
                      <td class="px-6 py-4">
                          <RouterLink
                              v-for="(category, index) in event.category_names"
                              :to="{name:'CategoryEdit', params:{id: event.category_ids[index]}}"
                          >
                              {{ category }}
                          </RouterLink>
                      </td>
                      <td class="px-6 py-4">
                          {{ event.description }}
                      </td>
                      <td class="px-6 py-4">
                          <RouterLink :to="{name:'CityEdit', params:{id: event.city_id}}">{{ event.city_name }}</RouterLink>
                      </td>
                      <td class="px-6 py-4">
                          {{ event.time_start }}
                      </td>
                      <td class="px-6 py-4">
                          {{ event.time_end }}
                      </td>
                      <td class="px-6 py-4">
                          <RouterLink :to="{name:'EventEdit', params:{id: event.id}}">Edit</RouterLink>
                          <button @click="deleteEvent(event.id)">Delete</button>
                      </td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </main>
</template>
<script setup>
import {onMounted} from "vue";
import eventCRUD from "@/js/event";

const {events, getEvents, deleteEvent} = eventCRUD();

onMounted(() => getEvents())
</script>