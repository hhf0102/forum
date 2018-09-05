<template>
  <div id="app" class="mb-5">
    <TheNavBar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar'
export default {
  components: {
    TheNavBar
  }
}
</script>
