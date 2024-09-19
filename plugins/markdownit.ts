import md from 'markdown-it'

declare module '#app' {
  interface NuxtApp {
    $mdRenderer: md
  }
}
export default defineNuxtPlugin(() => {
  const renderer = md()
  return {
    provide: {
      mdRenderer: renderer,
    },
  }
})
