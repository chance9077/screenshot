<template>
  <p>
    message: {{ msg }}
  </p>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';

const msg = ref('');

onBeforeMount(() => {
  fetch('/api/hello')
    .then(res => res.text())
    .then(res => msg.value = res)
    .catch(() => msg.value = 'error');
});
</script>
