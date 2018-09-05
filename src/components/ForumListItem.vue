<template>
  <div class="forumListItem">
    <div class="forumDetail">
      <h5 class="card-title">
        <router-link :to="{name: 'PageForum', params: {id: this.forum['.key']}}">{{forum.name}}</router-link>
      </h5>
      <p class="card-text">{{forum.description ? forum.description : 'No description.'}}</p>
    </div>
    <div class="threadsCount"><div>{{threadsCount}}</div><span>{{threadsCount === 1 ? 'thread' : 'threads'}}</span></div>
  </div>
</template>

<script>
export default {
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  computed: {
    threadsCount () {
      if (!this.forum.threads) {
        return 0
      }
      return Object.values(this.forum.threads).length
    }
  }
}
</script>

<style lang="scss" scoped>
.forumListItem {
  display: flex;
  .forumDetail {
    flex-basis: 60%;
  }
  .threadsCount {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
      font-size: 30px;
    }
  }
}
</style>
