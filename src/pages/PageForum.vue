<template>
  <div>
    <div class="forumHeader mb-3">
      <div class="forumDetail">
        <h1>{{forum.name}}</h1>
        <h2>{{forum.description ? forum.description : 'No description.'}}</h2>
      </div>
        <router-link :to="{name: 'PageThreadCreate', params: {id: this.forum['.key']}}" class="btnStartThread"><div class="btn btn-primary">Start a thread</div></router-link>
    </div>
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList'
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    ThreadList
  },
  computed: {
    forum () {
      return this.$store.state.forums[this.id]
    },
    threadsIdInForum () {
      if (!this.forum.threads) {
        return []
      }
      return Object.values(this.forum.threads)
    },
    threads () {
      return Object.values(this.$store.state.threads)
        .filter(thread => this.threadsIdInForum.includes(thread['.key']))
    }
  }
}
</script>

<style lang="scss" scoped>
.forumHeader {
  display: flex;
  .forumDetail {
    flex: 1;
  }
  .btnStartThread {
    align-self: flex-end;
  }
}
</style>
