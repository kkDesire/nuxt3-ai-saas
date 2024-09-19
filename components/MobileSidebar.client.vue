<script lang="ts" setup>

</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline" class="md:hidden hover:opacity-75 transition">
        <Icon name="lucide:menu" class="h-4 w-4" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="p-0 bg-white">
      <Sidebar />
    </SheetContent>
  </Sheet>
</template>

<style>

</style>
