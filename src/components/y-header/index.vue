<template lang="pug">
  a-layout-header.flex
    .logo.flex-1
    a-menu.py-14(theme='dark' mode='horizontal')
      a-menu-item.font-h4.txt-link(v-for='(item,index) in MENU_LIST' :key='index') {{item}}
</template>

<script>
import { MENU_LIST } from './config'
export default {
  name: 'y-header',
  data: () => ({ MENU_LIST })
}
</script>
