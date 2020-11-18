<template lang="pug">
  a-layout-sider(theme='light') 
    a-menu(mode='inline' :open-keys='openKeys' @openChange='onOpenChange')
      a-sub-menu(v-for='([title,items],index) in MOCK_NAV' :key='"sub"+index')
        span(slot='title') {{title}}
        a-menu-item(v-for='(item,index) in items' :key='index') {{item}}
</template>
<script>
import { MOCK_NAV } from './config'
export default {
  name: 'y-nav',
  data: () => ({
    MOCK_NAV,
    openKeys: ['sub1'],
    rootSubmenuKeys: ['sub1', 'sub2', 'sub4']
  }),
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
}
</script>
