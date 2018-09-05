<template>
  <div class="userProfileCard">
    <div class="card mb-5">
      <div class="card-body">
        <div class="userImg">
          <img :src="user.avatar" alt="">
        </div>
        <div class="userDetail mt-3">
          <input type="text" class="mb-3" v-model="editUser.username">
          <input type="text" class="mb-3" v-model="editUser.name">
          <div class="bio">
            <label for="bio">Bio:</label>
            <textarea id="bio" cols="30" rows="10" v-model="editUser.bio"></textarea>
          </div>
        </div>
        <div class="postsAndThreadsCount mt-5">
          <div class="postsCount">{{userPostsCount}} {{userPostsCount === 1 ? 'post' : 'posts'}}</div>
          <div class="threadsCount">{{userThreadsCount}} {{userThreadsCount === 1 ? 'thread' : 'threads'}}</div>
        </div>
        <div class="userContact mt-5">
          <div class="website mb-2">
            <label for="website">Website</label>
            <input type="text" id="website" autocomplete="off" v-model="editUser.website">
          </div>
          <div class="email mb-2">
            <label for="email">Email</label>
            <input type="text" id="email" autocomplete="off" v-model="editUser.email">
          </div>
          <div class="location mb-4">
            <label for="location">Location</label>
            <input type="text" id="location" autocomplete="off" v-model="editUser.location">
          </div>
        </div>
        <div class="btns">
          <router-link :to="{name: 'PageProfile'}"><div class="btn btn-light btn-lg">Cancel</div></router-link>
          <div @click="save" class="btn btn-primary btn-lg">Save</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      editUser: {...this.user}
    }
  },
  computed: {
    userPostsCount () {
      return this.$store.getters.postsCount(this.user['.key'])
    },
    userThreadsCount () {
      return this.$store.getters.threadsCount(this.user['.key'])
    }
  },
  methods: {
    save () {
      this.$store.dispatch('updateProfile', this.editUser)
      this.$router.push({name: 'PageProfile'})
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 40px;
  padding: 10px 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, .2);
}
.userImg {
  text-align: center;
  > img {
    width: 80%;
  }
}
.userDetail {
  .bio {
    display: flex;
    flex-direction: column;
    > label {
      font-size: 25px;
    }
    textarea {
      border-radius: 5px;
      outline: none;
      border: 1px solid rgba(0, 0, 0, .2);
      height: 140px;
      padding: 10px 10px;
    }
  }
}
.postsAndThreadsCount {
  display: flex;
  .postsCount {
    flex-basis: 50%;
    font-size: 32px;
    font-weight: 200;
    text-align: center;
  }
  .threadsCount {
    flex-basis: 50%;
    font-size: 32px;
    font-weight: 200;
    text-align: center;
  }
}
.btns {
  display: flex;
  justify-content: space-between;
  div {
    width: 100px;
  }
}
</style>
