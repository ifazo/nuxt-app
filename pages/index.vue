<template>
  <div>
    <img src="~/assets/img/nuxt.png" alt="Nuxt 3" />
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <p>{{ foo }}</p>
  </div>
</template>

<script setup lang="ts">
const foo = useFoo()
</script>
