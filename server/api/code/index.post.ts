import OpenAI from 'openai'

const config = useRuntimeConfig()

const openai = new OpenAI({
  apiKey: config.openaiKey,
})

const instruction = {
  role: 'system',
  content: 'You are a code generator. you must answer only in markdown code snippets. Use code comments for explanation.',
}

export default defineEventHandler(async (event) => {
  // TODO: Verify and
  await protectRoute(event)

  const { messages } = await readBody(event)

  if (!openai.apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'OpenAI API key not found',
    })
  }
  if (!messages) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Messages is required',
    })
  }

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [instruction, ...messages],
  })

  return response.choices[0].message
})
