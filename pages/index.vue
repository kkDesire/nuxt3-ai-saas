<script lang="ts" setup>
const user = useSupabaseUser()
</script>

<template>
  <div>
    <pre>{{ user }}</pre>
  </div>
</template>

<style>

</style>
