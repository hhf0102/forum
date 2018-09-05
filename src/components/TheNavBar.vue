<template>
  <div class="mb-4">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-4">
      <router-link :to="{name: 'PageHome'}" class="navbar-brand ml-4">LOGO</router-link>
      <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <router-link :to="{name: 'PageProfile'}" class="user mr-4">
        <img :src="user.avatar" alt="" width="50" height="50" class="userImg mr-3">
        <h1 class="userName">{{user.name}}</h1>
      </router-link>
      <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div> -->
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.users[this.$store.state.authId]
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
}
.user {
  display: flex;
  text-decoration: none;
  > .userImg {
    border-radius: 50%;
  }
  .userName {
    margin: 0;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
}
</style>
