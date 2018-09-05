<template>
  <div class="card-body">
    <ForumListItem
    v-for="forum in forums"
    :forum="forum"
    :key="forum['.key']"
    />
  </div>
</template>

<script>
import ForumListItem from '@/components/ForumListItem'
export default {
  props: {
    forums: {
      required: true,
      type: Array
    }
  },
  components: {
    ForumListItem
  }
}
</script>

<style lang="scss" scoped>
.card-body {
  padding: 0;
  display: flex;
  flex-direction: column;
  > * {
    padding: 20px 20px;
    flex: 1;
    &:nth-child(even) {
      background-color: rgba(73, 89, 96, .06);
    }
  }
}
</style>
