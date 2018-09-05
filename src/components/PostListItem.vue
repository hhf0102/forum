<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="userDetail">
        <div class="userName text-center mb-2">{{user.name}}</div>
        <div class="userAvatar text-center">
          <img :src="user.avatar" alt="" width="130" height="130">
        </div>
        <div class="threadsCount mt-3">{{userThreadsCount}} {{userThreadsCount === 1 ? 'thread' : 'threads'}}</div>
        <div class="postsCount mt-2">{{userPostsCount}} {{userPostsCount === 1 ? 'post' : 'posts'}}</div>
      </div>
      <div class="postContent">
        <p>{{post.text}}</p>
        <div class="datePostListItem">{{post.publishedAt | timesChange}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  computed: {
    user () {
      return this.$store.state.users[this.post.userId]
    },
    userThreadsCount () {
      return this.$store.getters.threadsCount(this.user['.key'])
    },
    userPostsCount () {
      return this.$store.getters.postsCount(this.user['.key'])
    }
  },
  filters: {
    timesChange (date) {
      return moment.unix(date).fromNow()
    }
  }
}
</script>

<style lang="scss" scoped>
.card-body {
  min-height: 300px;
  display: flex;
  .userDetail {
    text-align: center;
    flex-basis: 20%;
  }
  .postContent {
    flex-basis: 80%;
    display: flex;
    flex-direction: column;
    .datePostListItem {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
}
</style>
