<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  color: #333;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  background: #fff;
}
</style>
