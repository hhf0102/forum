import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageCategory from '@/pages/PageCategory'
import PageForum from '@/pages/PageForum'
import PageThread from '@/pages/PageThread'
import PageProfile from '@/pages/PageProfile'
import PageThreadCreate from '@/pages/PageThreadCreate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    }, {
      path: '/category/:id',
      name: 'PageCategory',
      component: PageCategory,
      props: true
    }, {
      path: '/forum/:id',
      name: 'PageForum',
      component: PageForum,
      props: true
    }, {
      path: '/thread/create/:id',
      name: 'PageThreadCreate',
      component: PageThreadCreate,
      props: true
    }, {
      path: '/thread/:id',
      name: 'PageThread',
      component: PageThread,
      props: true
    }, {
      path: '/profile/me/edit',
      name: 'PageProfileEdit',
      component: PageProfile,
      props: {edit: true}
    }, {
      path: '/profile/me',
      name: 'PageProfile',
      component: PageProfile,
      props: true
    }
  ]
})
