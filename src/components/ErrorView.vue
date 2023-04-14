<template>
    <div class="mt-6 text-red-400">
        <div class="mt-6">
            <div class="text-xl font-bold">Error Occurred</div>
        </div>
        <div class="mt-6">
            <div class="">
                <span class="font-bold">Error Code: </span><span>{{props.error.code}}</span>
            </div>
        </div>
        <div class="mt-6">
            <div class="">
                <span class="font-bold">Error Message: </span><span>{{props.error.errorMsg}}</span>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    error: {
        required: true,
        type: Object,
    }
})

</script>

<style scoped>

</style>