<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
  iconColor?: string
  bgColor?: string
}

defineProps<Props>()
</script>

<template>
  <div class="px-4 lg:px-8 flex items-center gap-x-3 mb-6">
    <div :class="`p-2 w-fit flex items-center justify-center rounded-md ${bgColor}`">
      <Icon :name="icon" :class="`w-10 h-10 ${iconColor}`" />
    </div>
    <h2 class="text-3xl font-bold">
      {{ title }}
    </h2>
    <p class="text-sm text-muted-foreground">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>

</style>
