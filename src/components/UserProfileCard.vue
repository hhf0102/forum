<template>
  <div class="userProfileCard">
    <div class="card mb-5">
      <div class="card-body">
        <div class="userImg">
          <img :src="user.avatar" alt="">
        </div>
        <div class="userDetail mt-3">
          <h2 class="mt-3 username">{{user.username}}</h2>
          <h4 class="name">{{user.name}}</h4>
          <span>{{user.bio ? user.bio : 'No bio specified.'}}</span>
          <br>
          <span class="text-primary faGlobe">{{user.username}} is online</span>
        </div>
        <div class="postsAndThreadsCount mt-5">
          <div class="postsCount">{{userPostsCount}} {{userPostsCount === 1 ? 'post' : 'posts'}}</div>
          <div class="threadsCount">{{userThreadsCount}} {{userThreadsCount === 1 ? 'thread' : 'threads'}}</div>
        </div>
        <div class="userEmail mt-5">
          <i class="fas fa-globe-asia"></i> {{user.email}}
        </div>
      </div>
    </div>
    <router-link :to="{name: 'PageProfileEdit'}"><div class="btn btn-primary btn-lg btnEdit">Edit Profile</div></router-link>
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
  computed: {
    userPostsCount () {
      return this.$store.getters.postsCount(this.user['.key'])
    },
    userThreadsCount () {
      return this.$store.getters.threadsCount(this.user['.key'])
    }
  }
}
</script>

<style lang="scss" scoped>
.userProfileCard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userImg {
  text-align: center;
  > img {
    width: 80%;
  }
}
.userDetail {
  .username {
    font-size: 58px;
    font-weight: bold;
    text-align: center;
  }
  .name {
    font-size: 32px;
    font-weight: 300
  }
  .faGlobe::before {
    content: "\f2be";
    font-family: FontAwesome;
    font-size: 14px;
    font-weight: 100;
    margin-right: 5px;
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
  .userEmail {
    text-align: center;
  }
</style>
