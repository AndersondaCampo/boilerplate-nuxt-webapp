<template>
  <div>
    <pre>{{ users }}</pre>
  </div>
</template>

<script lang="ts" setup>

const users = ref<any>([]);



useAPI<any>('/users').then((res) => {
  console.log(res.data)
  users.value = res.data
})

</script>

<style>

</style>