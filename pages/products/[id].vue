<template>
  <div>
    <p>Product details for {{ params.id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae earum
      quis a soluta incidunt in perferendis pariatur, voluptatum rem non
      excepturi atque aspernatur est sapiente. Suscipit magnam alias deleniti?
    </p>
  </div>
</template>

<script setup>
const { params } = useRoute();
</script>

<style lang="scss" scoped></style>
