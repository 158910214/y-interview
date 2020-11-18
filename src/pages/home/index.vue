<template lang="pug">
  a-layout.full.flex-y.border
    y-header
    a-layout.flex.flex-1
      y-nav
      a-layout-content.flex-1 main content
      a-layout-sider(theme='light') right sideba
    a-layout-footer.txt-center 
      span 野火烧不尽,
      span.txt-green 一支红杏
      span 出墙来
</template>

<script>
export default {
  name: 'home'
}
</script>
