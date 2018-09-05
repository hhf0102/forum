<template>
  <div>
    <h1>{{thread.title}}</h1>
    <h5 class="mt-2">By {{user.name}}, {{thread.publishedAt | timesChange}}</h5>
    <PostList :posts="posts"/>
    <PostEditor :threadId="thread['.key']"/>
  </div>
</template>

<script>
import PostEditor from '@/components/PostEditor'
import PostList from '@/components/PostList'
import moment from 'moment'
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    PostList,
    PostEditor
  },
  computed: {
    thread () {
      return this.$store.state.threads[this.id]
    },
    userIdInThread () {
      return this.thread.userId
    },
    user () {
      return this.$store.state.users[this.userIdInThread]
    },
    posts () {
      return Object.values(this.$store.state.posts)
        .filter(post => Object.values(this.thread.posts).includes(post['.key']))
    }
  },
  filters: {
    timesChange (date) {
      return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>

<style lang="scss" scoped>
.btnEditThread {
  text-decoration: none;
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border-radius: 5px;
}
</style>
