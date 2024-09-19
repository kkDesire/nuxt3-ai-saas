<script setup>
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster rich-colors close-button position="top-right" />
  </div>
</template>
