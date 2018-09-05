<template>
  <div class="PageThreadCreate">
    <h1>Create new thread in <span>{{forum.name}}</span></h1>
    <ThreadEditor :forumId="id"/>
  </div>
</template>

<script>
import ThreadEditor from '@/components/ThreadEditor'
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    ThreadEditor
  },
  computed: {
    forum () {
      return this.$store.state.forums[this.id]
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  > span {
    font-style: italic;
  }
}
</style>
