<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import stores from '../store/index'
export default {
  name: 'Home',
  stores,
  components: {
    HelloWorld,
  }
}
</script>
