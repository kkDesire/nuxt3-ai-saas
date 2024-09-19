<script lang="ts" setup>

</script>

<template>
  <div class="h-full relative">
    <div class="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 md:w-72 z-50">
      <!-- Sidebar -->
      <Sidebar />
    </div>
    <main class="md:pl-72 pb-10">
      <Navbar />
      <!-- Navbar -->
      <slot />
    </main>
  </div>
</template>

<style>

</style>
