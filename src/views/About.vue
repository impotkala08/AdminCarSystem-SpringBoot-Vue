<template>
  <div class="home">
    <Display/>
  </div>
</template>

<script>
// @ is an alias to /src
import Display from '@/components/Display.vue'
import stores from '../store/index'
export default {
  name: 'About',
  stores,
  components: {
    Display
  }
}
</script>

