import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1'
  },
  getters: {
    authUser (state) {
      return state.users[state.authId]
    },
    threadsCount (state) {
      return function (id) {
        if (state.users[id].threads) {
          return Object.values(state.users[id].threads).length
        }
        return 0
      }
    },
    postsCount (state) {
      return function (id) {
        if (state.users[id].posts) {
          return Object.values(state.users[id].posts).length
        }
        return 0
      }
    }
  },
  actions: {
    createPost ({commit, state}, post) {
      const postId = `postId${Math.random()}`
      post['.key'] = postId
      post.publishedAt = Math.floor(Date.now() / 1000)
      post.userId = state.authId
      commit('setPost', {postId, post})
      commit('appendPostToThread', {threadId: post.threadId, postId})
      commit('appendPostToUser', {userId: post.userId, postId})
    },
    createThread ({commit, state, dispatch}, {forumId, title, text}) {
      return new Promise((resolve, reject) => {
        const publishedAt = Math.floor(Date.now() / 1000)
        const userId = this.state.authId
        const threadId = `threadId${Math.random()}`
        const thread = {
          forumId,
          publishedAt,
          title,
          userId,
          '.key': threadId
        }
        commit('setThread', { threadId, thread })
        commit('appendThreadToForum', { forumId, threadId })
        commit('appendThreadToUser', { userId, threadId })
        dispatch('createPost', {text, threadId})
        resolve(state.threads[threadId])
      })
    },
    updateProfile ({commit}, user) {
      commit('setUser', {userId: user['.key'], user})
    }
  },
  mutations: {
    setUser (state, {userId, user}) {
      Vue.set(state.users, userId, user)
    },
    setPost (state, {postId, post}) {
      Vue.set(state.posts, postId, post)
    },
    setThread (state, {threadId, thread}) {
      Vue.set(state.threads, threadId, thread)
    },
    appendPostToThread (state, {threadId, postId}) {
      if (!state.threads[threadId].posts) {
        Vue.set(state.threads[threadId], 'posts', {})
      }
      Vue.set(state.threads[threadId].posts, postId, postId)
    },
    appendPostToUser (state, {userId, postId}) {
      if (!state.users[userId].posts) {
        Vue.set(state.users[userId], 'posts', {})
      }
      Vue.set(state.users[userId].posts, postId, postId)
    },
    appendThreadToForum (state, {forumId, threadId}) {
      if (!state.forums[forumId].threads) {
        Vue.set(state.forums[forumId], 'threads', {})
      }
      Vue.set(state.forums[forumId].threads, threadId, threadId)
    },
    appendThreadToUser (state, {userId, threadId}) {
      if (!state.users[userId].threads) {
        Vue.set(state.users[userId], 'threads', {})
      }
      Vue.set(state.users[userId].threads, threadId, threadId)
    }
  }
})
