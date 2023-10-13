<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';
onMounted(() => {
  document.onselectstart = new Function("event.returnValue=false")
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
