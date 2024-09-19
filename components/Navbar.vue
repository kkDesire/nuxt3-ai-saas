<script lang="ts" setup>
const user = useSupabaseUser()
const supabaseClient = useSupabaseClient()

async function logout(): Promise<void> {
  await supabaseClient.auth.signOut()
  await navigateTo('/auth')
}
</script>

<template>
  <div class="flex items-center p-4">
    <!-- MobileSide -->
    <LazyMobileSidebar />
    <div class="flex w-full justify-end">
      <ClientOnly>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="icon">
              <Icon name="lucide:user-circle" class="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="w-72 left-[100px]">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div class="w-full flex items-center p-2 pl-3 gap-2">
              <Avatar class="w-10 h-10">
                <AvatarImage
                  v-if="user?.user_metadata.avatar_url"
                  :src="user.user_metadata.avatar_url"
                />
                <AvatarFallback>
                  {{ user?.email?.charAt(0).toUpperCase() }}
                  {{ user?.email?.charAt(1).toUpperCase() }}
                </AvatarFallback>
              </Avatar>
              <div>
                <div class="font-bold">
                  {{ user?.user_metadata.full_name }}
                </div>
                <div class="text-sm">
                  {{ user?.email }}
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem class="cursor-pointer" @click="logout">
              <Icon class="mr-2 h-4 w-4" name="heroicons:arrow-left-on-rectangle" />
              <span class="ml-2">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ClientOnly>
    </div>
  </div>
</template>

<style>

</style>
