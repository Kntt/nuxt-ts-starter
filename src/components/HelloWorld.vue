<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class HelloWorld extends Vue {
    message: string = 'Hello world ! typescript'
}
</script>
