<template>
  <div class="card mb-3">
    <div class="card-header bg-primary text-white">
      <router-link :to="{name: 'PageCategory', params: {id: this.category['.key']}}">{{category.name}}</router-link>
    </div>
    <ForumList :forums="forums"/>
  </div>
</template>

<script>
import ForumList from '@/components/ForumList'
export default {
  props: {
    category: {
      required: true,
      type: Object
    }
  },
  components: {
    ForumList
  },
  computed: {
    forumsIdInCategory () {
      return Object.values(this.category.forums)
    },
    forums () {
      return Object.values(this.$store.state.forums)
        .filter(forum => this.forumsIdInCategory.includes(forum['.key']))
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
