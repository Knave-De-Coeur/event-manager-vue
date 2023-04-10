<template>
<div class="city-table">
    <ul>
        <li v-for="city in cities" key="city.id">
            {{ city.name }}
        </li>
    </ul>
</div>
</template>

<script>
import cityCRUD from "@/js/city";
import {onMounted} from "vue";

const {cities, getCities} = cityCRUD();

onMounted(() => getCities())

export default {
    name: "CityVue"
}
</script>

<style scoped>

</style>