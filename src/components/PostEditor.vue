<template>
  <form @submit.prevent="create">
    <div class="form-group">
      <textarea v-model="text" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
    </div>
    <button class="btn btn-primary mt-4 btn-lg btnSubmitPost">Submit post</button>
  </form>
</template>

<script>
export default {
  props: {
    threadId: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    create () {
      const post = {
        text: this.text,
        threadId: this.threadId
      }
      this.text = ''
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  .btnSubmitPost {
    align-self: flex-end;
  }
}
</style>
