export interface ChatCompletionRequestMessage {
  role: 'user' | 'assistant'
  content: string
}
