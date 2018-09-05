<template>
  <div>
    <div class="title mb-3">
      <label for="title">Title:</label>
      <br>
      <input id="title" type="text" autocomplete="off" v-model="title">
    </div>
    <div class="content mb-4">
      <label for="content">Content:</label>
      <br>
      <textarea id="content" cols="30" rows="10" v-model="text"></textarea>
    </div>
    <div class="btns">
      <button @click="cancel" class="btn btn-light btn-lg mr-4">Cancel</button>
      <button @click="publish" class="btn btn-primary btn-lg">Publish</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forumId: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    cancel () {
      this.$router.push({name: 'PageForum'})
    },
    publish () {
      this.$store.dispatch('createThread', {forumId: this.forumId, title: this.title, text: this.text})
        .then(thread => {
          this.$router.push({name: 'PageThread', params: {id: thread['.key']}})
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  input {
    width: 100%;
    outline: none;
    height: 50px;
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, .2);
  }
}
.content {
  > textarea {
    width: 100%;
    outline: none;
    padding: 10px 10px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 5px;
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
