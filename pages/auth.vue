<script setup lang="ts">
import { Auth } from '@nuxtbase/auth-ui-vue'
import { ThemeSupa } from '@supabase/auth-ui-shared'

definePageMeta({
  layouts: 'home',
})
const supabaseClient = useSupabaseClient()
</script>

<template>
  <div class="w-full min-h-screen flex items-center">
    <div class="max-w-[500px] w-full mx-auto">
      <Card>
        <CardTitle>
          <div class="text-center py-4">
            Welcome
          </div>
        </CardTitle>
        <CardContent>
          <Auth
            :supabase-client="supabaseClient"
            :appearance="{
              theme: ThemeSupa,
            }"
            :providers="['github', 'google']"
            social-layout="horizontal"
          />
        </CardContent>
      </Card>
    </div>
  </div>
</template>
