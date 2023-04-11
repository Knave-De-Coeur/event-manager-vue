<script setup>
import cityCRUD from "@/js/city";
import {onMounted} from "vue";

const {cities, getCities} = cityCRUD();

onMounted(() => getCities())
</script>
<template>
    <div>
        <ul>
            <li v-for="city in cities" :key="city.id">
                {{ city.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>