<template>
  <div class="card">
    <div class="card-header bg-primary text-white">Threads</div>
    <ThreadListItem
      v-for="thread in threads"
      :thread="thread"
      :key="thread['.key']"
      class="threadListItem"
    />
  </div>
</template>

<script>
import ThreadListItem from '@/components/ThreadListItem'
export default {
  props: {
    threads: {
      required: true,
      type: Array
    }
  },
  components: {
    ThreadListItem
  }
}
</script>

<style lang="scss" scoped>
.card > *:nth-child(odd) {
  background-color: rgba(73, 89, 96, .06);
}
</style>
