<script lang="ts" setup>
const currentRoute = useRoute()
</script>

<template>
  <div class="space-y-4 flex flex-col h-full bg-white shadow-sm border-r">
    <div class="px-3 py-2 flex-1">
      <NuxtLink class="flex items-center pl-3 mb-14" to="/">
        <div class="relative h-8 w-8 mr-4">
          <img src="/logo.svg" alt="Nuxt Ai Saas Logo">
        </div>
        <h1 class="text-2xl font-bold">
          AIGenX
        </h1>
      </NuxtLink>
      <div class="space-y-1">
        <NuxtLink
          v-for="route in dashboardLinks"
          :key="route.link"
          :to="route.link"
          class="text-sm group text-primary flex p-3 justify-start font-medium cursor-pointer rounded-lg transition hover:bg-muted"
          :class="{
            'bg-muted': currentRoute.path === route.link,
          }"
        >
          <div class="flex items-center gap-3 flex-1 capitalize">
            <Icon :name="route.icon" :class="`h-5 w-5 ${route.color}`" />
            {{ route.label }}
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- Counter -->
  </div>
</template>

<style>

</style>
