<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="max-w-12xl">
        <nav class="p-2">
            <div class="flex align-middle items-stretch">
                <RouterLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white flex-1"  to="/">Home</RouterLink>
                <RouterLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white flex-1" to="/city">City</RouterLink>
                <RouterLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white flex-1" to="/category">Categories</RouterLink>
            </div>
        </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen">
      <RouterView />
  </main>
</template>

<style scoped>
</style>
