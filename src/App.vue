<template>
  <div id="app">
    <SidePanel/>
    <router-view/>
  </div>
</template>

<script>

import SidePanel from "@/components/_core/html/body/SidePanel";
import PreviewPanel from "@/components/_core/html/body/PreviewPanel";

export default {
  name: 'App',
  components : {
    PreviewPanel,
    SidePanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
