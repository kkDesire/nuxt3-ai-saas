import { serverSupabaseUser } from '#supabase/server'
import type { H3Event } from 'h3'

export async function protectRoute(event: H3Event): Promise<void> {
  const user = await serverSupabaseUser(event)

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  event.context.user = user
}
