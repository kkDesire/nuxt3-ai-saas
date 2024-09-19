<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="h-full p-20 flex flex-col items-center justify-center">
    <div class="relative h-72 w-72">
      <img src="/empty.png" alt="">
    </div>
    <p class="text-sm text-muted-foreground text-center">
      {{ label }}
    </p>
  </div>
</template>

<style>

</style>
