<template>
  <div id="app">
    <transition name='router-fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
@import "common/css/common";
@import "common/css/rest";
@import "common/css/app";
</style>
