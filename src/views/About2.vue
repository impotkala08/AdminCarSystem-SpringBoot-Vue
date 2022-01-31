<template>
  <div class="home">
    <Display2/>
  </div>
</template>

<script>
// @ is an alias to /src
import Display2 from '@/components/Display2.vue'
import stores from '../store/index'
export default {
  name: 'About2',
  stores,
  components: {
    Display2
  }
}
</script>

