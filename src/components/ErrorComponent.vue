<script setup lang="ts">
defineProps<{ error?: string | null }>();
</script>

<template>
  <div class="error">
    <div> {{ error }}</div>
  </div>
</template>

<style scoped>

</style>