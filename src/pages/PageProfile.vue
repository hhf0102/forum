<template>
  <div class="row">
    <div class="col-4">
      <UserProfileCard :user="user" v-if="!edit"/>
      <UserProfileCardEditor v-else :user="user"/>
    </div>
    <div class="col-8">
      <h2>{{user.username}}'s recent activity</h2>
      <PostList :posts="posts"/>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import UserProfileCard from '@/components/UserProfileCard'
import UserProfileCardEditor from '@/components/UserProfileCardEditor'
export default {
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    PostList,
    UserProfileCard,
    UserProfileCardEditor
  },
  computed: {
    user () {
      return this.$store.getters.authUser
    },
    postsInUser () {
      if (!this.user.posts) {
        return []
      }
      return Object.values(this.user.posts)
    },
    posts () {
      return Object.values(this.$store.state.posts)
        .filter(post => this.postsInUser.includes(post['.key']))
    }
  }
}
</script>
