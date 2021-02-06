<template>
  <div id="app">
    <pageHeader/>
    <router-view class="router-view"/>
  </div>
</template>
<script>
  /* Author: huangguangqiang
   * Time: 2021-02-06
   * Description: Hacker News 的 页头
   */
  import pageHeader from "./components/pageHeader"

  export default {
    name: 'Home',
    components: {
      pageHeader,
    },
  }
</script>
<style lang="scss" scoped>
  #app{
    padding-top: $headerHeight;
  }
</style>
